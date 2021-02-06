'use strict'

window.onload = getScreenSize();

var screenWidth, screenHeight;
function getScreenSize() {
    let displaySize = document.getElementById('displaySize');
    screenWidth = screen.width;
    screenHeight = screen.height;
    displaySize.innerHTML = screenWidth + " x " + screenHeight;
}

const table = document.getElementById('timetable');
function addRow() {
    // テーブルのインデックス 0 の行（一行目）に行を挿入
    let newRow = table.insertRow(-1);

    // 一行目にセルを挿入
    let newCell1 = newRow.insertCell(-1);
    let newCell2 = newRow.insertCell(-1);

    // 作成したセルにテキストノードを挿入
    let newDate = document.createTextNode('MM/DD');
    let newSubject = document.createTextNode('教科名');
    newCell1.contentEditable = true;
    newCell1.appendChild(newDate);

    newCell2.contentEditable = true;
    newCell2.appendChild(newSubject);
}

function addCell() {
    // 行数取得
    let rows = table.rows.length;

    // 各行末尾にセルを追加
    for (let i = 0; i < rows; i++) {
        let cell = table.rows[i].insertCell(-1);
        let cols = table.rows[i].cells.length;
        if (cols > 10) {
            continue;
        }
        cell.innerHTML = (cols - 1) + "コマ目";
        cell.contentEditable = true;
    }
}

document.downloadImage = () => {
    const tableElement = document.querySelector('#timetable');
    const linkElement = document.querySelector('#dl-link');

    html2canvas(tableElement).then(canvas => {
        linkElement.href = canvas.toDataURL('image/png');
        linkElement.download = 'table.png';
        linkElement.click();
    });
}