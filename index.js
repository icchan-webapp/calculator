// この度は、本コードを見ていただきありがとうございます。
// ゆっくりと見ていってください！

const $doc = document;
const result = $doc.getElementById('result');

// inputのvalueをリセットする
const reset = (elem) => {
    $doc.querySelector( 'input' ).value = elem
}

// ボタンを押した時に、電卓液晶部分に数字を表示させる
const edit = (elem) => {
    result.value = result.value + elem.value;
}

// 電卓液晶部分に表示されている式を計算する
const calc = () => {
    result.value = new Function('return ' + result.value)();
}

// プラス・マイナスを反転させる
const plmi = () => {
    result.value *= -1;
}