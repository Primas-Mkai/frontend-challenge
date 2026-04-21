const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly");

daily.addEventListener("click", () => {
    updateDailyContent(json);
})

weekly.addEventListener("click", () => {
    updateWeeklyContent(json);
})

monthly.addEventListener("click", () => {
    updateMonthlyContent(json);
})

let json;

fetch('data.json').then((response) => {
    if(!response.ok) return console.log("Oops, something went wrong");

    return response.json();
}).then((data) => {
    json = data;
    updateWeeklyContent(json);
}).catch((error) => {
    alert(`Could not fetch data: ${error}`)
});

const workCurrentHours = document.querySelector("#work-current");
const playCurrentHours = document.querySelector("#play-current");
const studyCurrentHours = document.querySelector("#study-current");
const exerciseCurrentHours = document.querySelector("#exercise-current");
const socialCurrentHours = document.querySelector("#social-current");
const selfCareCurrentHours = document.querySelector("#self-care-current");

const workPreviousHours = document.querySelector("#work-previous");
const playPreviousHours = document.querySelector("#play-previous");
const studyPreviousHours = document.querySelector("#study-previous");
const exercisePreviousHours = document.querySelector("#exercise-previous");
const socialPreviousHours = document.querySelector("#social-previous");
const selfCarePreviousHours = document.querySelector("#self-care-previous");

function updateDailyContent(obj1) {
    workCurrentHours.textContent = `${obj1[0].timeframes.daily.current}hrs`;
    playCurrentHours.textContent = `${obj1[1].timeframes.daily.current}hrs`;
    studyCurrentHours.textContent = `${obj1[2].timeframes.daily.current}hrs`;
    exerciseCurrentHours.textContent = `${obj1[3].timeframes.daily.current}hrs`;
    socialCurrentHours.textContent = `${obj1[4].timeframes.daily.current}hrs`;
    selfCareCurrentHours.textContent = `${obj1[5].timeframes.daily.current}hrs`;

    workPreviousHours.textContent = `Last day - ${obj1[0].timeframes.daily.previous}hrs`;
    playPreviousHours.textContent = `Last day - ${obj1[1].timeframes.daily.previous}hrs`;
    studyPreviousHours.textContent = `Last day - ${obj1[2].timeframes.daily.previous}hrs`;
    exercisePreviousHours.textContent = `Last day - ${obj1[3].timeframes.daily.previous}hrs`;
    socialPreviousHours.textContent = `Last day - ${obj1[4].timeframes.daily.previous}hrs`;
    selfCarePreviousHours.textContent = `Last day - ${obj1[5].timeframes.daily.previous}hrs`; 
};

function updateWeeklyContent(obj2) {
    workCurrentHours.textContent = `${obj2[0].timeframes.weekly.current}hrs`;
    playCurrentHours.textContent = `${obj2[1].timeframes.weekly.current}hrs`;
    studyCurrentHours.textContent = `${obj2[2].timeframes.weekly.current}hrs`;
    exerciseCurrentHours.textContent = `${obj2[3].timeframes.weekly.current}hrs`;
    socialCurrentHours.textContent = `${obj2[4].timeframes.weekly.current}hrs`;
    selfCareCurrentHours.textContent = `${obj2[5].timeframes.weekly.current}hrs`;

    workPreviousHours.textContent = `Last week - ${obj2[0].timeframes.weekly.previous}hrs`;
    playPreviousHours.textContent = `Last week - ${obj2[1].timeframes.weekly.previous}hrs`;
    studyPreviousHours.textContent = `Last week - ${obj2[2].timeframes.weekly.previous}hrs`;
    exercisePreviousHours.textContent = `Last week - ${obj2[3].timeframes.weekly.previous}hrs`;
    socialPreviousHours.textContent = `Last week - ${obj2[4].timeframes.weekly.previous}hrs`;
    selfCarePreviousHours.textContent = `Last week - ${obj2[5].timeframes.weekly.previous}hrs`;
};

function updateMonthlyContent(obj3) {
    workCurrentHours.textContent = `${obj3[0].timeframes.monthly.current}hrs`;
    playCurrentHours.textContent = `${obj3[1].timeframes.monthly.current}hrs`;
    studyCurrentHours.textContent = `${obj3[2].timeframes.monthly.current}hrs`;
    exerciseCurrentHours.textContent = `${obj3[3].timeframes.monthly.current}hrs`;
    socialCurrentHours.textContent = `${obj3[4].timeframes.monthly.current}hrs`;
    selfCareCurrentHours.textContent = `${obj3[5].timeframes.monthly.current}hrs`;

    workPreviousHours.textContent = `Last month - ${obj3[0].timeframes.monthly.previous}hrs`;
    playPreviousHours.textContent = `Last month - ${obj3[1].timeframes.monthly.previous}hrs`;
    studyPreviousHours.textContent = `Last month - ${obj3[2].timeframes.monthly.previous}hrs`;
    exercisePreviousHours.textContent = `Last month - ${obj3[3].timeframes.monthly.previous}hrs`;
    socialPreviousHours.textContent = `Last month - ${obj3[4].timeframes.monthly.previous}hrs`;
    selfCarePreviousHours.textContent = `Last month - ${obj3[5].timeframes.monthly.previous}hrs`;
};


/* the data from json file will replace these data 
ones the time period is clicked 

Algorithm 
1. fetch data.json
2. select where you want to change content 
3. Ones a certain timeframe is selected then the current data will
   will be replaced with the data from that time frame

NB: the fetch can be inside a function in which the function will be inside an eventlistener when i call it
*/