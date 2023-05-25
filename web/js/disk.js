async function disk() {
    let info_main = document.getElementsByClassName("info_main")[0];

    document.getElementsByClassName("menu_item")[0].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[1].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[2].classList.remove("f1f1f1");
    document.getElementsByClassName("menu_item")[3].classList.add("f1f1f1");
    document.getElementsByClassName("menu_item")[4].classList.remove("f1f1f1");

    let max_disk = await eel.get_disk_size()();
    let used_disk = await eel.get_used_disk()();

    info_main.innerHTML = '<div class="chart"><canvas id="diskchart"></canvas></div>';

    let data_list = [used_disk.toFixed(2), (max_disk - used_disk).toFixed(2)];
    let ctx = document.getElementById('diskchart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Used ' + used_disk.toFixed(2) + 'GB', 'Remain ' + (max_disk - used_disk).toFixed(2) + 'GB'],
            datasets: [{
                label: 'Disk',
                borderCapStyle: 'round',
                data: data_list,
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
                    max: max_disk,
                }
            }
        }
    });
}