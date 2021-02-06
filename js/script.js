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