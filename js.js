const rightarrow = document.querySelectorAll(".arrow");

const movielist = document.querySelectorAll(".movie-list");
const leftarrow = document.querySelectorAll(".second-arrow");
for (let i = 0; i < leftarrow.length; i++) {
  leftarrow[i].style.display = "none";
}
rightarrow.forEach((item, i) => {
  const itemnumber = movielist[i].querySelectorAll("img").length;
  let clickcounter = 0;
  item.addEventListener("click", () => {
    leftarrow[i].style.display = "block";
      const ratio = Math.floor(window.innerWidth / 270);
    clickcounter++;
    if (itemnumber - (4 + clickcounter)+(4-ratio) >= 0) {
      movielist[i].style.transform = `translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
    }
    else
    {
      movielist[i].style.transform = "translateX(0)";
      clickcounter = 0;
        leftarrow[i].style.display = "none";
      }
  });
    
});
// ------------


leftarrow.forEach((item, i) => {
  item.addEventListener("click", () => {

    const currentTransform = movielist[i].computedStyleMap().get("transform")[0]
      .x.value;

    if (currentTransform < 0) {
      let newTransform = currentTransform + 300;

      if (newTransform > 0) newTransform = 0;
      movielist[i].style.transform = `translateX(${newTransform}px)`;
    }

    if (currentTransform + 300 >= 0) {
      movielist[i].style.transform = "translateX(0)";
      item.style.display = "none"; 
    }
  });
});




// ----------------
const ball = document.querySelector(".toogle-circle");
const items = document.querySelectorAll(
  ".container,.movie-list-title, .navbar, .sidebar,  .sidebar i,.nav-container,  .toogle,  .toogle-circle"
);
ball.addEventListener("click", () => { 
  items.forEach((item) => {
    item.classList.toggle("active");

  });

});