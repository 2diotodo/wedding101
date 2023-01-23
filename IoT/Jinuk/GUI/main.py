from PySide6.QtWidgets import *
from PySide6.QtGui import *
from QT_screens_code.mainwindow import Ui_Form
from QT_screens_code.chk_Dialog import Ui_chk_Dialog
from time import *

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

    def resize_image(self):
        self.img = cv2.flip(self.img, -1)

    def set_image(self, img):
        self.video_stream.setPixmap(img)

    def print_image(self):
        imgBGR = self.img
        imgRGB = cv2.cvtColor(imgBGR, cv2.COLOR_BGR2RGB)
        h, w, byte = imgRGB.shape
        img = QImage(imgRGB, w, h, byte * w, QImage.Format_RGB888)
        pix_img = QPixmap(img)
        self.mySignal.emit(pix_img)


class CheckDialog(QDialog, Ui_chk_Dialog):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.show()

    def show_modal(self):
        return super().exec()


class MyApp(QWidget, Ui_Form):
    userSignal = Signal()

    def __init__(self):
        super().__init__()
        # set class variable
        self.th = None


        # set class functions
        self.setupUi(self)
        self.stackedWidget.setCurrentIndex(0)
        self.frame_shadow_effect = QGraphicsDropShadowEffect(
            offset=QPoint(2, 8), blurRadius=25, color=QColor("#333")
        )
        self.button_shadow_effect = QGraphicsDropShadowEffect(
            offset=QPoint(2, 2), blurRadius=30, color=QColor("#555")
        )
        # for class_member_variable in self.__dict__.keys():
        #     if '_frame' in class_member_variable:
        #         self.__dict__[class_member_variable].setGraphicsEffect(self.frame_shadow_effect)
        for class_member_variable in dir(self):
            if '_frame' in class_member_variable:
                exec(f'self.{class_member_variable}.setGraphicsEffect(self.frame_shadow_effect)')
            elif '_button' in class_member_variable:
                exec(f'self.{class_member_variable}.setGraphicsEffect(self.button_shadow_effect)')

        self.arrow_button_pix = QPixmap("QT_Resources/Pics/proceed.png")
        self.arrow_icon = QIcon(self.arrow_button_pix)

        self.srvc_chk_button.setIcon(self.arrow_icon)
        self.srvc_chk_button.setIconSize(self.arrow_button_pix.rect().size())

        self.home_back_pix = QPixmap("QT_Resources/Pics/home_back.png")
        self.home_background.setStyleSheet("background-image: url('QT_Resources/Pics/home_back.png')")
        self.home_font_id = QFontDatabase.addApplicationFont("QT_Resources/Fonts/BeauRivage-Regular.ttf")

        self.home_background.setFont(QFont('Beau Rivage', 80))
        self.home_text1.setFont(QFont('Beau Rivage', 40))
        self.home_text1.setStyleSheet("background-color: rgba(255,255,255,0);")

    def main(self):
        # this is video thread
        if spec is not None:
            self.th = MyThread()
            self.th.mySignal.connect(self.setImage)
            self.th.start()

    def go_next_page(self):
        current_page = self.stackedWidget.currentIndex()
        sender = self.sender()
        print(sender)
        if sender.objectName() == "mode_select_video_button":
            current_page += 1
        self.stackedWidget.setCurrentIndex(current_page + 1)

    def go_prev_page(self):
        current_page = self.stackedWidget.currentIndex()
        sender = self.sender()
        print(sender.objectName())
        if sender.objectName() == "video_prev_button":
            current_page -= 1
        self.stackedWidget.setCurrentIndex(current_page - 1)

    def go_home_page(self):
        self.stackedWidget.setCurrentIndex(0)

    def go_video_page(self):
        current_page = self.stackedWidget.currentIndex()
        self.stackedWidget.setCurrentIndex(current_page + 2)

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

    def check_service_validation(self):
        check_validation_window = CheckDialog()
        cd = check_validation_window.show_modal()
        print(cd)
        if cd:
            current_page = self.stackedWidget.currentIndex()
            sender = self.sender()
            print(sender)
            if sender.objectName() == "mode_select_video_button":
                current_page += 1
            self.stackedWidget.setCurrentIndex(current_page + 1)


app = QApplication()
app.setApplicationName("Wed101")

win = MyApp()
win.show()

app.exec()
