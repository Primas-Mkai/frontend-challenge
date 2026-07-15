const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

const headerImage = document.querySelector(".header-image");

const backgrounds = [
    "url('images/image-product-1.jpg')",
    "url('images/image-product-2.jpg')",
    "url('images/image-product-3.jpg')",
    "url('images/image-product-4.jpg')"
];

let currentIndex = 0;

const updateBackground = () => {
    headerImage.style.background = `${backgrounds[currentIndex]} no-repeat`;
    headerImage.style.backgroundSize = "cover";
}

next.addEventListener('click', () => {
    if (currentIndex < backgrounds.length - 1) {
        currentIndex++;
        updateBackground();
    };
});

previous.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateBackground();
    };
});

// Click the cart to view the basket container 

const cart = document.querySelector('.cart');
const basketContainer = document.querySelector('.basket-container');

console.log(basketContainer);

cart.addEventListener('click', () => {
    basketContainer.classList.toggle('visibility');
});