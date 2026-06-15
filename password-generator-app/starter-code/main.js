const password = document.querySelector("#password");
const characterLength = document.querySelector("#character-number");
const slider = document.querySelector("#myRange");

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

const strengthChecker = () => {
    let value = password.value;
    let point = 0;

    if (value.length > 6) {
        let arrayTest = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^0-9a-zA-Z]/];

        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
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
