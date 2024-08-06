let text = document.querySelector('div')
let input = document.querySelector('input')

input.addEventListener("input", ()=>{
    text.style.color = input.value;
    text.style.fontSize = input.value;
    
})