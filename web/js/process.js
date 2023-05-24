async function process() {
    let info_main = document.getElementsByClassName("info_main")[0];

    document.getElementsByClassName("menu_item")[0].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[1].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[2].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[3].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[4].classList.add("f1f1f1");

    make_html = '<div class="table_box"><table class="ps_table" align="center">'+
        '<tr align="center">'+
        '<th>PID</th>'+
        '<th>Status</th>'+
        '<th>Process Name</th>'
        '</tr>';
    
    let process_list = await eel.get_process_list()();
    for (let i of process_list) {
        make_html += '<tr align="center">'+
            '<td>' + i[0] + '</td>'+
            '<td>' + i[1] + '</td>'+
            '<td>' + i[2] + '</td>'+
            '</tr>';
    }
    make_html += '</table></div>';
    info_main.innerHTML = make_html
}