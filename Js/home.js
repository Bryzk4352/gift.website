const title = document.querySelector(".heading");
const subtitle = document.querySelector(".subtitle");
const gifts = document.querySelectorAll(".gift-container");

setTimeout(() => {
    title.classList.add("show");
}, 500);

setTimeout(() => {
    subtitle.classList.add("show");
}, 120);


gifts.forEach((gifts, index)=>{
 

    setTimeout(()=>{
      gifts.classList.add("show");    
    }, 1000+ (index*700));
});