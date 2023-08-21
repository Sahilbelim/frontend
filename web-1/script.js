const parallax_el = document.querySelectorAll(".parallax");
let xVakue = 0, yValue = 0;
window.addEventListener("mousemove", (e) => {
    xVakue = e.clientX - window.innerWidth/2;
    yVakue = e.clientY - window.innerWidth / 2;
    parallax_el.forEach((el) => {
      el.style.transform = `translateX(calc(-50%+${xVakue})px),translateY (calc(-50%)+${yValue}px);`;
    });
})
