const mainload = document.getElementById("mainload");
const drop = document.querySelector(".navbar2");
const menu = document.querySelector(".moresym");
const close = document.querySelector(".cross");
function closepreloader() {
   mainload.style.display = "none";
}
window.addEventListener("load", function () {
   setTimeout(closepreloader, 2000);
});
window.addEventListener("scroll", function () {
   drop.style.top = "-500px";
   menu.style.display = "block";
   drop.style.display = "none";
});
menu.addEventListener("click", function () {
   drop.style.top = "0px";
   drop.style.display = "flex";
   menu.style.display = "none";
});
close.addEventListener("click", function () {
   drop.style.top = "-500px";
   menu.style.display = "block";
   drop.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
   const elements = document.querySelectorAll(".slide-ind");

   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
               setTimeout(() => {
                  entry.target.classList.add("visible");
               }, index * 100);
            }
         });
      },
      { threshold: 0.2 }
   );

   elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
   const elements = document.querySelectorAll(".slide-up");

   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("visible");
         }
      });
   });

   elements.forEach((el) => observer.observe(el));
});
