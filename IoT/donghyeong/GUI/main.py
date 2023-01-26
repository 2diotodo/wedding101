import os
import imutils
import numpy as np
import importlib.util
import mediapipe as mp

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

from MainWindow import Ui_Form
from time import *
from random import randrange

class MyThread(QThread):
    mySignal = Signal(QPixmap)
    def __init__(self):
        super().__init__()
        if spec is not None:
            self.cam = cv2.VideoCapture(0)
            self.frame_cnt = 0
            self.img = None
            self.video_stream = None
            self.fourcc = cv2.VideoWriter_fourcc(*'XVID')
            self.record = False
            self.fps = 60
            # mediapipe modules
            self.mp_drawing = mp.solutions.drawing_utils
            self.mp_drawing_styles = mp.solutions.drawing_styles
            self.mp_selfie_segmentation = mp.solutions.selfie_segmentation
            self.mp_holistic = mp.solutions.holistic


    def run(self):
        while True:
            ret, self.img = self.cam.read()

            if ret:
                self.resize_image(width = 640, height = 480)
                self.image_processing(mode = 2, frame_check = 1)
                self.printImage()
            else:
                print("camera is not working")
                self.close_window()
                return

            self.frame_cnt += 1
            sleep(1/self.fps) # 60 fps

    def resize_image(self, width, height):
        image = self.img
        # 상하반전
        image = cv2.flip(image, 0) 
        
        # 1) 가로 모드
        # resizing - default interpolation: linear
        image = cv2.resize(image, (width, height))

        # TODO: 2) 세로모드 - rotation + resize

        self.img = image

    def image_processing(self, mode = 2, frame_check = 12):
        '''
        1. Segmentation - selfie
        2. Detection - right/left hand, Pose
        3. Chroma key replacement
        '''
        image = self.img
        w = round(self.cam.get(cv2.CAP_PROP_FRAME_WIDTH))
        h = round(self.cam.get(cv2.CAP_PROP_FRAME_HEIGHT))

        # 웹캠으로 찰영한 영상을 저장하기
        # cv2.VideoWriter 객체 생성, 기존에 받아온 속성값 입력
        out = cv2.VideoWriter('./BackgroundImage/output.avi', self.fourcc, self.fps, (w, h))

        # 1. Selfie Segmentation
        if mode == 1:
            self.mediapipe_selfie_segmentation()

        # 2. Detection
        # frame_check : default is 1. chekcing every frame
        elif (mode == 2) and (self.frame_cnt % frame_check == 0):
            self.mediapipe_holistic()
        
        elif (mode == 3) :
            self.chromakey_replacement()
        
        out.write(self.img)

    def mediapipe_holistic(self) :
        with self.mp_holistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
            image = self.img

            # Recolor from BGR to RGB
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

            # Make Detections
            results = holistic.process(image)

            # Recolor from RGB to BGR
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            # Right hand
            self.mp_drawing.draw_landmarks(image, 
                                            results.right_hand_landmarks, 
                                            self.mp_holistic.HAND_CONNECTIONS)
            
            # Left hand
            self.mp_drawing.draw_landmarks(image, 
                                            results.left_hand_landmarks, 
                                            self.mp_holistic.HAND_CONNECTIONS)

            # # Pose Detection 
            # self.mp_drawing.draw_landmarks(image, 
            #                                results.pose_landmarks, 
            #                                self.mp_holistic.POSE_CONNECTIONS)
            self.img = image

    def mediapipe_selfie_segmentation(self) :
        # For webcam input:
        BG_COLOR = (192, 192, 192) # gray
        with self.mp_selfie_segmentation.SelfieSegmentation(model_selection=1) as selfie_segmentation:
            bg_dir = "./BackgroundImage"
            bg_image = os.path.join(bg_dir, f'flower1.png')
            image = self.img

            # Flip the image horizontally for a later selfie-view display, and convert
            # the BGR image to RGB.
            image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
            # To improve performance, optionally mark the image as not writeable to
            # pass by reference.
            image.flags.writeable = False
            results = selfie_segmentation.process(image)

            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            # Draw selfie segmentation on the background image.
            # To improve segmentation around boundaries, consider applying a joint
            # bilateral filter to "results.segmentation_mask" with "image".
            condition = np.stack((results.segmentation_mask,) * 3, axis=-1) > 0.1
            
            # The background can be customized.
            #   a) Load an image (with the same width and height of the input image) to
            #      be the background, e.g., bg_image = cv2.imread('/path/to/image/file')
            #   b) Blur the input image by applying image filtering, e.g.,
            #      bg_image = cv2.GaussianBlur(image,(55,55),0)
            if bg_image is None:
                bg_image = np.zeros(image.shape, dtype=np.uint8)
                bg_image[:] = BG_COLOR
            else:
                bg_image = cv2.imread(bg_image)
                bg_image = cv2.resize(bg_image, (np.shape(image)[1], np.shape(image)[0]))

            self.img = np.where(condition, image, bg_image)

    def chromakey_replacement(self):
        pass

    def printImage(self):
        imgBGR = self.img
        imgRGB = cv2.cvtColor(imgBGR, cv2.COLOR_BGR2RGB)
        h, w, byte = imgRGB.shape
        img = QImage(imgRGB, w, h, byte * w, QImage.Format_RGB888)
        pix_img = QPixmap(img)
        self.mySignal.emit(pix_img)

class MyApp(QWidget, Ui_Form):
    userSignal = Signal()
    def __init__(self):
        super().__init__()
        # set class variable
        self.th = None

        # set class functions
        self.setupUi(self)
        self.main()

    def main(self):
        # this is video thread
        if spec is not None:
            self.th = MyThread()
            self.th.mySignal.connect(self.setImage)
            self.th.start()

    def setImage(self, img):
        self.video_stream.setPixmap(img)
    
    def go_next_page(self):
        currentpage = self.stackedWidget.currentIndex()
        sender = self.sender()
        print(sender)
        if sender.objectName() == "mode_select_video_button":
            currentpage += 1
        self.stackedWidget.setCurrentIndex(currentpage + 1)

    def go_prev_page(self):
        currentpage = self.stackedWidget.currentIndex()
        sender = self.sender()
        print(sender.objectName())
        if sender.objectName() == "video_prev_button":
            currentpage -= 1
        self.stackedWidget.setCurrentIndex(currentpage - 1)

    def go_home_page(self):
        self.stackedWidget.setCurrentIndex(0)

    def go_video_page(self):
        currentpage = self.stackedWidget.currentIndex()
        self.stackedWidget.setCurrentIndex(currentpage + 2)

    def go_end_page(self):
        self.stackedWidget.setCurrentIndex(self.stackedWidget.count() - 1)

    def record_start(self):
        pass

    def record_stop(self):
        pass

    def close_window(self):
        if spec is not None:
            self.th.terminate()
            self.th.wait(3000)
        self.frame_cnt = 0
        self.close()


app = QApplication()
win = MyApp()

win.show()
app.exec_()
