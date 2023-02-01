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
    import os
    os.environ["QT_IM_MODULE"] = "qtvirtualkeyboard"


relation_list = ['', 'family', 'relatives', 'friend', 'colleague', 'acquaintance']
receiver_list = ['', 'groom', 'bride']


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
        self.media_player = None
        self.audio_output = None
        self.available_cameras = None
        if VERSION == "DEVELOP":
            self.audio_output = QAudioOutput()
            self.media_player = QMediaPlayer()
            self.available_cameras = QMediaDevices.videoInputs()
            if self.available_cameras:
                self.camera = QCamera(self.available_cameras[0])
                self.image_capture = QImageCapture(self.camera)
        self.camera = None
        self.image_capture = None

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

    def main(self):
        # this is video thread
        if spec is not None:
            self.th.mySignal.connect(self.setImage)
            self.th.start()

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
        self.input_home_button.setIcon(self.home_icon)
        self.input_home_button.setIconSize(self.home_button_pix.rect().size())
        self.input_next_button.setIcon(self.arrow_icon)
        self.input_next_button.setIconSize(self.arrow_button_pix.rect().size())
        self.input_relation_combo.view().setStyleSheet(
            "QListView{background:#FFAB7C;color:#FFFFFF;border:3px solid brown;border-radius:0;}"
            "QListView::item:hover{background:#FFFFFF;color:#A55252;}"
        )
        self.input_receiver_combo.view().setStyleSheet(
            "QListView{background:#FFAB7C;color:#FFFFFF;border:3px solid brown;border-radius:0;}"
            "QListView::item:hover{background:#FFFFFF;color:#A55252;}"
        )

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
        if sender.objectName() == "mode_select_video_button":
            current_page += 1
        self.stackedWidget.setCurrentIndex(current_page + 1)
        self.media_player.stop()

    def go_prev_page(self):
        current_page = self.stackedWidget.currentIndex()
        sender = self.sender()
        print(sender.objectName())
        if sender.objectName() == "video_prev_button":
            current_page -= 1
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

    def close_window(self):
        if spec is not None:
            self.th.terminate()
            self.th.wait(3000)
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
            if sender.objectName() == "mode_select_video_button":
                current_page += 1
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
