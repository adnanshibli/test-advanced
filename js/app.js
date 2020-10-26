'use strict';
// const quizData = [
// 	{quiz: '1. What is North America\'s oldest national park?',
// 		a: 'a. Yellowstone National Park',
// 		b: 'b. Great Smoky Mountains National Park',
// 		c: 'c. Grand Canyon National Park',
// 		d: 'd. Yosemite National Park' ,
// 		correct: 'a'
// 	},
// 	{quiz: '2. What is The Most Beautiful Gardens In Canada? You Have seen?',
// 		a: 'a. Annapolis Historic Gardens. NS' ,
// 		b: 'b. Butchart Gardens. BC' ,
// 		c: 'c. Royal Botanical Gardens. ON' ,
// 		d: 'd. Kingsbrae Garden. NB' ,
// 		correct: 'b'
// 	},
// 	{quiz: '3 Which park has the highest tides in the world?',
// 		a: 'a. Cape Breton Highlands National Park NS',
// 		b: 'b. Prince Edward Island National Park PEI',
// 		c: 'c. Hopewell Rocks Rocks Provincial Park NB',
// 		d: 'd. Glacier National Park BC',
// 		correct: 'c'
// 	},
// 	{quiz: '4. What is the most southerly national park in Canada?',
// 		a: 'a. Bruce Peninsula',
// 		b: 'b. St Lawrence Islands',
// 		c: 'c. Gwaii Haanas',
// 		d: 'd. Point Pelee',
// 		correct: 'd'
// 	},
// 	{quiz: '5. Of all Canada’s Great Lakes, which is the largest?',
// 		a: 'a. Lake Erie',
// 		b: 'b. Lake Ontario',
// 		c: 'c. Lake Superior',
// 		d: 'd. Lake Huron',
// 		correct: 'c'	
// 	},
// 	{quiz: '6. What canyon in North Amerca Wolfkang did not visited?',
// 		a: 'a. Grand Canyon',
// 		b: 'b. Zion Canyon',
// 		c: 'c. Brice Canyon',
// 		d: 'd. Antelope Canyon',
// 		correct: 'd'	
// 	},
// 	{quiz: '7. What park has the most beautiful fall color last year?',
// 		a: 'a. Gatineau Park',
// 		b: 'b. Algonquin Park',
// 		c: 'c. Mont Tremblanc Park',
// 		d: 'd. Falks of credit park',
// 		correct: 'a'	
// 	},
// 	{quiz: '8. What park Wolfkang have visited for camping this year?',
// 		a: 'a. Pinery Provincial Park',
// 		b: 'b. Voyager Provincial Park',
// 		c: 'c. Bruce Peninsula National Park',
// 		d: 'd. PEI National Park',
// 		correct: 'b'	
// 	},
// 	{quiz: '9. What cave is near Shenandoah National Park in Virginia US?',
// 		a: 'a. Lusk Cave',
// 		b: 'b. Julia\'s Cave',
// 		c: 'c. Bruce\'s Cave',
// 		d: 'd. Luray Caverns',
// 		correct: 'd'	
// 	},
// 	{quiz: '10. What park is not located in Rocky Mountain Canada?',
// 		a: 'a. Banff National Park',
// 		b: 'b. Jasper National Park',
// 		c: 'c. Mount Robson Provincial Park',
// 		d: 'd. Joshua Tree National Park',
// 		correct: 'd'	
// 	}
// ]; 

// //load first quiz
// const questions = document.getElementById('question');
// const aAnswer = document.getElementById('a_answer');
// const bAnswer = document.getElementById('b_answer');
// const cAnswer = document.getElementById('c_answer');
// const dAnswer = document.getElementById('d_answer');
// let currentQuiz = 0;
// quizLoad();
// function quizLoad(){	
// 	questions.innerHTML = quizData[currentQuiz].quiz;
// 	aAnswer.innerHTML = quizData[currentQuiz].a;
// 	bAnswer.innerHTML = quizData[currentQuiz].b;
// 	cAnswer.innerHTML = quizData[currentQuiz].c;
// 	dAnswer.innerHTML = quizData[currentQuiz].d;
// 	};
// function nextQuiz(){
// 	currentQuiz++;
// 	deselect();
// 	document.getElementById('demo').innerHTML = '';
// 	if(currentQuiz >= quizData.length){
// 		const nextBtn = document.getElementById('next');
// 		document.getElementById('demo').innerHTML = 
// 		'Score' + ': ' + count + ' ' + 'out of' + ' ' + quizData.length;
// 		nextBtn.innerHTML = 'You finished! Go hiking!';
// 		} else {
// 		quizLoad();

