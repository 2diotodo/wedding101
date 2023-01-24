from PySide6.QtWidgets import *
from PySide6.QtGui import *
from QT_screens_code.screen_start import Ui_Form


class MyApp(QWidget, Ui_Form):
    def __init__(self):
        super().__init__()
        self.ui = Ui_Form()
        self.ui.setupUi(self)
        self.arrow_button_pix = QPixmap("QT_Assets/Pics/proceed.png")
        self.arrow_icon = QIcon(self.arrow_button_pix)
        self.ui.pushButton.setIcon(self.arrow_icon)
        self.ui.pushButton.setIconSize(self.arrow_button_pix.rect().size())


app = QApplication()
app.setApplicationName("Wed101")
win = MyApp()
win.showFullScreen()

app.exec()
