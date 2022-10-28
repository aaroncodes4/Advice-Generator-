const adviceNumber = document.getElementById('number');
const adviceContent = document.getElementById('message');
const btn = document.getElementById('button');

btn.addEventListener('click', getAdvice);


function getAdvice() {

 fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
    adviceNumber.textContent = data.slip.id;
    adviceContent.textContent = data.slip.advice;
    })
}