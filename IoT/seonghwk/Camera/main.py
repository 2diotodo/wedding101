import importlib.util
import picamera

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
        self.video_thread = None
        self.audio_thread = None

    def controlSave(self):
        if self.open:
            self.open = False
            self.stop_AVrecording()
            self.ui.save_bt.setText("Record")
            self.ui.image_label.setText("Camera")
            # self.file_manager()
        else:
            self.open = True
            self.start_AVrecording()
            self.ui.save_bt.setText("Stop")
            self.ui.image_label.setText("recording")


    # start/stop both thread
    def start_AVrecording(self, filename="test"):
        self.audio_thread = AudioRecorder()
        self.video_thread = VideoRecorder()
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