const inputEl = document.querySelector('input');
const outputNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
outputNameEl.textContent = event.currentTarget.value;
    if(event.currentTarget.value===''){
        outputNameEl.textContent = 'незнакомец'
    }
}