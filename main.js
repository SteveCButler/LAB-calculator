//declare variables
let numBtns = document.querySelectorAll(".numButton");
let fnBtns = document.querySelectorAll(".functionButton");
let clrBtn = document.querySelector(".clear");
let eqaulBtn = document.querySelector(".equalButton");

//Clear results window
clrBtn.addEventListener("click", () => {
  resultsOut(0);
});

//Access number buttons and update result window
numBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    numValue = event.target.innerHTML;
    resultsOut(numValue);
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
