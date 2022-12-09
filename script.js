let inp = document.querySelector(".input");
let btnNumber = document.querySelectorAll(".btn_number");
let optButton = document.querySelectorAll(".optButton");
let clear = document.querySelector(".clear");
let result = document.querySelector(".esittir");
let slice = document.querySelector(".slice");

let total1 = 0;
let total2 = 0;
let emmeliyyat = "";

for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener("click", (e) => {
   
    inp.value += e.target.innerText;
  });
}

for (let i = 0; i < optButton.length; i++) {
  optButton[i].addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "*":
        emmeliyyat = "vurma";
        total1 = Number(inp.value);
        console.log(total1);
        inp.value = "";
        break;
      case "/":
        emmeliyyat = "bolme";
        total1 = Number(inp.value);
        // console.log(total1);
        inp.value = "";
        break;
      case "+":
        emmeliyyat = "plus";
        total1 = Number(inp.value);
        // console.log(total1);
        inp.value = "";
        break;
      case "-":
        emmeliyyat = "minus";
        total1 = Number(inp.value);
        // console.log(total1);
        inp.value = "";
        break;
    }
  });
}
result.addEventListener("click", () => {
  let endNum = Number(inp.value);
  console.log(endNum);
  if (emmeliyyat == "vurma") {
    total2 = total1 * endNum;
  } else if (emmeliyyat == "bolme") {
    total2 = total1 / endNum;
  } else if (emmeliyyat == "plus") {
    total2 = total1 + endNum;
  } else if (emmeliyyat == "minus") {
    total2 = total1 - endNum;
  }
  //    console.log(total2);
  inp.value = total2;
});

clear.addEventListener('click',()=>{
  inp.value=""
})