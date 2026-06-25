const message = document.querySelectorAll(".paragraph");
const title = document.querySelector(".heading");

setTimeout(() => {
    title.classList.add("show");
}, 10)

const btn = document.getElementById("button");
btn.classList.add("show");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add("show");
            }, index* 500);

        }
    });

});

message.forEach(paragraph => {
    observer.observe(paragraph);
});

/*
observe(element)
↓
Observer watches element
↓
Browser detects visibility change
↓
Creates entry
↓
Passes entry into entries
↓
Callback runs
*/