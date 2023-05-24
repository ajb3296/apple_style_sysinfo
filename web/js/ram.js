async function ram() {
    let info_main = document.getElementsByClassName("info_main")[0];

    document.getElementsByClassName("menu_item")[0].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[1].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[2].classList.add("f1f1f1");
    document.getElementsByClassName("menu_item")[3].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[4].classList.remove("f1f1f1");

    let max_ram = await eel.get_ram_size_gb()();

    info_main.innerHTML = '<div class="chart"><canvas id="ramchart"></canvas></div>';

    let data_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let ctx = document.getElementById('ramchart').getContext('2d');
    let ch = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', '', '' ,'' ,''],
            datasets: [{
                label: 'RAM(GB)',
                borderCapStyle: 'round',
                data: data_list,
                fill: true,
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                duration: 0
            },
            scales: {
                y: {
                    min: 0,
                    max: max_ram *= 1,
                }
            }
        }
    });

    ram_chart(data_list, ch);
}

async function ram_chart(data_list, ch) {
    let timer = ms => new Promise(res => setTimeout(res, ms))
    while (true) {
        if (document.getElementById("ramchart") == null) {
            break;
        }
        // 마지막 값 제거
        data_list.shift();
        // 새로운 값 추가
        data_list.push(await eel.get_used_ram_gb()());

        ch.data.datasets[0].data = data_list;
        ch.update();
        
        await timer(1000);
    }
}