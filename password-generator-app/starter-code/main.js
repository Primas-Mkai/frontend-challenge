const password = document.querySelector("#password");
const button = document.querySelector("#copyButton");
const copiedText = document.querySelector("#copied");

console.log(button);

// Coping the password to clipboard 
button.addEventListener('click', () => {
    password.select();
    password.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(password.value);

    copiedText.style.display = "block";
});

button.addEventListener('mouseout', () => {
    copiedText.style.display = "none";
})

const characterLength = document.querySelector("#character-number");
const slider = document.querySelector("#myRange");

// Check the boxes whenever a condition is met
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const checkbox3 = document.querySelector("#checkbox3");
const checkbox4 = document.querySelector("#checkbox4");

console.log(checkbox1);

const handleCount = () => {
    characterLength.textContent = password.value.length;
    slider.value = password.value.length;
};

const strengthBars = document.querySelectorAll(".strength-bars");
const strength = document.querySelector("#strength");

// To show the strength of the password
const strengthChecker = () => {
    let value = password.value;
    let point = 0;

    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
    checkbox4.checked = false;

    if (value.length > 6) {
        let arrayTest = [
            {regex: /[A-Z]/, checkbox: checkbox1},
            {regex: /[a-z]/, checkbox: checkbox2},
            {regex: /[0-9]/, checkbox: checkbox3},
            {regex: /[^0-9a-zA-Z]/, checkbox: checkbox4},
        ];

        arrayTest.forEach((item) => {
            if (item.regex.test(value)) {
                point += 1;
                item.checkbox.checked = true;
            }
        }) 
    }

    for (i = 0; i < point; i++) {
        if (i == 2) {
            strength.textContent = "MEDIUM";
        }

        if (i == 3) {
            strength.textContent = "STRONG";
        }

        strengthBars[i].style.backgroundColor = "#F8CD65";
        strengthBars[i].style.border = "none";
    }
}

password.addEventListener('input', function() {
    handleCount();

    strengthChecker();
});
