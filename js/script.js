'use strict';

let screenWidth, screenHeight;
const getScreenSize = function () {
    screenWidth = screen.width;
    screenHeight = screen.height;
    displaySize.innerHTML = screenWidth + " x " + screenHeight;
};

window.onload = getScreenSize;

// 参考 http://scrap.php.xdomain.jp/javascript_table_control/
const table = document.getElementById('timetable');
const addRow = function () {
    // テーブルのインデックス 0 の行（一行目）に行を挿入
    const newRow = table.insertRow(-1);

    // 一行目にセルを挿入
    const newCell1 = newRow.insertCell(-1);

    // 作成したセルにテキストノードを挿入
    const newDate = document.createTextNode('MM/DD');
    newCell1.contentEditable = true;
    newCell1.appendChild(newDate);

    for (let i = 1; i < table.rows[0].cells.length; i++) {
        const newCell2 = newRow.insertCell(-1);
        const newSubject = document.createTextNode('教科名');
        newCell2.contentEditable = true;
        newCell2.appendChild(newSubject);
    }
};

const addCell = function () {
    // 行数取得
    const rows = table.rows.length;

    // 各行末尾にセルを追加
    for (let i = 0; i < rows; i++) {
        const cols = table.rows[i].cells.length;
        if (cols > 10) {
            break;
        }
        const cell = table.rows[i].insertCell(-1);
        cell.innerHTML = i == 0 ? cols + "コマ目" : "教科名";
        cell.contentEditable = true;
    }
};

const downloadImage = function () {
    const tableElement = document.querySelector('#main');
    const linkElement = document.querySelector('#dl-link');

    html2canvas(tableElement).then(canvas => {
        linkElement.href = canvas.toDataURL('image/png');
        linkElement.download = 'table.png';
        linkElement.click();
    });
};

// 参考 https://code-kitchen.dev/html/input-file/
const previewFile = function (file) {
    // プレビュー画像を追加する要素
    const preview = document.getElementById('main');

    if (preview.querySelector('img')) {
        preview.querySelector('img').remove();
    }

    // FileReaderオブジェクトを作成
    const reader = new FileReader();

    // URLとして読み込まれたときに実行する処理
    reader.onload = function (e) {
        const imageUrl = e.target.result; // URLはevent.target.resultで呼び出せる
        const img = document.createElement("img"); // img要素を作成
        img.src = imageUrl; // URLをimg要素にセット
        preview.appendChild(img); // #previewの中に追加
    }

    // いざファイルをURLとして読み込む
    reader.readAsDataURL(file);
};

const fileInput = document.getElementById('image');
const handleFileSelect = () => {
    const files = fileInput.files;
    previewFile(files[0]);
};
fileInput.addEventListener('change', handleFileSelect);
