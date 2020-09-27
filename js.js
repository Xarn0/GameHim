let obj ={
'one': 12,
'twy': 23
}
//console.log(obj.one)
let proba = new Map();
proba.set('0','./pp.png');
proba.set('1', "./korova.png");
proba.set('2', "./2.jpeg");
proba.set('3', "./3.jpeg");
proba.set('4', "./4.jpg");

let name = prompt("как вас зовут?");
if(name==null){
	name = 'Гость'
}

let numberAll;


function numberImage(po,img){

	let lenght = proba.size

   		for(let i = 0; i < lenght; i++){
        		 if(i == po){
				 console.log(proba.get(po))
				 document.querySelector(img).src = proba.get(po);
				 console.log(po)
				 return po;	
				}
	 
		}
}
function numberRandom(){
   return Math.round(Math.random()*3+1); 
}

//console.log(numberImage(`${numberRandom()}`,'#imag'))
//console.log(numberImage(`${numberRandom()}`,'#imag2'))

function answer(){

				let answerRight = numberImage(`${numberRandom()}`,'#imag')
				let answerLeft = numberImage(`${numberRandom()}`,'#imag2')
					return numberAll = Number(answerRight) + Number(answerLeft) ;
}
function userAnswer(numberAll){
		let font = document.querySelector('.dialogWindow')
			document.querySelector('#buttonClick').addEventListener('click',function(){
				let answerLocal = document.querySelector('#inputUsers').value;
				if(answerLocal == numberAll)
					{
					
					font.innerHTML = `Молодец  ${name}`;
					
					}
				else{
					
					font.innerHTML = `Попробуй ещё разок  ${name}`;
					}
			})

}
function clearInputAndStart(){
				document.querySelector('#inputUsers').value = '';
				document.querySelector('.dialogWindow').innerHTML = `Сколько Животных? ${name}`;
				userAnswer(answer());
				document.querySelector('#buttonClick').style.color = '#ff9';
}

document.querySelector('#buttonNext').addEventListener('click',function(){
	setTimeout(clearInputAndStart(),70)
})

userAnswer(answer())