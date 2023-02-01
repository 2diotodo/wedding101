from QT_screens_code.mainwindow import Ui_Form
from QT_screens_code.chk_Dialog import Ui_chk_Dialog

import importlib.util
spec = importlib.util.find_spec("PySide2")

VERSION = "DEVELOP"
if spec is None:
    from PySide6.QtWidgets import *
    from PySide6.QtCore import *
    from PySide6.QtGui import *
    from PySide6.QtMultimedia import *
    from PySide6.QtMultimediaWidgets import *
else:
    VERSION = "RELEASE"
    from PySide2.QtWidgets import *
    from PySide2.QtCore import *
    from PySide2.QtGui import *
    from PySide2.QtMultimedia import *
    from PySide2.QtMultimediaWidgets import *
    import cv2

import pyaudio, wave, threading, time, subprocess, os
import numpy as np
from datetime import datetime
from uuid import uuid4


relation_list = ['', 'family', 'relatives', 'friend', 'colleague', 'acquaintance']
receiver_list = ['', 'groom', 'bride']


class VideoRecorder(QThread):
    mySignal = Signal(QPixmap)

    "Video class based on openCV"
    def __init__(self, name="temp_video.avi", fourcc="MJPG", sizex=640, sizey=480, camindex=0, fps=60):
        super().__init__()
        self.open = True
        self.device_index = camindex
        self.fps = fps                  # fps should be the minimum constant rate at which the camera can
        self.fourcc = fourcc            # capture images (with no decrease in speed over time; testing is required)
        self.frameSize = (sizex, sizey) # video formats and sizes also depend and vary according to the camera used
        self.video_filename = name + "-video.avi"
        self.video_cap = cv2.VideoCapture(self.device_index)
        self.video_writer = cv2.VideoWriter_fourcc(*self.fourcc)
        self.video_out = cv2.VideoWriter(self.video_filename, self.video_writer, self.fps, self.frameSize)
        self.frame_counts = 1
        self.start_time = time.time()
        self.video_frame = None
        self.background_image = None


        self.fps = 60
        self.width = 640
        self.height = 480
        # mediapipe modules
        # self.mp_drawing = mp.solutions.drawing_utils
        # self.mp_drawing_styles = mp.solutions.drawing_styles
        # self.mp_selfie_segmentation = mp.solutions.selfie_segmentation
        # self.mp_holistic = mp.solutions.holistic


    def run(self):
        # self.set_background_image(bg_dir = "../BackgroundImage", bg_name = "flower1.png")

        "Video starts being recorded"
        # counter = 1
        timer_start = time.time()
        timer_current = 0
        self.open = True
        while self.open:
            ret, self.video_frame = self.video_cap.read()
            if ret:
                self.video_frame = cv2.flip(self.video_frame, 0)
                # self.chromakey_replacement()
                # self.mediapipe_selfie_segmentation()
                self.video_out.write(self.video_frame)
                # print(str(counter) + " " + str(self.frame_counts) + " frames written " + str(timer_current))
                self.frame_counts += 1


                imgRGB = cv2.cvtColor(self.video_frame, cv2.COLOR_BGR2RGB)
                h, w, byte = imgRGB.shape
                img = QImage(imgRGB, w, h, byte * w, QImage.Format_RGB888)
                pix_img = QPixmap(img)
                self.mySignal.emit(pix_img)

                # counter += 1
                # timer_current = time.time() - timer_start
                # time.sleep(1/self.fps)
                # gray = cv2.cvtColor(video_frame, cv2.COLOR_BGR2GRAY)                 
                # cv2.imshow('video_frame', gray)
                # cv2.waitKey(1)
            else:
                break
    
    '''
        def set_background_image(self, bg_dir = "../BackgroundImage", bg_name = 'flower1.png'):
            background_path = os.path.join(bg_dir, bg_name)
            background_image = cv2.imread(background_path)
            background_image = cv2.resize(background_image, (self.width, self.height))
            self.background_image = background_image

        def mediapipe_selfie_segmentation(self) :
            # For webcam input:
            BG_COLOR = (192, 192, 192) # gray
            with self.mp_selfie_segmentation.SelfieSegmentation(model_selection=1) as selfie_segmentation:

                # Flip the image horizontally for a later selfie-view display, and convert
                # the BGR image to RGB.
                self.video_frame = cv2.cvtColor(cv2.flip(self.video_frame, 1), cv2.COLOR_BGR2RGB)
                
                # To improve performance, optionally mark the image as not writeable to
                # pass by reference.
                self.video_frame.flags.writeable = False
                self.video_frame.flags.writeable = True
                self.video_frame = cv2.cvtColor(self.video_frame, cv2.COLOR_RGB2BGR)

                # Draw selfie segmentation on the background image.
                # To improve segmentation around boundaries, consider applying a joint
                # bilateral filter to "results.segmentation_mask" with "image".
                condition = np.stack((selfie_segmentation.process(self.video_frame).segmentation_mask,) * 3, axis=-1) > 0.1
                
                # The background can be customized.
                #   a) Load an image (with the same width and height of the input image) to
                #      be the background, e.g., bg_image = cv2.imread('/path/to/image/file')
                #   b) Blur the input image by applying image filtering, e.g.,
                #      bg_image = cv2.GaussianBlur(image,(55,55),0)
                if self.background_image is None:
                    self.background_image = np.zeros(self.video_frame.shape, dtype=np.uint8)
                    self.background_image[:] = BG_COLOR

                self.video_frame = np.where(condition, self.video_frame, self.background_image)

        def chromakey_replacement(self):
            # # check hsv value from image
            # hsv = cv2.cvtColor(self.video_frame, cv2.COLOR_BGR2HSV)
            
            # # make a mask from hsv values
            # mask = cv2.inRange(hsv, (50, 150, 0), (70, 255, 255)) # 영상, 최솟값, 최댓값
            
            # # utilizing mask to input image
            # # copyTo(src, mask, dst)
            # cv2.copyTo(self.background_image, mask, self.video_frame)

            norm_factor = 255
            b = self.video_frame[:, :, 0] / norm_factor
            g = self.video_frame[:, :, 1] / norm_factor
            r = self.video_frame[:, :, 2] / norm_factor

            red_vs_green = (r - g) + .3
            blue_vs_green = (b - g) + .3

            """
            Darker pixels would be around 0.
            In order to ommit removing dark pixels we
            sum .3 to make small negative numbers to be
            above 0.
            """

            red_vs_green = (r - g) + .3
            blue_vs_green = (b - g) + .3

            """
            Now pixels below 0. value would have a
            high probability to be background green
            pixels.
            """
            red_vs_green[red_vs_green < 0] = 0
            blue_vs_green[blue_vs_green < 0] = 0

            """
            Combine the red(blue) vs green ratios to
            set an alpha layer with valid alpha-values.
            """
            alpha = (red_vs_green + blue_vs_green) * 255
            alpha[alpha > 50] = 255

            self.video_frame[alpha == 0] = self.background_image[alpha == 0]
    '''


    def stop(self):
        "Finishes the video recording therefore the thread too"
        if self.open:
            self.open=False
            self.video_cap.release()
            # self.video_out.release()
            cv2.destroyAllWindows()
            self.quit()
            self.wait(500) #5000ms = 5s


