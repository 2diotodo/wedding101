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

from MainWindow import Ui_Form
from time import *

class MyThread(QThread):
    mySignal = Signal(QPixmap)
    def __init__(self):
        super().__init__()
        if spec is not None:
            self.cam = cv2.VideoCapture(0)
            self.img = None
            self.video_stream = None
            self.fourcc = cv2.VideoWriter_fourcc(*'XVID')
            self.record = False

    def run(self):
        while True:
            ret, self.img = self.cam.read()
            if ret:
                self.resize_image(width=1024)
                self.printImage()
            else:
                print("camera is not working")
            sleep(0.05)

    def resize_image(self, width):
        self.img = cv2.flip(self.img, -1)

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
        self.close()


app = QApplication()
win = MyApp()

win.show()
app.exec_()
