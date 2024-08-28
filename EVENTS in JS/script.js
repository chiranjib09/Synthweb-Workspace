let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
  console.log(evt);
 console.log(evt.type);
 console.log(evt.target);
 console.log(evt.clientX, evt.clientY);

});
btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - Handler 1");

});

btn1.addEventListener("click", () => {
  console.log("button was clicked - Handler2");
});

const Handler3 = () =>{
  console.log("button was clicked - Handler 3");
};

btn1.addEventListener("click", (evt) => {
  console.log("button was clicked - Handler 3");

});

btn1.addEventListener("click", () => {
  console.log("button was clicked - Handler4");
});


/*let div = document.querySelector("div");
div.onmouseover = (evt)=>{
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};*/

btn1.removeEventListener("Click", Handler3);


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light";

modeBtn.addEventListener("click", () => {
 if (currMode ==="Light"){
  currMode = "dark";
  body.classList.add("dark");
  body.classList.remove("light");
 }else {
  currMode = "Light";
  body.classList.add("light");
  body.classList.remove("dark");
 }
 console.log(currMode);
});