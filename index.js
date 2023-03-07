



let count = 0;
let countEL = document.querySelector('.count-el');
let increment = document.querySelector('.increment-el');
let decrement = document.querySelector('.decrement-el');
let saveButton = document.querySelector('.saveBtn');
let saveText = document.querySelector(".save-el");
let resetButton = document.querySelector('.resetBtn');


increment.addEventListener("click", () => {
    count = count += 1;
    countEL.textContent = count;
    countEL.style.fontSize = "3rem";
})

decrement.addEventListener("click", () =>{
    count = count -=1;
    countEL.textContent = count;
    countEL.style.fontSize = "3rem";
})

saveButton.addEventListener("click", () => {

    countStr = count + "-";
    saveText.textContent += countStr;
    countEL.textContent = 0
    count = 0 
})

resetButton.addEventListener("click", () => {
    saveText.textContent = ""
    countEL.textContent = 0;
    count = 0;

    
})

const content = document.getElementsByTagName('body')[0];
const darkMode = document.querySelector('#dark-change');
const sunIcon = document.querySelector('.fa-sun')

darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('active');
    content.classList.toggle('dark');
    darkMode.style.cursor = "pointer";

    if (darkMode.classList.toggle('dark')) {
        darkMode.style.border = "2px solid white";
        
    }else {
        darkMode.style.border = "2px solid black";
        darkMode.style.display ;
    }

    if (sunIcon.classList.toggle('dark')){
        sunIcon.style.color = "black";
    } else {
        sunIcon.style.color = "white";
        sunIcon.style.transition = ".7s"
        sunIcon.style.borderRadius = "50%"
    }

    
})
























