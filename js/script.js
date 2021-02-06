const table = document.getElementById('timetable');

function addRow() {
    // テーブルのインデックス 0 の行（一行目）に行を挿入
    var newRow = table.insertRow(-1);

    // 一行目にセルを挿入
    var newCell = newRow.insertCell(0);

    // 作成したセルにテキストノードを挿入
    var newText = document.createTextNode('New top row')
    newCell.appendChild(newText);
}