// 		}
// };

// // submit Answer and check
// let count = 0;
// function submitAnswer(){
// 	const userAnswer = document.querySelector(('input[type="radio"]:checked')|| {}).value;
// 	console.log(userAnswer);
// 	if (userAnswer == quizData[currentQuiz].correct){
// 		document.getElementById('demo').innerHTML = 'Correct!';
// 		count++;
// 		console.log(count);
// 	} else {
// 		document.getElementById('demo').innerHTML = 
// 		'Incorrect!' + ' ' + quizData[currentQuiz].correct + ' ' + 
// 		'is correct answer';
// 	}
// };
// //deselect 
// function deselect(){
// 	const answerChecked = document.querySelectorAll('.answer');
// 	for(let i=0; i<4 ; i++){
// 		answerChecked[i].checked = false;
// 	}
// };



// // array for Review objects
var allReviews = [];
// Constructor to instantite Review objects
function Review(name, comment) {
	this.name = name;
	this.counter = 0;
	this.comment = comment;
	allReviews.push(this); // push the object to the array
}
//prototype function to handle check onclick 
Review.prototype.check = function () {
	//variable to get the radios checked by id 
	var sam1 = document.getElementById('yes1').checked;
	if (sam1) {
		this.counter++;
	}
	var sam2 = document.getElementById('yes2').checked;
	if (sam2) {
		this.counter++;
	}
	var sam3 = document.getElementById('yes3').checked;
	if (sam3) {
		this.counter++;
	}
	var sam4 = document.getElementById('yes4').checked;
	if (sam4) {
		this.counter++;
	}
	var sam5 = document.getElementById('yes5').checked;
	if (sam5) {
		this.counter++;
	}



};

// var radios;
var reviewForm = document.getElementById('reviewForm');//getting the form element freom HTML file 
reviewForm.addEventListener('submit', handleReviewSubmit);
// var rowsArr = ['syllabus', 'delivered', 'criteria', 'exams', 'assignments'];
function handleReviewSubmit(event) {
	console.log(event);
	event.preventDefault();
	var review = new Review(event.target.userName.value, event.target.comment.value);
	review.check();
	console.log(allReviews);
	reviewForm.reset();
	sendToLS();
	getFromLS();
	render();

}
// sending the data to local storage
function sendToLS() {
	var reviewObject = JSON.stringify(allReviews);
	localStorage.setItem('review', reviewObject);
}

function getFromLS() {
	var reviewJS = localStorage.getItem('review');
	if (reviewJS) {
		allReviews = JSON.parse(reviewJS);
		render();
	}
}
getFromLS();
function render() {
	var reviewList = document.getElementById('reviewList');
	reviewList.textContent ="";
	for (var e = 0; e < allReviews.length; e++) {
		var liEl = document.createElement('li');
		console.log(typeof(liEl));
		liEl.textContent = `${allReviews[e].name},${allReviews[e].counter},${allReviews[e].comment}`;
		reviewList.appendChild(liEl);

		var removeBtn = document.createElement('button');
		removeBtn.setAttribute('id', allReviews[e].name);
		removeBtn.textContent = 'X';
		reviewList.appendChild(removeBtn);

	}

}

var ulReviewList = document.getElementById('reviewList');
ulReviewList.addEventListener('click', removeItem);
function removeItem(event) {
	event.preventDefault();
	var index;
	if (event.target.id !== 'reviewList') {
		// console.log('you clicked on a button');
		console.log(event.target.id); //Nashmi
		for (var d= 0; d< allReviews.length; d++) {
			if (allReviews[d].name === event.target.id) {
				index = d;
				allReviews.splice(index, 1);
				break;
			}
		}

		console.log(allReviews);
		sendToLS();
		getFromLS();
	}
}
