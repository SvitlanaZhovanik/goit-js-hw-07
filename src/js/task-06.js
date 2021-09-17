const inputRef = document.querySelector('input');
inputRef.addEventListener('change', () => {
if(inputRef.dataset.length == inputRef.value.length){
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid')
}
 else {inputRef.classList.add('invalid');
 inputRef.classList.remove('valid')} })
console.dir(inputRef);