import eel
import eel.browsers

import getmac
import psutil
import socket
import platform
import subprocess


eel.init('web')


@eel.expose
def get_os_name():
    """ 운영체제 이름을 반환 """
    return platform_name


@eel.expose
def get_ram_size_mb():
    """ 램 총 용량을 MB 단위로 반환 """
    return "%.2f" %(psutil.virtual_memory().total / 1024 **2)

@eel.expose
def get_ram_size_gb():
    """ 램 총 용량을 GB 단위로 반환 """
    return "%.2f" %(psutil.virtual_memory().total / 1024 **3)


@eel.expose
def get_os_version():
    """ 운영체제 버전을 반환 """
    if platform_name == macos_name:
        return platform.mac_ver()[0]
    return platform.release()

@eel.expose
def get_os_image():
    """ 운영체제 이미지 경로를 반환 """
    return platform_image_name

@eel.expose
def get_architecture():
    """ 아키텍쳐를 반환 """
    return platform.machine()

@eel.expose
def get_processor():
    """ CPU 이름을 반환 """
    if platform.system() == "Windows":
        return platform.processor()
    elif platform.system() == "Darwin":
        return subprocess.check_output(['/usr/sbin/sysctl', "-n", "machdep.cpu.brand_string"]).strip().decode('utf-8')
    elif platform.system() == "Linux":
        command = "cat /proc/cpuinfo"
        return subprocess.check_output(command, shell=True).strip().decode('utf-8')
    return ""

@eel.expose
def get_cpu_core():
    """ CPU 코어 개수를 반환 """
    return psutil.cpu_count()

@eel.expose
def get_cpu_percent():
    """ CPU 사용량을 반환 """
    return psutil.cpu_percent()

@eel.expose
def get_cpu_freq():
    """ CPU 클럭을 반환 """
    return "%.1f" %(psutil.cpu_freq().max / 1000)


@eel.expose
def get_ip_address():
    """ IP 주소를 반환 """
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))
    ip = s.getsockname()[0]
    s.close()
    return ip

@eel.expose
def get_mac_address():
    """ MAC 주소를 반환 """
    return getmac.get_mac_address()

if __name__ == "__main__":
    program_name = "Status"
    version = "1.0"
    platform_name = "Unknown"

    macos_name = "macOS"
    platform_image_name = "unknown.svg"

    platform_sys = platform.system()
    if platform_sys == "Windows":
        platform_name = "Windows"
        platform_image_name = "Windows_logo.png"

    elif platform_sys == "Darwin":
        platform_name = macos_name
        platform_image_name = "Apple_logo_black.svg"

    elif platform_sys == "Linux":
        platform_name = "Linux"
        platform_image_name = "Tux.svg"

    model_name = platform.node()

    default_port = 8000

    # Set electron
    eel.start("index.html", mode='chrome', suppress_error=True)