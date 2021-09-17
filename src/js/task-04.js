let counterValue = 0;
const valueEl = document.querySelector("#value");
const buttonDecrementEl = document.querySelector("[data-action='decrement']");
const buttonIncrementEl =  document.querySelector("[data-action='increment']");

buttonDecrementEl.addEventListener('click', onDecrementBtn)
buttonIncrementEl.addEventListener('click', onIncrementBtn)


function onIncrementBtn (){
counterValue +=1;
return valueEl.textContent = counterValue
}
///сделала проверку на не ниже нуля просто чтобы потренироваться =-)//
function onDecrementBtn () {
    if (valueEl.textContent>0) {
        counterValue -=1;
    } 
    return valueEl.textContent = counterValue 
}