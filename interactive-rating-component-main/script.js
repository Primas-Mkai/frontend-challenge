const main = document.querySelector('main');

const appreciationContainer = document.querySelector('.appreciation-container');
appreciationContainer.style.display = 'none';

const lists = document.querySelectorAll('li');

const selectedNumber = document.querySelector('#selected-number');
console.log(selectedNumber);

lists.forEach((list) => {
    list.addEventListener('click', (e) => {
        selectedNumber.innerHTML = e.target.innerHTML;
        list.style.background = 'white';
        list.style.color = '#262E38';
    });
});

const button = document.querySelector('button');

button.addEventListener('click', () => {
    appreciationContainer.style.display = 'block';
    main.style.display = 'none';
});