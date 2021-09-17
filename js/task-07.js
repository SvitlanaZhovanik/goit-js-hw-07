const fontSizeControlRef = document.querySelector('input');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input',()=>{
    return textRef.style.fontSize = fontSizeControlRef.value+"px"  
})