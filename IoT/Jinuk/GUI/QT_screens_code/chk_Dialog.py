# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'chk_Dialog.ui'
##
## Created by: Qt User Interface Compiler version 6.4.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################
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

class Ui_chk_Dialog(object):
    def setupUi(self, chk_Dialog):
        if not chk_Dialog.objectName():
            chk_Dialog.setObjectName(u"chk_Dialog")
        chk_Dialog.setWindowModality(Qt.ApplicationModal)
        chk_Dialog.resize(1080, 540)
        chk_Dialog.setStyleSheet(u"")
        self.chk_widget = QWidget(chk_Dialog)
        self.chk_widget.setObjectName(u"chk_widget")
        self.chk_widget.setGeometry(QRect(20, 0, 1040, 520))
        self.chk_widget.setStyleSheet(u"background: #FFAFAF; border-radius: 75px;")
        self.chk_D_frame = QFrame(self.chk_widget)
        self.chk_D_frame.setObjectName(u"chk_D_frame")
        self.chk_D_frame.setGeometry(QRect(50, 30, 940, 460))
        self.chk_D_frame.setStyleSheet(u"background: #FFFFFF;border-radius: 50px;")
        self.chk_D_frame.setFrameShape(QFrame.StyledPanel)
        self.chk_D_frame.setFrameShadow(QFrame.Raised)
        self.chk_D_button_1 = QPushButton(self.chk_D_frame)
        self.chk_D_button_1.setObjectName(u"chk_D_button_1")
        self.chk_D_button_1.setGeometry(QRect(180, 290, 241, 121))
        font = QFont()
        font.setPointSize(40)
        font.setBold(True)
        self.chk_D_button_1.setFont(font)
        self.chk_D_button_1.setStyleSheet(u"background: #FFAB7C;color: white;")
        self.chk_D_button_2 = QPushButton(self.chk_D_frame)
        self.chk_D_button_2.setObjectName(u"chk_D_button_2")
        self.chk_D_button_2.setGeometry(QRect(540, 290, 241, 121))
        self.chk_D_button_2.setFont(font)
        self.chk_D_button_2.setStyleSheet(u"background: #FFAB7C;color: white;")
        self.chk_D_label = QLabel(self.chk_D_frame)
        self.chk_D_label.setObjectName(u"chk_D_label")
        self.chk_D_label.setGeometry(QRect(230, 30, 481, 221))
        font1 = QFont()
        font1.setPointSize(30)
        font1.setBold(True)
        self.chk_D_label.setFont(font1)
        self.chk_D_label.setAlignment(Qt.AlignCenter)

        self.retranslateUi(chk_Dialog)
        self.chk_D_button_1.clicked.connect(chk_Dialog.accept)
        self.chk_D_button_2.clicked.connect(chk_Dialog.reject)

        QMetaObject.connectSlotsByName(chk_Dialog)
    # setupUi

    def retranslateUi(self, chk_Dialog):
        chk_Dialog.setWindowTitle(QCoreApplication.translate("chk_Dialog", u"Dialog", None))
        self.chk_D_button_1.setText(QCoreApplication.translate("chk_Dialog", u"\ud655\uc778", None))
        self.chk_D_button_2.setText(QCoreApplication.translate("chk_Dialog", u"\ucde8\uc18c", None))
        self.chk_D_label.setText(QCoreApplication.translate("chk_Dialog", u"\uc2e0\ud63c\ubd80\ubd80\n"
"OOO, OOO\n"
"\ub2d8\uc758 \uacb0\ud63c\uc2dd\uc774 \ub9de\uc2b5\ub2c8\uae4c?", None))
    # retranslateUi
