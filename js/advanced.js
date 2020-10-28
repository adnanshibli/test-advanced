'use strict';
// array for Review objects
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
    // var counter1 = 0;
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
// handleReviewSubmit();
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
        liEl.textContent = `My name is: ${allReviews[e].name}, and I rate this course with ${allReviews[e].counter} out of 5. Any additional comment: ${allReviews[e].comment}`;
        reviewList.appendChild(liEl);
        var removeBtn = document.createElement('button');
        removeBtn.setAttribute('id', allReviews[e].name);
        removeBtn.textContent = 'Remove';
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
