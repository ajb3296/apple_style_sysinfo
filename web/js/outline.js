async function outline() {
    let info_main = document.getElementsByClassName("info_main")[0];

    document.getElementsByClassName("menu_item")[0].classList.add("f1f1f1");
    document.getElementsByClassName("menu_item")[1].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[2].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[3].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[4].classList.remove("f1f1f1");

    let os_image = await eel.get_os_image()();
    let os_name = await eel.get_os_name()();
    let os_version = await eel.get_os_version()();
    let processor_name = await eel.get_processor()();
    let processor_core = await eel.get_cpu_core()();
    let processor_clock = await eel.get_cpu_freq()();
    let memory_mb = await eel.get_ram_size_mb()();
    let ip = await eel.get_ip_address()();
    let mac = await eel.get_mac_address()();

    info_main.innerHTML = ''+
        '<div class="icon_box">'+
        '    <img class="icon_img" src="/img/' + os_image + '">'+
        '</div>'+
        '<div class="info_box">'+
        '    <h1 class="os_name">' + os_name + '</h1>'+
        '    <a>버전 ' + os_version + '</a>'+
        '    <br>'+
        '    <br>'+
        '    <a>프로세서&nbsp;&nbsp;' + processor_clock + ' GHz ' + processor_core + '코어 ' + processor_name + '(arm64) </a><br>'+
        '    <a>메모리&nbsp;&nbsp;' + memory_mb + 'MB</a><br>'+
        '    <a>IP&nbsp;&nbsp;' + ip + '</a><br>'+
        '    <a>MAC&nbsp;&nbsp;' + mac + '</a><br>'+
        '</div>';
}