import importlib.util
import picamera
import time
from threading import Condition
import io

spec = importlib.util.find_spec("PySide2")
if spec is None:
    from PySide6.QtWidgets import *
    from PySide6.QtCore import *
    from PySide6.QtGui import *
else:
    from PySide2.QtWidgets import *
    from PySide2.QtCore import *
    from PySide2.QtGui import *

from sampleui import Ui_Form


class StreamingOutput(object):
    def __init__(self):
        self.frame = None
        self.buffer = io.BytesIO()
        self.condition = Condition()

    def write(self, buf):
        if buf.startswith(b'\xff\xd8'):
            # New frame, copy the existing buffer's content and notify all
            # clients it's available
            self.buffer.truncate()
            # with self.condition:
            #     self.frame = self.buffer.getvalue()
            #     self.condition.notify_all()
            self.buffer.seek(0)
        return self.buffer.write(buf)


class MyThread(QThread):
    mySignal = Signal(QPixmap)

    def __init__(self):
        super().__init__()
        self.cam = picamera.PiCamera()
        self.cam.resolution = (640, 480)
        self.cam.rotation = 180
        self.output = StreamingOutput()
    
    def run(self):
        self.cam.start_recording(self.output, format='mjpeg')
        while True:
            self.printImage()
            time.sleep(1/60) # 60 fps

    def printImage(self):
        # self.output.buffer.truncate()
        self.output.buffer.seek(0)
        image_data = self.output.buffer.read()
        qimg = QImage.fromData(image_data)
        pix_img = QPixmap(qimg)
        self.mySignal.emit(pix_img)


class MainWindow(QWidget):
    # class constructor
    def __init__(self):
        # call QWidget constructor
        super().__init__()
        self.ui = Ui_Form()
        self.ui.setupUi(self)
        self.th = MyThread()
        self.th.mySignal.connect(self.setImage)
        self.th.start()

    def setImage(self, img):
        self.ui.label.setPixmap(img)

    def close_window(self):
        self.th.quit()
        self.th.wait(3000)
        self.close()


app = QApplication()
win = MainWindow()

win.show()
app.exec_()