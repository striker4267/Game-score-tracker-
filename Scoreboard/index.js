let h1 = document.getElementById("home-1");
let h2 = document.getElementById("home-2");
let h3 = document.getElementById("home-3");

let a1 = document.getElementById("away-1");
let a2 = document.getElementById("away-2");
let a3 = document.getElementById("away-3");

h1.addEventListener("click", () => add(1));
h2.addEventListener("click", () => add(2));
h3.addEventListener("click", () => add(3));

a1.addEventListener("click", () => addAway(1));
a2.addEventListener("click", () => addAway(2));
a3.addEventListener("click", () => addAway(3));

let hs = document.getElementById("hs")
let as = document.getElementById("as")

function add(num){
    hs.textContent = parseInt(hs.textContent) + num
    
}
function addAway(num){
    as.textContent = parseInt(as.textContent) + num
}
