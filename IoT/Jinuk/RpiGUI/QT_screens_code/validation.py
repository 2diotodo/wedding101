# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'validation.ui'
##
## Created by: Qt User Interface Compiler version 6.4.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide6.QtWidgets import (QApplication, QFrame, QLabel, QLineEdit,
    QPushButton, QSizePolicy, QStackedWidget, QWidget)

class Ui_Form(object):
    def setupUi(self, Form):
        if not Form.objectName():
            Form.setObjectName(u"Form")
        Form.resize(1280, 960)
        Form.setStyleSheet(u"background: #FFF3C8;")
        self.stackedWidget = QStackedWidget(Form)
        self.stackedWidget.setObjectName(u"stackedWidget")
        self.stackedWidget.setGeometry(QRect(0, 0, 1280, 960))
        self.page = QWidget()
        self.page.setObjectName(u"page")
        self.frame = QFrame(self.page)
        self.frame.setObjectName(u"frame")
        self.frame.setGeometry(QRect(64, 48, 1152, 864))
        self.frame.setStyleSheet(u"background: #FFFFFF;\n"
"border-radius: 80px;")
        self.frame.setFrameShape(QFrame.StyledPanel)
        self.frame.setFrameShadow(QFrame.Raised)
        self.frame.setLineWidth(20)
        self.frame.setMidLineWidth(10)
        self.pushButton = QPushButton(self.frame)
        self.pushButton.setObjectName(u"pushButton")
        self.pushButton.setGeometry(QRect(522, 620, 108, 108))
        self.pushButton.setStyleSheet(u"border-radius: 50px;")
        self.label = QLabel(self.frame)
        self.label.setObjectName(u"label")
        self.label.setGeometry(QRect(391, 190, 370, 80))
        font = QFont()
        font.setPointSize(36)
        self.label.setFont(font)
        self.lineEdit = QLineEdit(self.frame)
        self.lineEdit.setObjectName(u"lineEdit")
        self.lineEdit.setGeometry(QRect(201, 362, 750, 140))
        self.lineEdit.setFont(font)
        self.lineEdit.setStyleSheet(u"background:#D9D9D9;\n"
"border-radius: 40px;")
        self.lineEdit.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(self.page)
        self.page_2 = QWidget()
        self.page_2.setObjectName(u"page_2")
        self.stackedWidget.addWidget(self.page_2)

        self.retranslateUi(Form)

        QMetaObject.connectSlotsByName(Form)
    # setupUi

    def retranslateUi(self, Form):
        Form.setWindowTitle(QCoreApplication.translate("Form", u"Wed101", None))
        self.pushButton.setText("")
        self.label.setText(QCoreApplication.translate("Form", u"\uc11c\ube44\uc2a4 \ucf54\ub4dc \uc785\ub825", None))
        self.lineEdit.setText("")
    # retranslateUi