class AudioRecorder(QThread):
    "Audio class based on pyAudio and Wave"
    def __init__(self, filename="temp_audio.wav", rate=44100, fpb=1024, channels=2):
        super().__init__()
        self.open = True
        self.rate = rate
        self.frames_per_buffer = fpb
        self.channels = channels
        self.format = pyaudio.paInt16
        self.audio_filename = filename + "-audio.wav"
        self.audio = pyaudio.PyAudio()
        self.stream = self.audio.open(format=self.format,
                                      channels=self.channels,
                                      rate=self.rate,
                                      input=True,
                                      frames_per_buffer = self.frames_per_buffer)
        self.audio_frames = []

    def run(self):
        "Audio starts being recorded"
        self.stream.start_stream()
        self.open = True
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
            self.wait(500) #5000ms = 5s




class CheckDialog(QDialog, Ui_chk_Dialog):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowFlags(Qt.WindowType.FramelessWindowHint)

    def show_dialog(self):
        if VERSION == "DEVELOP":
            return super().exec()
        elif VERSION == "RELEASE":
            return super().exec_()


class MyApp(QWidget, Ui_Form):
    userSignal = Signal()

    def __init__(self):
        super().__init__()
        # set class variable
        self.th = None

        # set class functions
        self.setupUi(self)
        self.media_player = QMediaPlayer()
        self.audio_output = None
        if VERSION == "DEVELOP":
            self.audio_output = QAudioOutput()
        # self.camera = None
        # self.image_capture = None
        # self.available_cameras = QMediaDevices.videoInputs()
        # if self.available_cameras:
        #     self.camera = QCamera(self.available_cameras[0])
        #     self.image_capture = QImageCapture(self.camera)

        # self.stackedWidget.setCurrentIndex(0)

        # setting up resources
        self.arrow_button_pix = QPixmap("QT_Resources/Pics/proceed.png")
        self.arrow_icon = QIcon(self.arrow_button_pix)
        self.disabled_button_pix = QPixmap("QT_Resources/Pics/unavailable_proceed.png")
        self.disabled_button_icon = QIcon(self.disabled_button_pix)
        self.prev_button_pix = QPixmap("QT_Resources/Pics/prev.png")
        self.prev_icon = QIcon(self.prev_button_pix)
        self.home_button_pix = QPixmap("QT_Resources/Pics/home.png")
        self.home_icon = QIcon(self.home_button_pix)
        self.home_button2_pix = QPixmap("QT_Resources/Pics/home_2.png")
        self.home_icon2 = QIcon(self.home_button2_pix)

        self.font_id1 = QFontDatabase.addApplicationFont(
            "QT_Resources/Fonts/BeauRivage-Regular.ttf")
        self.font_id2 = QFontDatabase.addApplicationFont(
            "QT_Resources/Fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf")

        self.SenderName = ''
        self.SenderRelation = 0
        self.SenderReceiver = 0

        self.setup_pages()

                # set control_bt callback clicked  function
        # set video and audio record thread
        self.open = False
        self.video_thread = None
        self.audio_thread = None
        self.name = None

    def main(self):
        # this is video thread
        # if spec is not None:
        #     self.th.mySignal.connect(self.setImage)
        #     self.th.start()
        pass

    def setImage(self, img):
        self.video_stream.setPixmap(img)

    def set_srvc_chk(self):
        self.srvc_chk_button.setIcon(self.arrow_icon)
        self.srvc_chk_button.setIconSize(self.arrow_button_pix.rect().size())

    def set_home(self):
        self.home_background.setStyleSheet("background-image: url('QT_Resources/Pics/home_back.png')")
        self.home_background.setFont(QFont('Beau Rivage', 100))
        self.home_text1.setFont(QFont('Beau Rivage', 40))
        self.home_text1.setStyleSheet("background-color: rgba(255,255,255,0);")

    def set_info(self):
        self.info_title.setFont(QFont('Beau Rivage', 60))
        self.info_next_button.setIcon(self.arrow_icon)
        self.info_next_button.setIconSize(self.arrow_button_pix.rect().size())
        self.info_image1.setPixmap(QPixmap("QT_Resources/Pics/congrat.png"))
        self.info_image1.setScaledContents(True)
        self.info_image2.setPixmap(QPixmap("QT_Resources/Pics/vidready.png"))
        self.info_image2.setScaledContents(True)

    def set_agreement(self):
        self.agreement_page.setStyleSheet("QCheckBox::indicator{width:36px;height:36px;}")
        self.agreement_next_button.setIcon(self.disabled_button_icon)
        self.agreement_next_button.setIconSize(self.disabled_button_pix.rect().size())
        self.agreement_next_button.setDisabled(True)
        self.agreement_checkBox1.stateChanged.connect(self.check_agreement)
        self.agreement_checkBox2.stateChanged.connect(self.check_agreement)

    def set_input(self):
        self.input_page.setStyleSheet("QComboBox:: {text-align: center;}")
        self.input_home_button.setIcon(self.home_icon)
        self.input_home_button.setIconSize(self.home_button_pix.rect().size())
        self.input_next_button.setIcon(self.arrow_icon)
        self.input_next_button.setIconSize(self.arrow_button_pix.rect().size())
        self.input_page.setStyleSheet("QComboBox::down-arrow{"
                                      "image:url('QT_Resources/Pics/down_arrow.png')}"
                                      "QComboBox::drop-down{right:50px;}")
        self.input_relation_combo.currentIndexChanged.connect(self.select_relation)
        self.input_receiver_combo.currentIndexChanged.connect(self.select_receiver)

    def set_thanks(self):
        self.thanks_title.setFont(QFont('Playfair Display', 40))
        if VERSION == "DEVELOP":
            self.media_player.setSource(QUrl('QT_Resources/Videos/sample_video.mkv'))
            self.media_player.setAudioOutput(self.audio_output)
            self.audio_output.setVolume(80)
        elif VERSION == "RELEASE":
            media = QMediaContent(QUrl.fromLocalFile("QT_Resources/Videos/sample_video.mkv"))
            self.media_player.setMedia(media)
        self.media_player.setVideoOutput(self.thanks_video_screen)
        self.thanks_video_screen.show()

    def set_select(self):
        self.select_home_button.setIcon(self.home_icon2)
        self.select_home_button.setIconSize(self.home_button2_pix.rect().size())
        self.select_prev_button.setIcon(self.prev_icon)
        self.select_prev_button.setIconSize(self.prev_button_pix.rect().size())
        self.select_sample_img1.setStyleSheet("background-image: url('QT_Resources/Pics/congrat_sample.png');"
                                              "border-radius: 0;")
        cong_gif = QMovie("QT_Resources/Pics/congrat_vid.gif")
        self.select_sample_img2.setMovie(cong_gif)
        cong_gif.start()

    def set_photo(self):
        pass

    def setup_pages(self):
        self.set_srvc_chk()
        self.set_home()
        self.set_info()
        self.set_agreement()
        self.set_input()
        self.set_thanks()
        self.set_select()
        self.set_photo()


    def go_next_page(self):
        current_page = self.stackedWidget.currentIndex()
        sender = self.sender()
        print(sender)
        if sender.objectName() == "select_vid_button":
            current_page += 2
        self.stackedWidget.setCurrentIndex(current_page + 1)
        self.media_player.stop()

    def go_prev_page(self):
        current_page = self.stackedWidget.currentIndex()
        sender = self.sender()
        print(sender.objectName())
        if sender.objectName() == "video_prev_button":
            current_page -= 2
        self.stackedWidget.setCurrentIndex(current_page - 1)

    def go_home_page(self):
        self.stackedWidget.setCurrentIndex(1)
        self.input_name_edit.clear()
        self.input_relation_combo.setCurrentIndex(0)
        self.input_receiver_combo.setCurrentIndex(0)
        self.SenderName = ''
        self.SenderRelation = 0
        self.SenderReceiver = 0

    def go_video_page(self):
        current_page = self.stackedWidget.currentIndex()
        self.stackedWidget.setCurrentIndex(current_page + 2)

    def go_end_page(self):
        self.stackedWidget.setCurrentIndex(self.stackedWidget.count() - 1)

    def record_start(self):
        pass

    def record_stop(self):
        pass

    def record_control(self):
        if self.open:
            self.open = False
            self.stop_AVrecording()
            self.video_control_button.setText("Record")
            self.video_stream.setText("Camera")
            self.file_manager()
            self.go_next_page()
        else:
            self.open = True
            self.start_AVrecording()
            self.video_control_button.setText("Stop")
            self.video_stream.setText("recording")

    # start/stop both thread
    def start_AVrecording(self, filename="test"):
        self.name = datetime.now().strftime('%Y-%m%d-%H%M%S-') + str(uuid4())
        self.video_thread = VideoRecorder(name = self.name)
        print("created video thread")
        self.audio_thread = AudioRecorder(filename = self.name)
        print("created audio thread")
        self.video_thread.mySignal.connect(self.setImage)
        print("add signal from video thread")
        self.audio_thread.start()
        print("started audio thread")
        self.video_thread.start()
        print("started video thread")
        return filename

    def stop_AVrecording(self, filename="test"):
        self.audio_thread.stop()
        print("audio thread stopped")
        frame_counts = self.video_thread.frame_counts
        elapsed_time = time.time() - self.video_thread.start_time
        recorded_fps = frame_counts / elapsed_time
        print("total frames " + str(frame_counts))
        print("elapsed time " + str(elapsed_time))
        print("recorded fps " + str(recorded_fps))
        self.video_thread.stop()
        print("video thread stopped")
        self.video_control_button.setText("Camera")


        # # Makes sure the threads have finished    
        # while threading.active_count() > 1:
        #     time.sleep(1)

        # Merging audio and video signal
        if abs(recorded_fps - 6) >= 0.01:    # If the fps rate was higher/lower than expected, re-encode it to the expected
            print("Re-encoding")
            cmd = "ffmpeg -r " + str(recorded_fps) + f" -i {self.name}-video.avi -pix_fmt yuv420p -r 6 {self.name}2-video.avi"
            subprocess.call(cmd, shell=True)
            print("Muxing")
            cmd = f"ffmpeg -y -ac 2 -channel_layout stereo -i {self.name}-audio.wav -i {self.name}2-video.avi -pix_fmt yuv420p " + self.name + ".avi"
            subprocess.call(cmd, shell=True)
        else:
            print("Normal recording\nMuxing")
            cmd = f"ffmpeg -y -ac 2 -channel_layout stereo -i {self.name}-audio.wav -i {self.name}-video.avi -pix_fmt yuv420p " + self.name + ".avi"
            subprocess.call(cmd, shell=True)
            print("..")


    def file_manager(self, filename="test"):
        "Required and wanted processing of final files"
        local_path = os.getcwd()
        if os.path.exists(str(local_path) + f"/{self.name}-audio.wav"):
            os.remove(str(local_path) + f"/{self.name}-audio.wav")
        if os.path.exists(str(local_path) + f"/{self.name}-video.avi"):
            os.remove(str(local_path) + f"/{self.name}-video.avi")
        if os.path.exists(str(local_path) + f"/{self.name}2-video.avi"):
            os.remove(str(local_path) + f"/{self.name}2-video.avi")
        # if os.path.exists(str(local_path) + "/" + filename + ".avi"):
        #     os.remove(str(local_path) + "/" + filename + ".avi")def file_manager(filename="test"):
        "Required and wanted processing of final files"
        local_path = os.getcwd()
        if os.path.exists(str(local_path) + f"/{self.name}-audio.wav"):
            os.remove(str(local_path) + f"/{self.name}-audio.wav")
        if os.path.exists(str(local_path) + f"/{self.name}-video.avi"):
            os.remove(str(local_path) + f"/{self.name}-video.avi")
        if os.path.exists(str(local_path) + f"/{self.name}2-video.avi"):
            os.remove(str(local_path) + f"/{self.name}2-video.avi")
        # if os.path.exists(str(local_path) + "/" + filename + ".avi"):
        #     os.remove(str(local_path) + "/" + filename + ".avi")

    def close_window(self):
        # if spec is not None:
        #     self.th.terminate()
        #     self.th.wait(3000)
        self.close()

    def check_service_validation(self):
        check_validation_window = CheckDialog()
        check_validation_window.setModal(True)
        cd = check_validation_window.show_dialog()
        print(cd)
        if cd:
            current_page = self.stackedWidget.currentIndex()
            sender = self.sender()
            print(sender)
            if sender.objectName() == "select_vid_button":
                current_page += 2
            self.stackedWidget.setCurrentIndex(current_page + 1)

    def check_agreement(self):
        if self.agreement_checkBox1.isChecked() and self.agreement_checkBox2.isChecked():
            self.agreement_next_button.setIcon(self.arrow_icon)
            self.agreement_next_button.setDisabled(False)
            self.agreement_next_button.setEnabled(True)
            print("yes")
        else:
            self.agreement_next_button.setIcon(self.disabled_button_icon)
            self.agreement_next_button.setEnabled(False)
            self.agreement_next_button.setDisabled(True)
            print("not")

    def check_input(self):
        if not self.input_name_edit.text():
            print("이름 없음")
            return
        if not self.SenderRelation:
            print('관계 없음')
            return
        if not self.SenderReceiver:
            print('대상 없음')
            return
        self.SenderName = self.input_name_edit.text()
        self.go_next_page()
        self.media_player.play()

    def select_relation(self):
        self.SenderRelation = self.input_relation_combo.currentIndex()
        print(self.SenderRelation)

    def select_receiver(self):
        self.SenderReceiver = self.input_receiver_combo.currentIndex()
        print(self.SenderReceiver)


app = QApplication()
app.setApplicationName("Wed101")

win = MyApp()
win.show()

if VERSION == "DEVELOP":
    app.exec()
elif VERSION == "RELEASE":
    app.exec_()
