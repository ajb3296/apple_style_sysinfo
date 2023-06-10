import platform

def macver():
    version_name = ""
    version_num = platform.mac_ver()[0].split('.')

    platform_image = "Apple_logo.svg"
    if version_num[0] == "14":
        version_name = "Sonoma"

    elif version_num[0] == "13":
        version_name = "Ventura"
        platform_image = "ventura.png"

    elif version_num[0] == "12":
        version_name = "Monterey"
        platform_image = "monterey.png"
    
    elif version_num[0] == "11":
        version_name = "Big Sur"
        platform_image = "bigsur.png"
    
    elif version_num[0] == "10":
        if version_num[1] == "15":
            version_name = "Catalina"
            platform_image = "catalina.png"
        
        elif version_num[1] == "14":
            version_name = "Mojave"
            platform_image = "mojave.png"
        
        elif version_num[1] == "13":
            version_name = "High Sierra"
            platform_image = "highsierra.png"

        elif version_num[1] == "12":
            version_name = "Sierra"
            platform_image = "sierra.png"
        
        elif version_num[1] == "11":
            version_name = "El Capitan"
            platform_image = "elcapitan.png"
        
        elif version_num[1] == "10":
            version_name = "Yosemite"
        
        elif version_num[1] == "9":
            version_name = "Mavericks"
        
        elif version_num[1] == "8":
            version_name = "Mountain Lion"
    
    platform_image = "mac/" + platform_image

    return version_name, platform_image

def macver_name():
    version_name, _ = macver()
    return version_name

def macver_image():
    _, platform_image = macver()
    return platform_image