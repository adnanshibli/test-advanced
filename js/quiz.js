const quizData = [
	{quiz: '1. What real programmer do?',
		a: 'a. real programmers fix one bug and get 100 new ones',
		b: 'b. real programmers love spaces',
		c: 'c. real programmer debug code in each line',
		d: 'd.  real programmers test their code in too many points other than production' ,
		correct: 'a'
	},
	{quiz: '2. In which point you can consider your self as a real programmer?',
		a: 'a. when you find the solution with one line code' ,
		b: 'b. when you fill your coffe on your laptop and aggressively press Ctrl+Z to undo error' ,
		c: 'c. when your code works' ,
		d: 'd. when you can tell programmers related jokes' ,
		correct: 'b'
	},
	{quiz: '3 Another point when you reach you are a real programmer?',
		a: 'a. when you graduate from programming course',
		b: 'b. when your code runs from the first attempt',
		c: 'c. when you try to Ctrl+F a printed book',
		d: 'd. when you do not have to debug a code',
		correct: 'c'
	},
	{quiz: '4. the main things we struggle with in programming?',
		a: 'a. other programmers code',
		b: 'b. naming things in code',
		c: 'c. Debugging',
		d: 'd. The right amount of curses mixed with enough coffee',
		correct: 'd'
	},
	{quiz: '5. What do you think is the first rule of programming?',
		a: 'a. If somthing looks easy it is hard if it hard it is possible',
		b: 'b. it works try it with another way',
		c: 'c. never ask why just be grateful it works!',
		d: 'd. write your code carefully,so no one will steal it',
		correct: 'c'	
	},
	{quiz: '6. Expressions only programmers use to say it is difficult?',
		a: 'a. you know it is like making a website with out buttons',
		b: 'b. it is like making a lego car with no clear design',
		c: 'c. it is like riding a bicycle for the first time',
		d: 'd.  it is like riding a bicycle but backwards',
		correct: 'a'	
	},
	{quiz: '7. Another unique expression for the programers?',
		a: 'a. I like this just in the same way i like debugging codes',
		b: 'b. it is magical just like a code works from the first try',
		c: 'c. coffee + smashing buttons = magic happens',
		d: 'd. good projects idea + quality department inside company = successful jub',
		correct: 'c'	
	}
]; 

//load first quiz
const questions = document.getElementById('question');
const aAnswer = document.getElementById('a_answer');
const bAnswer = document.getElementById('b_answer');
const cAnswer = document.getElementById('c_answer');
const dAnswer = document.getElementById('d_answer');
let currentQuiz = 0;
quizLoad();
function quizLoad(){	
	questions.innerHTML = quizData[currentQuiz].quiz;
	aAnswer.innerHTML = quizData[currentQuiz].a;
	bAnswer.innerHTML = quizData[currentQuiz].b;
	cAnswer.innerHTML = quizData[currentQuiz].c;
	dAnswer.innerHTML = quizData[currentQuiz].d;
	};
function nextQuiz(){
	currentQuiz++;
	deselect();
	document.getElementById('demo').innerHTML = '';
	if(currentQuiz >= quizData.length){
		const nextBtn = document.getElementById('next');
		document.getElementById('demo').innerHTML = 
		'Score' + ': ' + count + ' ' + 'out of' + ' ' + quizData.length;
		nextBtn.innerHTML = 'You finished ,this quiz was just for fun ,go and complete yourcode Hero';
		} else {
		quizLoad();

		}
};

// submit Answer and check
let count = 0;
function submitAnswer(){
	const userAnswer = document.querySelector(('input[type="radio"]:checked')|| {}).value;
	console.log(userAnswer);
	if (userAnswer == quizData[currentQuiz].correct){
		document.getElementById('demo').innerHTML = 'Correct!';
		count++;
		console.log(count);
	} else {
		document.getElementById('demo').innerHTML = 
		'Incorrect!' + ' ' + quizData[currentQuiz].correct + ' ' + 
		'is correct answer';
	}
};
//deselect 
function deselect(){
	const answerChecked = document.querySelectorAll('.answer');
	for(let i=0; i<4 ; i++){
		answerChecked[i].checked = false;
	}
};
