import distro

def linuxver():
    linux_id = distro.id()
    linux_ver = distro.version()
    linux_name = distro.name(pretty=True)

    platform_image = "linux.png"
    if linux_id == "ubuntu":
        platform_image = "ubuntu.png"