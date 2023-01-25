import importlib.util
import imutils
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
                # self.image_processing(mode = 2, frame_check = 1)
                self.printImage()
            else:
                print("camera is not working")

            self.frame_cnt += 1
            sleep(1/60) # 60 fps

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
        '''
        image = self.img
        # 1. Selfi Segmentation
        if mode == 1:
            # TODO: 
            pass

        # 2. Detection
        elif mode == 2 :
            with self.mp_holistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
                # Recolor from BGR to RGB
                image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

                # Make Detections
                results = holistic.process(image)

                # Recolor from RGB to BGR
                image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

                # # Right hand
                # self.mp_drawing.draw_landmarks(image, 
                #                                results.right_hand_landmarks, 
                #                                self.mp_holistic.HAND_CONNECTIONS)
                
                # # Left hand
                # self.mp_drawing.draw_landmarks(image, 
                #                                results.left_hand_landmarks, 
                #                                self.mp_holistic.HAND_CONNECTIONS)

                # Pose Detection 
                # self.mp_drawing.draw_landmarks(image, 
                #                                results.pose_landmarks, 
                #                                self.mp_holistic.POSE_CONNECTIONS)

        self.img = image

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
