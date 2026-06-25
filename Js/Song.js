const heading = document.querySelector(".Song-heading");
const song = document.getElementById("Song-holder")
const btn = document.querySelector(".button_holder");

setTimeout(()=>{
    heading.classList.add("show");   
}, 1000);


setTimeout(()=>{
    song.classList.add("show");
},1400);

setTimeout(()=>{
btn.classList.add("show");
}, 1800);
