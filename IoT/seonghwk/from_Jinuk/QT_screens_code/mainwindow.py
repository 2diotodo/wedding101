# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'mainwindow.ui'
##
## Created by: Qt User Interface Compiler version 6.4.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide2.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide2.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide2.QtMultimediaWidgets import QVideoWidget
from PySide2.QtWidgets import (QApplication, QCheckBox, QComboBox, QFrame,
    QHBoxLayout, QLabel, QLineEdit, QPushButton,
    QSizePolicy, QSlider, QSpacerItem, QStackedWidget,
    QTextBrowser, QVBoxLayout, QWidget)

class Ui_Form(object):
    def setupUi(self, Form):
        if not Form.objectName():
            Form.setObjectName(u"Form")
        Form.resize(1276, 951)
        Form.setStyleSheet(u"")
        self.verticalLayout = QVBoxLayout(Form)
        self.verticalLayout.setSpacing(0)
        self.verticalLayout.setObjectName(u"verticalLayout")
        self.verticalLayout.setContentsMargins(0, 0, 0, 0)
        self.stackedWidget = QStackedWidget(Form)
        self.stackedWidget.setObjectName(u"stackedWidget")
        self.stackedWidget.setStyleSheet(u"background: #FFF3C8;")
        self.srvc_chk_page = QWidget()
        self.srvc_chk_page.setObjectName(u"srvc_chk_page")
        self.srvc_chk_page.setStyleSheet(u"background: #FFF3C8;")
        self.srvc_chk_frame = QFrame(self.srvc_chk_page)
        self.srvc_chk_frame.setObjectName(u"srvc_chk_frame")
        self.srvc_chk_frame.setGeometry(QRect(64, 48, 1152, 864))
        self.srvc_chk_frame.setAcceptDrops(False)
        self.srvc_chk_frame.setStyleSheet(u"background: #FFFFFF;\n"
"border-radius: 80px;")
        self.srvc_chk_frame.setFrameShape(QFrame.StyledPanel)
        self.srvc_chk_frame.setFrameShadow(QFrame.Raised)
        self.srvc_chk_frame.setLineWidth(20)
        self.srvc_chk_frame.setMidLineWidth(10)
        self.srvc_chk_button = QPushButton(self.srvc_chk_frame)
        self.srvc_chk_button.setObjectName(u"srvc_chk_button")
        self.srvc_chk_button.setGeometry(QRect(522, 620, 108, 108))
        self.srvc_chk_button.setStyleSheet(u"border-radius: 50px;")
        self.srvc_chk_label = QLabel(self.srvc_chk_frame)
        self.srvc_chk_label.setObjectName(u"srvc_chk_label")
        self.srvc_chk_label.setGeometry(QRect(391, 190, 370, 80))
        font = QFont()
        font.setPointSize(36)
        self.srvc_chk_label.setFont(font)
        self.srvc_chk_lineEdit = QLineEdit(self.srvc_chk_frame)
        self.srvc_chk_lineEdit.setObjectName(u"srvc_chk_lineEdit")
        self.srvc_chk_lineEdit.setGeometry(QRect(201, 362, 750, 140))
        self.srvc_chk_lineEdit.setFont(font)
        self.srvc_chk_lineEdit.setStyleSheet(u"background:#D9D9D9;\n"
"border-radius: 40px;")
        self.srvc_chk_lineEdit.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(self.srvc_chk_page)
        self.home_page = QWidget()
        self.home_page.setObjectName(u"home_page")
        self.home_page.setStyleSheet(u"background:#FFEEEE;")
        self.home_frame = QFrame(self.home_page)
        self.home_frame.setObjectName(u"home_frame")
        self.home_frame.setGeometry(QRect(64, 48, 1152, 864))
        self.home_frame.setStyleSheet(u"background:white;border-radius:100px;")
        self.home_frame.setFrameShape(QFrame.StyledPanel)
        self.home_frame.setFrameShadow(QFrame.Raised)
        self.home_next_button = QPushButton(self.home_frame)
        self.home_next_button.setObjectName(u"home_next_button")
        self.home_next_button.setGeometry(QRect(396, 630, 360, 120))
        font1 = QFont()
        font1.setPointSize(48)
        font1.setBold(True)
        self.home_next_button.setFont(font1)
        self.home_next_button.setStyleSheet(u"background: #FFAB7C;color: white;border-radius:50px;")
        self.home_background = QLabel(self.home_frame)
        self.home_background.setObjectName(u"home_background")
        self.home_background.setGeometry(QRect(58, 90, 1036, 411))
        font2 = QFont()
        font2.setPointSize(100)
        self.home_background.setFont(font2)
        self.home_background.setStyleSheet(u"")
        self.home_background.setScaledContents(True)
        self.home_background.setAlignment(Qt.AlignCenter)
        self.home_text1 = QLabel(self.home_frame)
        self.home_text1.setObjectName(u"home_text1")
        self.home_text1.setGeometry(QRect(336, 350, 480, 91))
        font3 = QFont()
        font3.setPointSize(40)
        self.home_text1.setFont(font3)
        self.home_text1.setAlignment(Qt.AlignCenter)
        self.home_text2 = QLabel(self.home_frame)
        self.home_text2.setObjectName(u"home_text2")
        self.home_text2.setGeometry(QRect(91, 500, 970, 61))
        font4 = QFont()
        font4.setPointSize(24)
        self.home_text2.setFont(font4)
        self.stackedWidget.addWidget(self.home_page)
        self.info_page = QWidget()
        self.info_page.setObjectName(u"info_page")
        self.info_page.setStyleSheet(u"background: #FFF3C8;")
        self.info_frame = QFrame(self.info_page)
        self.info_frame.setObjectName(u"info_frame")
        self.info_frame.setGeometry(QRect(64, 48, 1152, 864))
        self.info_frame.setAcceptDrops(False)
        self.info_frame.setStyleSheet(u"background: #FFFFFF;\n"
"border-radius: 80px;")
        self.info_frame.setFrameShape(QFrame.StyledPanel)
        self.info_frame.setFrameShadow(QFrame.Raised)
        self.info_frame.setLineWidth(20)
        self.info_frame.setMidLineWidth(10)
        self.info_title = QLabel(self.info_frame)
        self.info_title.setObjectName(u"info_title")
        self.info_title.setGeometry(QRect(354, 50, 444, 120))
        font5 = QFont()
        font5.setPointSize(60)
        self.info_title.setFont(font5)
        self.info_image1 = QLabel(self.info_frame)
        self.info_image1.setObjectName(u"info_image1")
        self.info_image1.setGeometry(QRect(40, 300, 375, 445))
        self.info_image1.setAlignment(Qt.AlignCenter)
        self.info_image2 = QLabel(self.info_frame)
        self.info_image2.setObjectName(u"info_image2")
        self.info_image2.setGeometry(QRect(440, 300, 375, 445))
        self.info_image2.setAlignment(Qt.AlignCenter)
        self.info_next_button = QPushButton(self.info_frame)
        self.info_next_button.setObjectName(u"info_next_button")
        self.info_next_button.setGeometry(QRect(920, 590, 108, 108))
        self.verticalLayoutWidget = QWidget(self.info_frame)
        self.verticalLayoutWidget.setObjectName(u"verticalLayoutWidget")
        self.verticalLayoutWidget.setGeometry(QRect(850, 350, 251, 191))
        self.info_vLayout = QVBoxLayout(self.verticalLayoutWidget)
        self.info_vLayout.setObjectName(u"info_vLayout")
        self.info_vLayout.setContentsMargins(0, 0, 0, 0)
        self.info_desc1 = QLabel(self.verticalLayoutWidget)
        self.info_desc1.setObjectName(u"info_desc1")
        font6 = QFont()
        font6.setPointSize(21)
        self.info_desc1.setFont(font6)
        self.info_desc1.setAlignment(Qt.AlignCenter)

        self.info_vLayout.addWidget(self.info_desc1)

        self.info_desc2 = QLabel(self.verticalLayoutWidget)
        self.info_desc2.setObjectName(u"info_desc2")
        self.info_desc2.setFont(font6)
        self.info_desc2.setAlignment(Qt.AlignCenter)

        self.info_vLayout.addWidget(self.info_desc2)

        self.info_desc3 = QLabel(self.verticalLayoutWidget)
        self.info_desc3.setObjectName(u"info_desc3")
        self.info_desc3.setFont(font6)
        self.info_desc3.setAlignment(Qt.AlignCenter)

        self.info_vLayout.addWidget(self.info_desc3)

        self.info_desc4 = QLabel(self.verticalLayoutWidget)
        self.info_desc4.setObjectName(u"info_desc4")
        self.info_desc4.setFont(font6)
        self.info_desc4.setAlignment(Qt.AlignCenter)

        self.info_vLayout.addWidget(self.info_desc4)

        self.stackedWidget.addWidget(self.info_page)
        self.agreement_page = QWidget()
        self.agreement_page.setObjectName(u"agreement_page")
        self.agreement_page.setStyleSheet(u"")
        self.agreement_frame = QFrame(self.agreement_page)
        self.agreement_frame.setObjectName(u"agreement_frame")
        self.agreement_frame.setGeometry(QRect(64, 48, 1152, 864))
        self.agreement_frame.setAcceptDrops(False)
        self.agreement_frame.setStyleSheet(u"background: #FFFFFF;\n"
"border-radius: 80px;")
        self.agreement_frame.setFrameShape(QFrame.StyledPanel)
        self.agreement_frame.setFrameShadow(QFrame.Raised)
        self.agreement_frame.setLineWidth(20)
        self.agreement_frame.setMidLineWidth(10)
        self.agreement_title = QLabel(self.agreement_frame)
        self.agreement_title.setObjectName(u"agreement_title")
        self.agreement_title.setGeometry(QRect(270, 20, 621, 81))
        font7 = QFont()
        font7.setPointSize(32)
        font7.setBold(True)
        self.agreement_title.setFont(font7)
        self.agreement_textBrowser1 = QTextBrowser(self.agreement_frame)
        self.agreement_textBrowser1.setObjectName(u"agreement_textBrowser1")
        self.agreement_textBrowser1.setGeometry(QRect(70, 130, 881, 261))
        self.agreement_textBrowser1.setStyleSheet(u"border:1px solid black; border-radius:0;")
        self.agreement_textBrowser1.setFrameShape(QFrame.StyledPanel)
        self.agreement_textBrowser1.setTextInteractionFlags(Qt.LinksAccessibleByKeyboard|Qt.LinksAccessibleByMouse)
        self.agreement_checkBox1 = QCheckBox(self.agreement_frame)
        self.agreement_checkBox1.setObjectName(u"agreement_checkBox1")
        self.agreement_checkBox1.setGeometry(QRect(1000, 220, 101, 71))
        font8 = QFont()
        font8.setPointSize(20)
        self.agreement_checkBox1.setFont(font8)
        self.agreement_checkBox1.setIconSize(QSize(16, 16))
        self.agreement_checkBox1.setChecked(False)
        self.agreement_checkBox1.setTristate(False)
        self.agreement_textBrowser2 = QTextBrowser(self.agreement_frame)
        self.agreement_textBrowser2.setObjectName(u"agreement_textBrowser2")
        self.agreement_textBrowser2.setGeometry(QRect(70, 430, 881, 261))
        self.agreement_textBrowser2.setStyleSheet(u"border:1px solid black; border-radius:0;")
        self.agreement_textBrowser2.setFrameShape(QFrame.Box)
        self.agreement_textBrowser2.setLineWidth(2)
        self.agreement_textBrowser2.setMidLineWidth(0)
        self.agreement_textBrowser2.setTextInteractionFlags(Qt.LinksAccessibleByKeyboard|Qt.LinksAccessibleByMouse)
        self.agreement_checkBox2 = QCheckBox(self.agreement_frame)
        self.agreement_checkBox2.setObjectName(u"agreement_checkBox2")
        self.agreement_checkBox2.setGeometry(QRect(1000, 520, 101, 71))
        self.agreement_checkBox2.setFont(font8)
        self.agreement_checkBox2.setIconSize(QSize(16, 16))
        self.agreement_checkBox2.setChecked(False)
        self.agreement_checkBox2.setTristate(False)
        self.agreement_next_button = QPushButton(self.agreement_frame)
        self.agreement_next_button.setObjectName(u"agreement_next_button")
        self.agreement_next_button.setGeometry(QRect(522, 720, 108, 108))
        self.stackedWidget.addWidget(self.agreement_page)
        self.input_page = QWidget()
        self.input_page.setObjectName(u"input_page")
        self.input_frame = QFrame(self.input_page)
        self.input_frame.setObjectName(u"input_frame")
        self.input_frame.setGeometry(QRect(64, 48, 1152, 864))
        self.input_frame.setAcceptDrops(False)
        self.input_frame.setStyleSheet(u"background: #FFFFFF;\n"
"border-radius: 80px;")
        self.input_frame.setFrameShape(QFrame.StyledPanel)
        self.input_frame.setFrameShadow(QFrame.Raised)
        self.input_frame.setLineWidth(20)
        self.input_frame.setMidLineWidth(10)
        self.input_title = QLabel(self.input_frame)
        self.input_title.setObjectName(u"input_title")
        self.input_title.setGeometry(QRect(261, 50, 630, 90))
        font9 = QFont()
        font9.setPointSize(50)
        font9.setBold(True)
        self.input_title.setFont(font9)
        self.verticalLayoutWidget_3 = QWidget(self.input_frame)
        self.verticalLayoutWidget_3.setObjectName(u"verticalLayoutWidget_3")
        self.verticalLayoutWidget_3.setGeometry(QRect(80, 200, 781, 521))
        self.input_vLayout = QVBoxLayout(self.verticalLayoutWidget_3)
        self.input_vLayout.setObjectName(u"input_vLayout")
        self.input_vLayout.setContentsMargins(0, 0, 0, 0)
        self.input_hLayout1 = QHBoxLayout()
        self.input_hLayout1.setObjectName(u"input_hLayout1")
        self.input_label1 = QLabel(self.verticalLayoutWidget_3)
        self.input_label1.setObjectName(u"input_label1")
        sizePolicy = QSizePolicy(QSizePolicy.Preferred, QSizePolicy.Preferred)
        sizePolicy.setHorizontalStretch(3)
        sizePolicy.setVerticalStretch(1)
        sizePolicy.setHeightForWidth(self.input_label1.sizePolicy().hasHeightForWidth())
        self.input_label1.setSizePolicy(sizePolicy)
        font10 = QFont()
        font10.setPointSize(40)
        font10.setBold(True)
        self.input_label1.setFont(font10)
        self.input_label1.setAlignment(Qt.AlignCenter)

        self.input_hLayout1.addWidget(self.input_label1)

        self.input_name_edit = QLineEdit(self.verticalLayoutWidget_3)
        self.input_name_edit.setObjectName(u"input_name_edit")
        sizePolicy1 = QSizePolicy(QSizePolicy.Preferred, QSizePolicy.Preferred)
        sizePolicy1.setHorizontalStretch(5)
        sizePolicy1.setVerticalStretch(2)
        sizePolicy1.setHeightForWidth(self.input_name_edit.sizePolicy().hasHeightForWidth())
        self.input_name_edit.setSizePolicy(sizePolicy1)
        self.input_name_edit.setFont(font10)
        self.input_name_edit.setFocusPolicy(Qt.ClickFocus)
        self.input_name_edit.setStyleSheet(u"background:#FFAB7C;color:white;\n"
"border-radius: 20px;\n"
"border: 3px solid brown;")
        self.input_name_edit.setAlignment(Qt.AlignCenter)
        self.input_name_edit.setClearButtonEnabled(False)

        self.input_hLayout1.addWidget(self.input_name_edit)


        self.input_vLayout.addLayout(self.input_hLayout1)

        self.verticalSpacer = QSpacerItem(20, 33, QSizePolicy.Minimum, QSizePolicy.Preferred)

        self.input_vLayout.addItem(self.verticalSpacer)

        self.input_hLayout2 = QHBoxLayout()
        self.input_hLayout2.setObjectName(u"input_hLayout2")
        self.input_label2 = QLabel(self.verticalLayoutWidget_3)
        self.input_label2.setObjectName(u"input_label2")
        sizePolicy.setHeightForWidth(self.input_label2.sizePolicy().hasHeightForWidth())
        self.input_label2.setSizePolicy(sizePolicy)
        self.input_label2.setFont(font10)
        self.input_label2.setAlignment(Qt.AlignCenter)

        self.input_hLayout2.addWidget(self.input_label2)

        self.input_relation_combo = QComboBox(self.verticalLayoutWidget_3)
        self.input_relation_combo.addItem("")
        self.input_relation_combo.addItem("")
        self.input_relation_combo.addItem("")
        self.input_relation_combo.addItem("")
        self.input_relation_combo.addItem("")
        self.input_relation_combo.addItem("")
        self.input_relation_combo.setObjectName(u"input_relation_combo")
        sizePolicy1.setHeightForWidth(self.input_relation_combo.sizePolicy().hasHeightForWidth())
        self.input_relation_combo.setSizePolicy(sizePolicy1)
        font11 = QFont()
        font11.setPointSize(36)
        font11.setBold(True)
        self.input_relation_combo.setFont(font11)
        self.input_relation_combo.setStyleSheet(u"#input_relation_combo{\n"
"background:#FFAB7C; color:white;\n"
"border-radius: 20px;\n"
"border: 3px solid brown;\n"
"padding-left:80px;\n"
"}\n"
"\n"
"#input_relation_combo::on{\n"
"border: 3px solid red;\n"
"}\n"
"\n"
"#input_relation_combo::drop-down{\n"
"border:0;\n"
"}\n"
"\n"
"\n"
"#input_relation_combo QListView{\n"
"background:#FFAB7C;\n"
"color:white;\n"
"border:3px solid brown;\n"
"border-radius:0;\n"
"}\n"
"\n"
"#input_relation_combo QListView::item{\n"
"\n"
"}\n"
"\n"
"#input_relation_combo QListView::item::hover{\n"
"background:#white;\n"
"color:#A55252\n"
"}")
        self.input_relation_combo.setIconSize(QSize(16, 16))
        self.input_relation_combo.setFrame(True)

        self.input_hLayout2.addWidget(self.input_relation_combo)


        self.input_vLayout.addLayout(self.input_hLayout2)

        self.verticalSpacer_2 = QSpacerItem(20, 40, QSizePolicy.Minimum, QSizePolicy.Preferred)

        self.input_vLayout.addItem(self.verticalSpacer_2)

        self.input_hLayout3 = QHBoxLayout()
        self.input_hLayout3.setObjectName(u"input_hLayout3")
        self.input_label3 = QLabel(self.verticalLayoutWidget_3)
        self.input_label3.setObjectName(u"input_label3")
        sizePolicy.setHeightForWidth(self.input_label3.sizePolicy().hasHeightForWidth())
        self.input_label3.setSizePolicy(sizePolicy)
        self.input_label3.setFont(font10)
        self.input_label3.setAlignment(Qt.AlignCenter)

        self.input_hLayout3.addWidget(self.input_label3)

        self.input_receiver_combo = QComboBox(self.verticalLayoutWidget_3)
        self.input_receiver_combo.addItem("")
        self.input_receiver_combo.addItem("")
        self.input_receiver_combo.addItem("")
        self.input_receiver_combo.setObjectName(u"input_receiver_combo")
        sizePolicy1.setHeightForWidth(self.input_receiver_combo.sizePolicy().hasHeightForWidth())
        self.input_receiver_combo.setSizePolicy(sizePolicy1)
        self.input_receiver_combo.setFont(font11)
        self.input_receiver_combo.setStyleSheet(u"#input_receiver_combo{\n"
"background:#FFAB7C; color:white;\n"
"border-radius: 20px;\n"
"border: 3px solid brown;\n"
"padding-left:80px;\n"
"}\n"
"\n"
"#input_receiver_combo::on{\n"
"border: 3px solid red;\n"
"}\n"
"\n"
"#input_receiver_combo::drop-down{\n"
"border:0;\n"
"}\n"
"\n"
"\n"
"#input_receiver_combo QListView{\n"
"background:#FFAB7C;\n"
"color:white;\n"
"border:3px solid brown;\n"
"border-radius:0;\n"
"}\n"
"\n"
"#input_receiver_combo QListView::item{\n"
"\n"
"}\n"
"\n"
"#input_receiver_combo QListView::item::hover{\n"
"background:#white;\n"
"color:#A55252\n"
"}")
        self.input_receiver_combo.setEditable(False)
        self.input_receiver_combo.setIconSize(QSize(16, 16))
        self.input_receiver_combo.setFrame(True)

        self.input_hLayout3.addWidget(self.input_receiver_combo)


        self.input_vLayout.addLayout(self.input_hLayout3)

        self.input_home_button = QPushButton(self.input_frame)
        self.input_home_button.setObjectName(u"input_home_button")
        self.input_home_button.setGeometry(QRect(950, 410, 116, 100))
        self.input_next_button = QPushButton(self.input_frame)
        self.input_next_button.setObjectName(u"input_next_button")
        self.input_next_button.setGeometry(QRect(954, 600, 108, 108))
        self.stackedWidget.addWidget(self.input_page)
        self.thanks_page = QWidget()
        self.thanks_page.setObjectName(u"thanks_page")
        self.thanks_frame = QFrame(self.thanks_page)
        self.thanks_frame.setObjectName(u"thanks_frame")
        self.thanks_frame.setGeometry(QRect(64, 48, 1152, 864))
        self.thanks_frame.setAcceptDrops(False)
        self.thanks_frame.setStyleSheet(u"background: #FFFFFF;\n"
"border-radius: 80px;")
        self.thanks_frame.setFrameShape(QFrame.StyledPanel)
        self.thanks_frame.setFrameShadow(QFrame.Raised)
        self.thanks_frame.setLineWidth(20)
        self.thanks_frame.setMidLineWidth(10)
        self.thanks_video_screen = QVideoWidget(self.thanks_frame)
        self.thanks_video_screen.setObjectName(u"thanks_video_screen")
        self.thanks_video_screen.setGeometry(QRect(149, 170, 854, 480))
        self.thanks_video_screen.setStyleSheet(u"background:black;\n"
"border-radius:0;")
        self.thanks_title = QLabel(self.thanks_frame)
        self.thanks_title.setObjectName(u"thanks_title")
        self.thanks_title.setGeometry(QRect(280, 50, 600, 71))
        self.thanks_title.setFont(font3)
        self.thanks_title.setAlignment(Qt.AlignCenter)
        self.thanks_next_button = QPushButton(self.thanks_frame)
        self.thanks_next_button.setObjectName(u"thanks_next_button")
        self.thanks_next_button.setGeometry(QRect(376, 700, 400, 133))
        self.thanks_next_button.setFont(font1)
        self.thanks_next_button.setStyleSheet(u"background:#FFAB7C;\n"
"border-radius: 25;\n"
"color: white;\n"
"")
        self.thanks_slider = QSlider(self.thanks_frame)
        self.thanks_slider.setObjectName(u"thanks_slider")
        self.thanks_slider.setGeometry(QRect(149, 652, 854, 18))
        self.thanks_slider.setOrientation(Qt.Horizontal)
        self.stackedWidget.addWidget(self.thanks_page)
        self.select_page = QWidget()
        self.select_page.setObjectName(u"select_page")
        self.select_home_button = QPushButton(self.select_page)
        self.select_home_button.setObjectName(u"select_home_button")
        self.select_home_button.setGeometry(QRect(1115, 580, 123, 107))
        self.select_home_button.setFlat(True)
        self.select_title = QLabel(self.select_page)
        self.select_title.setObjectName(u"select_title")
        self.select_title.setGeometry(QRect(200, 40, 700, 90))
        self.select_title.setFont(font11)
        self.select_title.setAlignment(Qt.AlignCenter)
        self.select_prev_button = QPushButton(self.select_page)
        self.select_prev_button.setObjectName(u"select_prev_button")
        self.select_prev_button.setGeometry(QRect(1115, 740, 123, 107))
        self.select_prev_button.setFlat(True)
        self.select_pic_widget = QWidget(self.select_page)
        self.select_pic_widget.setObjectName(u"select_pic_widget")
        self.select_pic_widget.setGeometry(QRect(40, 160, 500, 750))
        self.select_pic_widget.setStyleSheet(u"background: white; border-radius: 50px;")
        self.select_pic_button = QPushButton(self.select_pic_widget)
        self.select_pic_button.setObjectName(u"select_pic_button")
        self.select_pic_button.setGeometry(QRect(100, 620, 300, 100))
        self.select_pic_button.setFont(font10)
        self.select_pic_button.setStyleSheet(u"background: #FFAB7C;\n"
"border-radius: 25px;\n"
"color: white;")
        self.select_sample_img1 = QLabel(self.select_pic_widget)
        self.select_sample_img1.setObjectName(u"select_sample_img1")
        self.select_sample_img1.setGeometry(QRect(40, 40, 420, 550))
        font12 = QFont()
        font12.setPointSize(20)
        font12.setBold(True)
        self.select_sample_img1.setFont(font12)
        self.select_sample_img1.setStyleSheet(u"")
        self.select_sample_img1.setAlignment(Qt.AlignCenter)
        self.select_sample_opac1 = QLabel(self.select_pic_widget)
        self.select_sample_opac1.setObjectName(u"select_sample_opac1")
        self.select_sample_opac1.setGeometry(QRect(40, 40, 420, 550))
        self.select_sample_opac1.setFont(font12)
        self.select_sample_opac1.setStyleSheet(u"background-color: rgba(128, 128, 128, 128);\n"
"color:white;\n"
"border-radius:0;")
        self.select_sample_opac1.setAlignment(Qt.AlignCenter)
        self.select_vid_widget = QWidget(self.select_page)
        self.select_vid_widget.setObjectName(u"select_vid_widget")
        self.select_vid_widget.setGeometry(QRect(560, 160, 500, 750))
        self.select_vid_widget.setStyleSheet(u"background: white; border-radius: 50px;")
        self.select_vid_button = QPushButton(self.select_vid_widget)
        self.select_vid_button.setObjectName(u"select_vid_button")
        self.select_vid_button.setGeometry(QRect(100, 620, 300, 100))
        self.select_vid_button.setFont(font10)
        self.select_vid_button.setStyleSheet(u"background: #FFAB7C;\n"
"border-radius: 25px;\n"
"color: white;")
        self.select_sample_img2 = QLabel(self.select_vid_widget)
        self.select_sample_img2.setObjectName(u"select_sample_img2")
        self.select_sample_img2.setGeometry(QRect(40, 40, 420, 550))
        self.select_sample_img2.setAlignment(Qt.AlignCenter)
        self.select_sample_opac2 = QLabel(self.select_vid_widget)
        self.select_sample_opac2.setObjectName(u"select_sample_opac2")
        self.select_sample_opac2.setGeometry(QRect(40, 40, 420, 550))
        self.select_sample_opac2.setFont(font12)
        self.select_sample_opac2.setStyleSheet(u"background-color: rgba(128, 128, 128, 128);\n"
"color:white;\n"
"border-radius:0;")
        self.select_sample_opac2.setAlignment(Qt.AlignCenter)
        self.stackedWidget.addWidget(self.select_page)
        self.image_page = QWidget()
        self.image_page.setObjectName(u"image_page")
        self.image_next_button = QPushButton(self.image_page)
        self.image_next_button.setObjectName(u"image_next_button")
        self.image_next_button.setGeometry(QRect(470, 410, 75, 24))
        self.image_home_button = QPushButton(self.image_page)
        self.image_home_button.setObjectName(u"image_home_button")
        self.image_home_button.setGeometry(QRect(530, 320, 75, 24))
        self.image_label = QLabel(self.image_page)
        self.image_label.setObjectName(u"image_label")
        self.image_label.setGeometry(QRect(230, 140, 50, 16))
        self.image_prev_button = QPushButton(self.image_page)
        self.image_prev_button.setObjectName(u"image_prev_button")
        self.image_prev_button.setGeometry(QRect(230, 430, 75, 24))
        self.stackedWidget.addWidget(self.image_page)
        self.video_page = QWidget()
        self.video_page.setObjectName(u"video_page")
        self.video_home_button = QPushButton(self.video_page)
        self.video_home_button.setObjectName(u"video_home_button")
        self.video_home_button.setGeometry(QRect(1000, 370, 75, 24))
        self.video_next_button = QPushButton(self.video_page)
        self.video_next_button.setObjectName(u"video_next_button")
        self.video_next_button.setGeometry(QRect(1020, 420, 75, 24))
        self.video_label = QLabel(self.video_page)
        self.video_label.setObjectName(u"video_label")
        self.video_label.setGeometry(QRect(630, 50, 50, 16))
        self.video_prev_button = QPushButton(self.video_page)
        self.video_prev_button.setObjectName(u"video_prev_button")
        self.video_prev_button.setGeometry(QRect(1040, 490, 75, 24))
        self.video_record_button = QPushButton(self.video_page)
        self.video_record_button.setObjectName(u"video_record_button")
        self.video_record_button.setGeometry(QRect(540, 710, 191, 71))
        self.label = QLabel(self.video_page)
        self.label.setObjectName(u"label")
        self.label.setGeometry(QRect(260, 150, 640, 480))
        self.stackedWidget.addWidget(self.video_page)
        self.end_page = QWidget()
        self.end_page.setObjectName(u"end_page")
        self.end_home_button = QPushButton(self.end_page)
        self.end_home_button.setObjectName(u"end_home_button")
        self.end_home_button.setGeometry(QRect(470, 370, 75, 24))
        self.end_label = QLabel(self.end_page)
        self.end_label.setObjectName(u"end_label")
        self.end_label.setGeometry(QRect(260, 160, 131, 31))
        self.stackedWidget.addWidget(self.end_page)

        self.verticalLayout.addWidget(self.stackedWidget)


        self.retranslateUi(Form)
        self.end_home_button.clicked.connect(Form.go_home_page)
        self.image_next_button.clicked.connect(Form.go_end_page)
        self.image_home_button.clicked.connect(Form.go_home_page)
        self.select_pic_button.clicked.connect(Form.go_next_page)
        self.select_home_button.clicked.connect(Form.go_home_page)
        self.video_home_button.clicked.connect(Form.go_home_page)
        self.video_next_button.clicked.connect(Form.go_end_page)
        self.select_prev_button.clicked.connect(Form.go_prev_page)
        self.video_prev_button.clicked.connect(Form.go_prev_page)
        self.image_prev_button.clicked.connect(Form.go_prev_page)
        self.srvc_chk_button.clicked.connect(Form.check_service_validation)
        self.home_next_button.clicked.connect(Form.go_next_page)
        self.info_next_button.clicked.connect(Form.go_next_page)
        self.agreement_next_button.clicked.connect(Form.go_next_page)
        self.input_home_button.clicked.connect(Form.go_home_page)
        self.input_next_button.clicked.connect(Form.check_input)
        self.thanks_next_button.clicked.connect(Form.go_next_page)
        self.select_vid_button.clicked.connect(Form.go_next_page)
        self.video_record_button.clicked.connect(Form.record_video)

        self.stackedWidget.setCurrentIndex(8)


        QMetaObject.connectSlotsByName(Form)
    # setupUi

    def retranslateUi(self, Form):
        Form.setWindowTitle(QCoreApplication.translate("Form", u"Form", None))
        self.srvc_chk_button.setText("")
        self.srvc_chk_label.setText(QCoreApplication.translate("Form", u"\uc11c\ube44\uc2a4 \ucf54\ub4dc \uc785\ub825", None))
        self.srvc_chk_lineEdit.setText("")
        self.home_next_button.setText(QCoreApplication.translate("Form", u"\uc2dc\uc791\ud558\uae30", None))
        self.home_background.setText(QCoreApplication.translate("Form", u"Welcome", None))
        self.home_text1.setText(QCoreApplication.translate("Form", u"To the Wedding101", None))
        self.home_text2.setText(QCoreApplication.translate("Form", u"\uc2e0\ud63c\ubd80\ubd80 OOO, OOO \ub2d8\uc5d0\uac8c \uae30\ub150\uc0ac\uc9c4\uc774\ub098 \uc601\uc0c1 \ud3b8\uc9c0\ub97c \ub0a8\uaca8\ubcf4\uc138\uc694", None))
        self.info_title.setText(QCoreApplication.translate("Form", u"Wedding101", None))
        self.info_image1.setText(QCoreApplication.translate("Form", u"image1", None))
        self.info_image2.setText(QCoreApplication.translate("Form", u"image2", None))
        self.info_next_button.setText("")
        self.info_desc1.setText(QCoreApplication.translate("Form", u"\ubd80\ubd80\uc5d0\uac8c", None))
        self.info_desc2.setText(QCoreApplication.translate("Form", u"\uae30\ub150 \uc0ac\uc9c4\uacfc", None))
        self.info_desc3.setText(QCoreApplication.translate("Form", u"\uc601\uc0c1 \ud3b8\uc9c0\ub97c", None))
        self.info_desc4.setText(QCoreApplication.translate("Form", u"\ub0a8\uaca8\ubcf4\uc138\uc694", None))
        self.agreement_title.setText(QCoreApplication.translate("Form", u"\uac1c\uc778\uc815\ubcf4 \ubc0f \ucd08\uc0c1\uad8c \uc0ac\uc6a9 \ub3d9\uc758\uc11c", None))
        self.agreement_textBrowser1.setHtml(QCoreApplication.translate("Form", u"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><meta charset=\"utf-8\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"hr { height: 1px; border-width: 0; }\n"
"li.unchecked::marker { content: \"\\2610\"; }\n"
"li.checked::marker { content: \"\\2612\"; }\n"
"</style></head><body style=\" font-family:'\ub9d1\uc740 \uace0\ub515'; font-size:9pt; font-weight:400; font-style:normal;\">\n"
"<p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:20pt;\">\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \ud65c\uc6a9 \ub3d9\uc758</span></p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:20pt;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-rig"
                        "ht:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:18pt;\">\uc81c\uacf5\ud558\ub294 \uac1c\uc778\uc815\ubcf4\uc758 \ud56d\ubaa9</span></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt;\">Wedding101\uc740 \ub2e4\uc74c\uc758 \uac1c\uc778\uc815\ubcf4\ub97c \uc81c\uacf5\ubc1b\uace0\uc790 \ud569\ub2c8\ub2e4.</span></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt;\"> - \uc131\uba85</span></p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:16pt;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:18pt;\">\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \ud65c\uc6a9 "
                        "\ubaa9\uc801</span></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt;\">Wedding101\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc774\uc720\ub85c \uac1c\uc778\uc815\ubcf4\ub97c \uc81c\uacf5\ubc1b\uace0\uc790 \ud569\ub2c8\ub2e4.</span></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt;\">- \uc0ac\uc9c4/\uc601\uc0c1 \ucd2c\uc601\uc790 \ud655\uc778 \ubc0f \uc11c\ube44\uc2a4 \uc2e0\uccad\uc790\uc5d0\uac8c \uc81c\uacf5</span></p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:16pt;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:18pt;\">\uac1c\uc778\uc815\ubcf4 \ud65c\uc6a9 \ubc0f \ubcf4"
                        "\uc720\uae30\uac04</span></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt;\">- \uc81c\uacf5\ubc1b\uc740 \uac1c\uc778\uc815\ubcf4\uc758 \ud65c\uc6a9 \ubc0f \ubcf4\uc720\uae30\uac04\uc740 \ucd2c\uc601 \uc644\ub8cc\uc2dc\ubd80\ud130 6\uac1c\uc6d4\uae4c\uc9c0 \ud65c\uc6a9\ub420 \uc218 \uc788\uc73c\uba70 \uc774\ud6c4 \ud30c\uae30\ub429\ub2c8\ub2e4.</span></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt;\">- \uac1c\uc778\uc815\ubcf4\ub294 \uc815\ubcf4\uc8fc\uccb4\uc758 \ub3d9\uc758 \uc5c6\uc774 \ub3d9\uc758\ud55c \ub0b4\uc6a9 \uc678\uc758 \ub2e4\ub978 \ubaa9\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\uac70\ub098 \uc81c3\uc790\uc5d0\uac8c \uc81c\uacf5 \ubc0f \ud65c\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.</span></p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left"
                        ":0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:20pt;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:18pt; font-weight:700;\">\uadc0\ud558\ub294 \uc774\uc5d0 \ub300\ud55c \ub3d9\uc758\ub97c \uac70\ubd80\ud560 \uc218 \uc788\uc73c\uba70 \ub2e8, \ub3d9\uc758\uac00 \uc5c6\uc744 \uacbd\uc6b0 Wedding101 \uc11c\ube44\uc2a4 \uc774\uc6a9\uc774 \ubd88\uac00\ub2a5\ud560 \uc218 \uc788\uc74c\uc744 \uc54c\ub824\ub4dc\ub9bd\ub2c8\ub2e4.</span></p></body></html>", None))
        self.agreement_checkBox1.setText(QCoreApplication.translate("Form", u"\ub3d9\uc758", None))
        self.agreement_textBrowser2.setHtml(QCoreApplication.translate("Form", u"<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><meta charset=\"utf-8\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"hr { height: 1px; border-width: 0; }\n"
"li.unchecked::marker { content: \"\\2610\"; }\n"
"li.checked::marker { content: \"\\2612\"; }\n"
"</style></head><body style=\" font-family:'\ub9d1\uc740 \uace0\ub515'; font-size:9pt; font-weight:400; font-style:normal;\">\n"
"<p align=\"center\" style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:20pt;\">\ucd08\uc0c1\uad8c \uc0ac\uc6a9 \ub3d9\uc758\uc11c</span></p>\n"
"<p align=\"center\" style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:20pt;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:"
                        "0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt;\">Wedding101 \ubd80\uc2a4\uc5d0\uc11c \ucd2c\uc601\ub41c \uc0ac\uc6a9\uc790\uc758 \uc0ac\uc9c4\uacfc \ub3d9\uc601\uc0c1\uc740 \uc11c\ube44\uc2a4 \uc2e0\uccad\uc790\uc758 Wed101 \uc568\ubc94 \uc790\ub8cc\ub85c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.</span></p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:16pt;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt;\">\uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \ucd08\uc0c1\uad8c\uc740 Wedding101 \uce21 \uc774\uc678\uc758 \ub2e4\ub978 \uae30\uad00\uc774\ub098 \uae30\uc5c5\uc5d0 \uacf5\uac1c\ub418\uc9c0 \uc54a\uc73c\uba70, \uc11c\ube44\uc2a4 \uc2e0\uccad\uc790\uc5d0\uac8c\ub9cc \ud65c\uc6a9\ub418\ub3c4\ub85d \ucca0\uc800\ud788 \uad00\ub9ac \uc6b4\uc601\ub429\ub2c8"
                        "\ub2e4.</span></p>\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:16pt;\"><br /></p>\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><span style=\" font-size:16pt; font-weight:700;\">\uadc0\ud558\ub294 \uc774\uc5d0 \ub300\ud55c \ub3d9\uc758\ub97c \uac70\ubd80\ud560 \uc218 \uc788\uc73c\uba70 \ub2e8, \ub3d9\uc758\uac00 \uc5c6\uc744 \uacbd\uc6b0 \uc774\uc640 \uad00\ub828\ub41c \ud589\uc0ac \ucc38\uc5ec\uac00 \ubd88\uac00\ub2a5\ud560 \uc218 \uc788\uc74c\uc744 \uc54c\ub824\ub4dc\ub9bd\ub2c8\ub2e4.</span></p></body></html>", None))
        self.agreement_checkBox2.setText(QCoreApplication.translate("Form", u"\ub3d9\uc758", None))
        self.agreement_next_button.setText("")
        self.input_title.setText(QCoreApplication.translate("Form", u"\uc815\ubcf4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694", None))
        self.input_label1.setText(QCoreApplication.translate("Form", u"\uc774\ub984 :", None))
        self.input_name_edit.setText("")
        # self.input_name_edit.setPlaceholderText(QCoreApplication.translate("Form", u"\uc785\ub825\ud558\uae30", None))
        self.input_label2.setText(QCoreApplication.translate("Form", u"\uad00\uacc4 :", None))
        self.input_relation_combo.setItemText(0, QCoreApplication.translate("Form", u"\ub20c\ub7ec\uc11c \uc120\ud0dd", None))
        self.input_relation_combo.setItemText(1, QCoreApplication.translate("Form", u"\uac00\uc871", None))
        self.input_relation_combo.setItemText(2, QCoreApplication.translate("Form", u"\uce5c\uc778\ucc99", None))
        self.input_relation_combo.setItemText(3, QCoreApplication.translate("Form", u"\uce5c\uad6c", None))
        self.input_relation_combo.setItemText(4, QCoreApplication.translate("Form", u"\ub3d9\ub8cc", None))
        self.input_relation_combo.setItemText(5, QCoreApplication.translate("Form", u"\uc9c0\uc778", None))

        self.input_relation_combo.setCurrentText("")
        # self.input_relation_combo.setPlaceholderText(QCoreApplication.translate("Form", u"\ub20c\ub7ec\uc11c \uc120\ud0dd", None))
        self.input_label3.setText(QCoreApplication.translate("Form", u"\ub300\uc0c1 :", None))
        self.input_receiver_combo.setItemText(0, QCoreApplication.translate("Form", u"\ub20c\ub7ec\uc11c \uc120\ud0dd", None))
        self.input_receiver_combo.setItemText(1, QCoreApplication.translate("Form", u"\uc2e0\ub791", None))
        self.input_receiver_combo.setItemText(2, QCoreApplication.translate("Form", u"\uc2e0\ubd80", None))

        # self.input_receiver_combo.setPlaceholderText(QCoreApplication.translate("Form", u"\ub20c\ub7ec\uc11c \uc120\ud0dd", None))
        self.input_home_button.setText("")
        self.input_next_button.setText("")
        self.thanks_title.setText(QCoreApplication.translate("Form", u"Thank you for visiting us", None))
        self.thanks_next_button.setText(QCoreApplication.translate("Form", u"\ub118\uc5b4\uac00\uae30", None))
        self.select_home_button.setText("")
        self.select_title.setText(QCoreApplication.translate("Form", u"\uc120\ud638\ud558\ub294 \ubc29\uc2dd\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694", None))
        self.select_prev_button.setText("")
        self.select_pic_button.setText(QCoreApplication.translate("Form", u"\uc0ac\uc9c4 \ucc0d\uae30", None))
        self.select_sample_img1.setText("")
        self.select_sample_opac1.setText(QCoreApplication.translate("Form", u"\uc0ac\uc9c4\uc744 \ucc0d\uace0\n"
"\uc190\uae00\uc528\ub85c\n"
"\ucd95\ud558 \uba54\uc2dc\uc9c0\ub97c\n"
"\uc804\ud574\uc8fc\uc138\uc694", None))
        self.select_vid_button.setText(QCoreApplication.translate("Form", u"\uc601\uc0c1 \ucc0d\uae30", None))
        self.select_sample_img2.setText("")
        self.select_sample_opac2.setText(QCoreApplication.translate("Form", u"<html><head/><body><p>\uc601\uc0c1 \ud3b8\uc9c0\ub85c</p><p>\ucd95\ud558\ud558\ub294 \ub9c8\uc74c\uc744</p><p>\uc804\ud574\uc8fc\uc138\uc694</p></body></html>", None))
        self.image_next_button.setText(QCoreApplication.translate("Form", u"Next", None))
        self.image_home_button.setText(QCoreApplication.translate("Form", u"Home", None))
        self.image_label.setText(QCoreApplication.translate("Form", u"image", None))
        self.image_prev_button.setText(QCoreApplication.translate("Form", u"Prev", None))
        self.video_home_button.setText(QCoreApplication.translate("Form", u"Home", None))
        self.video_next_button.setText(QCoreApplication.translate("Form", u"Next", None))
        self.video_label.setText(QCoreApplication.translate("Form", u"video", None))
        self.video_prev_button.setText(QCoreApplication.translate("Form", u"Prev", None))
        self.video_record_button.setText(QCoreApplication.translate("Form", u"Record", None))
        self.label.setText(QCoreApplication.translate("Form", u"TextLabel", None))
        self.end_home_button.setText(QCoreApplication.translate("Form", u"Home", None))
        self.end_label.setText(QCoreApplication.translate("Form", u"Thank you", None))
    # retranslateUi

