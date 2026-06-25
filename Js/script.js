const fill = document.querySelector(".bar-fill");
const percent = document.querySelector(".percent");
const status = document.querySelector(".status");

let progress = 0;

const interval = setInterval(()=>{
  progress+= 1;
  fill.style.width = progress+ '%';
  percent.textContent= progress+ '%';

  if(progress>=100){
    clearInterval(interval);
    status.textContent="Done!";
    status.style.color= '#22c553';

       setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);

    
  }
}, 30);