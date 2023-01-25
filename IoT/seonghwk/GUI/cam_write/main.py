import importlib.util

spec = importlib.util.find_spec("PySide2")
if spec is None:
    from PySide6.QtWidgets import *
    from PySide6.QtCore import *
    from PySide6.QtGui import *
else:
    from PySide2.QtWidgets import *
    from PySide2.QtCore import *
    from PySide2.QtGui import *
    import cv2


import pyaudio, wave, threading, time, subprocess, os

from cam_write_ui import Ui_Form

class VideoRecorder(QThread):
    "Video class based on openCV"
    def __init__(self, name="temp_video.avi", fourcc="MJPG", sizex=640, sizey=480, camindex=0, fps=24):
        super().__init__()
        self.open = False
        self.device_index = camindex
        self.fps = fps                  # fps should be the minimum constant rate at which the camera can
        self.fourcc = fourcc            # capture images (with no decrease in speed over time; testing is required)
        self.frameSize = (sizex, sizey) # video formats and sizes also depend and vary according to the camera used
        self.video_filename = name
        self.video_cap = cv2.VideoCapture(self.device_index)
        self.video_writer = cv2.VideoWriter_fourcc(*self.fourcc)
        self.video_out = cv2.VideoWriter(self.video_filename, self.video_writer, self.fps, self.frameSize)
        self.frame_counts = 1
        self.start_time = time.time()

    def record(self):
        "Video starts being recorded"
        # counter = 1
        timer_start = time.time()
        timer_current = 0
        while self.open:
            ret, video_frame = self.video_cap.read()
            if ret:
                self.video_out.write(video_frame)
                # print(str(counter) + " " + str(self.frame_counts) + " frames written " + str(timer_current))
                self.frame_counts += 1
                # counter += 1
                # timer_current = time.time() - timer_start
                time.sleep(1/self.fps)
                # gray = cv2.cvtColor(video_frame, cv2.COLOR_BGR2GRAY)
                # cv2.imshow('video_frame', gray)
                # cv2.waitKey(1)
            else:
                break

    def stop(self):
        "Finishes the video recording therefore the thread too"
        if self.open:
            self.open=False
            self.video_out.release()
            self.video_cap.release()
            cv2.destroyAllWindows()
            self.quit()


    def run(self):
        "Launches the video recording function using a thread"
        self.open = True
        video_thread = threading.Thread(target=self.record)
        video_thread.start()

  
class AudioRecorder(QThread):
    "Audio class based on pyAudio and Wave"
    def __init__(self, filename="temp_audio.wav", rate=44100, fpb=1024, channels=2):
        super().__init__()
        self.open = True
        self.rate = rate
        self.frames_per_buffer = fpb
        self.channels = channels
        self.format = pyaudio.paInt16
        self.audio_filename = filename
        self.audio = pyaudio.PyAudio()
        self.stream = self.audio.open(format=self.format,
                                      channels=self.channels,
                                      rate=self.rate,
                                      input=True,
                                      frames_per_buffer = self.frames_per_buffer)
        self.audio_frames = []

    def record(self):
        "Audio starts being recorded"
        self.stream.start_stream()
        while self.open:
            data = self.stream.read(self.frames_per_buffer) 
            self.audio_frames.append(data)
            if not self.open:
                break

    def stop(self):
        "Finishes the audio recording therefore the thread too"
        if self.open:
            self.open = False
            self.stream.stop_stream()
            self.stream.close()
            self.audio.terminate()
            waveFile = wave.open(self.audio_filename, 'wb')
            waveFile.setnchannels(self.channels)
            waveFile.setsampwidth(self.audio.get_sample_size(self.format))
            waveFile.setframerate(self.rate)
            waveFile.writeframes(b''.join(self.audio_frames))
            waveFile.close()
            self.quit()

    def run(self):
        "Launches the audio recording function using a thread"
        self.open = True
        audio_thread = threading.Thread(target=self.record)
        audio_thread.start()


