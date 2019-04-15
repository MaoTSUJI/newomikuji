let btn = document.getElementById('btn');
let result = document.getElementById('result');
let bgColor = document.getElementsByClassName('result');
let luckytext = document.getElementById('luckytext');
let color = document.getElementById('color');
//let omikuji = ["大吉","中吉","吉","小吉","凶"];
let omikuji = ["だいきち","ちゅうきち","きち","しょうきち","きょう!!"];
let comment = ["めっちゃええやん！", "まぁまぁやな！","ええやん！","おもんないわ","あかんやん！"]
let luckeyColorName = ["あか","きいろ","みどり","あお","むらさき"];
let luckeyColorNum = ["#FF6969","#F9BF4B","#44D37E","#6EC4FF","#9573FF"];

btn.addEventListener('click', function(){

//floor 小数点を切り捨てた数値 //random関数は0~1までの数値をランダムで表示
//omikujiの要素数でかけることによって、要素数にランダムに振り分ける。
	let num1 = Math.floor(Math.random() * omikuji.length);
	let num2 = Math.floor(Math.random() * omikuji.length);
//	console.log(omikuji[num1]);

//背景色をラッキーカラーの色にする
	bgColor[0].style.backgroundColor = luckeyColorNum[num2];
	//result.style.backgroundColor = 'pink';
　
//背景色が黄のとき、文字色を黒にする条件分岐
	let fontColor;
	if(num2 == 1){
		fontColor = 'black';
	} else {
		fontColor = 'white';
	}

	result.style.color = fontColor;
	luckytext.style.color = fontColor;
	color.style.color = fontColor;

//element.setAttribute(name, value);

//くじの結果をテキストとして出力
	result.innerHTML = (`${omikuji[num1]}!!<br>${comment[num1]}`);
//ラッキーカラーをテキストとして出力	
	luckytext.textContent = (`ラッキーカラーは`);
	color.textContent = (`${luckeyColorName[num2]}!!`);


});
