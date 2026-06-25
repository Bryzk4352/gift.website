const heading = document.querySelector(".flowers-heading");
const flowers = document.querySelector(".tulips");
const flowerText = document.querySelector(".tulipsAnimate");
const btn = document.getElementById("buttonBack");
const notes = document.querySelectorAll(".sticky");

const itemContainer = [
    heading,
    flowers,
    flowerText,
    btn,
    ...notes,
    // nodelist is not allowed.

    
]

itemContainer.forEach((element, index)=>{
setTimeout(()=>{

 
element.classList.add("show");
}, (index+1)* 400);
});