class MainWindow(QWidget):
    # class constructor
    def __init__(self):
        # call QWidget constructor
        super().__init__()
        self.ui = Ui_Form()
        self.ui.setupUi(self)
        # icon
        self.setWindowIcon(QIcon('icon.png'))
        # set control_bt callback clicked  function
        self.ui.save_bt.clicked.connect(self.controlSave)
        # set video and audio record thread
        self.open = False
        self.video_thread = VideoRecorder()
        self.audio_thread = AudioRecorder()

    def controlSave(self):
        if self.open:
            self.open = False
            self.stop_AVrecording()
            self.ui.save_bt.setText("Record")
            self.ui.image_label.setText("Camera")
            self.file_manager()
        else:
            self.open = True
            self.start_AVrecording()
            self.ui.save_bt.setText("Stop")
            self.ui.image_label.setText("recording")


    # start/stop both thread
    def start_AVrecording(self, filename="test"):
        self.audio_thread.start()
        self.video_thread.start()
        return filename
    

    def stop_AVrecording(self, filename="test"):
        self.audio_thread.stop() 
        frame_counts = self.video_thread.frame_counts
        elapsed_time = time.time() - self.video_thread.start_time
        recorded_fps = frame_counts / elapsed_time
        print("total frames " + str(frame_counts))
        print("elapsed time " + str(elapsed_time))
        print("recorded fps " + str(recorded_fps))
        self.video_thread.stop() 

        # # Makes sure the threads have finished
        # while threading.active_count() > 1:
        #     time.sleep(1)

        # Merging audio and video signal
        if abs(recorded_fps - 6) >= 0.01:    # If the fps rate was higher/lower than expected, re-encode it to the expected
            print("Re-encoding")
            cmd = "ffmpeg -r " + str(recorded_fps) + " -i temp_video.avi -pix_fmt yuv420p -r 6 temp_video2.avi"
            subprocess.call(cmd, shell=True)
            print("Muxing")
            cmd = "ffmpeg -y -ac 2 -channel_layout stereo -i temp_audio.wav -i temp_video2.avi -pix_fmt yuv420p " + filename + ".avi"
            subprocess.call(cmd, shell=True)
        else:
            print("Normal recording\nMuxing")
            cmd = "ffmpeg -y -ac 2 -channel_layout stereo -i temp_audio.wav -i temp_video.avi -pix_fmt yuv420p " + filename + ".avi"
            subprocess.call(cmd, shell=True)
            print("..")


    def file_manager(self, filename="test"):
        "Required and wanted processing of final files"
        local_path = os.getcwd()
        if os.path.exists(str(local_path) + "/temp_audio.wav"):
            os.remove(str(local_path) + "/temp_audio.wav")
        if os.path.exists(str(local_path) + "/temp_video.avi"):
            os.remove(str(local_path) + "/temp_video.avi")
        if os.path.exists(str(local_path) + "/temp_video2.avi"):
            os.remove(str(local_path) + "/temp_video2.avi")
        # if os.path.exists(str(local_path) + "/" + filename + ".avi"):
        #     os.remove(str(local_path) + "/" + filename + ".avi")def file_manager(filename="test"):
        "Required and wanted processing of final files"
        local_path = os.getcwd()
        if os.path.exists(str(local_path) + "/temp_audio.wav"):
            os.remove(str(local_path) + "/temp_audio.wav")
        if os.path.exists(str(local_path) + "/temp_video.avi"):
            os.remove(str(local_path) + "/temp_video.avi")
        if os.path.exists(str(local_path) + "/temp_video2.avi"):
            os.remove(str(local_path) + "/temp_video2.avi")
        # if os.path.exists(str(local_path) + "/" + filename + ".avi"):
        #     os.remove(str(local_path) + "/" + filename + ".avi")

app = QApplication()
win = MainWindow()

win.show()
app.exec_()