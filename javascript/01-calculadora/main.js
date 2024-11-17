
let numbers = document.querySelector("#numbers");
let erase = document.querySelector(".item1");
let calculateNumbers = document.querySelectorAll(".itemNumber");
let items = document.querySelectorAll(".item");
let deleteOne = document.querySelector(".item4");
let sum = document.querySelector(".item11");
let result = document.querySelector(".item19");
let divisor = document.querySelector(".item2");
let mult = document.querySelector(".item3");
let less = document.querySelector(".item8");
let circle = document.querySelector(".circle");
let container = document.querySelector(".container");
let itemActions = document.querySelectorAll(".itemAction");


let firstNumber;
let secondNumber;
let finalResult;

let multiply;
let divide;
let plus;
let minus;


circle.addEventListener("click", function(){
    container.classList.toggle("light")
    circle.classList.toggle("light__circle")
    numbers.classList.toggle("numbers__dark")
    items.forEach( item =>{
        item.classList.toggle("item__dark")
    } )
    itemActions.forEach( item =>{
        item.classList.toggle("item2__dark")
    } )
});

erase.addEventListener("click", function(){
    numbers.innerHTML = 0;
    multiply = false;
    divide = false;
    plus = false;
    minus = false;
});

calculateNumbers.forEach(num => {
    num.addEventListener("click", function(){
        num.classList.toggle("active");
        if (numbers.innerHTML == 0) {
            numbers.innerHTML = num.innerHTML
        } else{
            numbers.innerHTML += num.innerHTML
        }
        setTimeout( () => {
            num.classList.toggle("active");
        }, 500 )
    })
});

sum.addEventListener("click", function(){
   
    firstNumber = parseFloat(numbers.innerHTML);
   
    numbers.innerHTML = "";
    plus = true;
});

less.addEventListener("click", function(){
   
    firstNumber = parseFloat(numbers.innerHTML);
   
    numbers.innerHTML = "";
    minus = true;
});

divisor.addEventListener("click", function(){
   
    firstNumber = parseFloat(numbers.innerHTML);
   
    numbers.innerHTML = "";
    divide = true;
});

mult.addEventListener("click", function(){
   
    firstNumber = parseFloat(numbers.innerHTML);
   
    numbers.innerHTML = "";
    multiply = true;
});



deleteOne.addEventListener("click", function(){
    // console.log(typeof(numbers.innerHTML));
    numbers.innerHTML = numbers.innerHTML.slice(0, -1)
    if (numbers.innerHTML == "") {
        numbers.innerHTML = "0"
    }
})


result.addEventListener("click", function(){
    
    secondNumber = parseFloat(numbers.innerHTML)


    if (plus) {
        finalResult = firstNumber + secondNumber;
        numbers.innerHTML = finalResult;
        plus = false;
    } else if(divide) {
        if (secondNumber == 0) {
            numbers.innerHTML = "error";
            con
        } else {
            finalResult = firstNumber / secondNumber;
            if (finalResult % 1 !== 0) {
                numbers.innerHTML = finalResult.toFixed(2); 
            } else {
                numbers.innerHTML = finalResult; 
            }
        } 
        divide = false;
    } else if(multiply){
        finalResult = firstNumber * secondNumber;
        numbers.innerHTML = finalResult;
        multiply = false;
    } else if(minus){
        finalResult = firstNumber - secondNumber;
        numbers.innerHTML = finalResult;
        minus = false;
    }

});