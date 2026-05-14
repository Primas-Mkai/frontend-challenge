// define variables to be used
let billAmount = document.querySelector("#bill-amount");
let people = document.querySelector("#people");

let billAmountNumber = Number(billAmount.textContent);
let numofPeople = Number(people.textContent);

// clear text when you focus to enter a bill amount and number of people

billAmount.addEventListener("focus", () => {
    billAmount.textContent = "";
});   

people.addEventListener("focus", () => {
    people.textContent = "";
});

billAmount.addEventListener('input', () => {
    billAmountNumber = Number(billAmount.textContent);
    console.log(billAmountNumber)
});

people.addEventListener('input', () => {
    numofPeople = Number(people.textContent);
    console.log(numofPeople);
});

const tipButtons = document.querySelectorAll(".tip-option");

tipButtons.forEach((tipButton) => {
    tipButton.addEventListener('click', (e) => {
        console.log(billAmountNumber);

        const tipPercentages = e.target.textContent;
        const tipPercentNumber = Number(tipPercentages.replace('%',""));
        
        const tip = tipPercentNumber / 100;
        const tipAmountNumber = (tip * billAmountNumber) / numofPeople;

        tipAmount.textContent = "$" + tipAmountNumber.toFixed(2);
        totalAmount.textContent = "$" + (tipAmountNumber + (billAmountNumber / numofPeople)).toFixed(2);
    });
});

let tipAmount = document.querySelector("#tip-amount");
let totalAmount = document.querySelector("#total-amount");

// Reset button 
const resetButton = document.querySelector(".reset");

resetButton.addEventListener('click', () => {
    billAmount.textContent = "0";
    people.textContent = "0";
    tipAmount.textContent = "$" + "0";
    totalAmount.textContent = "$" + "0";
});