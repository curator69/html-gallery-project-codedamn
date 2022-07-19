// document.getElementById("item").addEventListener("click", () => {
//   console.log("clicked");
// });

const image = document.getElementsByClassName("item");

const newImages = Array.from(image);

function toggle() {}

function modalFunction() {}

newImages.map((img) =>
  img.addEventListener("click", (e) => {
    const image = e.target;
    console.log(image);
  })
);
