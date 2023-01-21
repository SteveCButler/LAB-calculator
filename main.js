//declare variables
let zeroBtn = document.querySelector("#zero");
let oneBtn = document.querySelector("#one");
let twoBtn = document.querySelector("#two");
let threeBtn = document.querySelector("#three");
let fourBtn = document.querySelector("#four");
let fiveBtn = document.querySelector("#five");
let sixBtn = document.querySelector("#six");
let sevenBtn = document.querySelector("#seven");
let eightBtn = document.querySelector("#eight");
let nineBtn = document.querySelector("#nine");
let fnBtns = document.querySelectorAll(".functionButton");
let clrBtn = document.querySelector(".clear");
let backBtn = document.querySelector(".backButton");
let eqaulBtn = document.querySelector(".equalButton");
let numBtns = document.querySelectorAll(".numButton");
let numbers = [];

//Clear results window
clrBtn.addEventListener("click", () => {
  numbers = [];
  resultsOut(0);
});

backBtn.addEventListener("click", () => {
  numbers.pop();
  // let allNumbers = Number(numbers.join(""));
  resultsOut(Number(numbers.join("")));
});

//Access number buttons and update result window
numBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    numValue = event.target.innerHTML;
    numbers.push(numValue);
    //console.log(numbers);
    // let allNumbers = Number(numbers.join(""));
    resultsOut(Number(numbers.join("")));
  });
});

// Access function buttons
fnBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    fnValue = event.target.innerHTML;
    // resultsOut(numValue);
    console.log(fnValue);
  });
});

// Update value in results window
function resultsOut(numValue) {
  let resultValue = document.querySelector(".results");
  resultValue.innerHTML = `${numValue}`;
}
