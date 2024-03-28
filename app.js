let span = document.querySelector("#span");
console.log(span);
let text = document.querySelector("#text");
let btn = document.querySelector("button");
let speak = document.querySelector("#speak");
let dot = document.querySelector(".dot");
let body = document.querySelector("body");
let impbtns = document.querySelector(".impbtns")


body.addEventListener("mousemove", (e) => {
  dot.style.left = e.x + "px";
  dot.style.top = e.y + "px";
})

impbtns.addEventListener("mouseenter", () => {
  dot.style.display = "none";
})
impbtns.addEventListener("mouseleave", () => {
  dot.style.display = "inline";
})

btn.addEventListener("mouseenter", () => {
  dot.style.display = "none";
})
btn.addEventListener("mouseleave", () => {
  dot.style.display = "inline";
})
text.addEventListener("mouseenter", () => {
  dot.style.display = "none";
})
text.addEventListener("mouseleave", () => {
  dot.style.display = "inline";
})

btn.addEventListener("click", () => {

  async function joke() {
    let f = await fetch("https://icanhazdadjoke.com/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    let j = await f.json()
    let jo = j.joke

    text.innerHTML = jo

  }
  joke()


})

span.addEventListener("click", () => {
  text.select();
  document.execCommand('copy');
  alert('copy');
})

speak.addEventListener("click", () => {
  let speak = new SpeechSynthesisUtterance(text.value);
  speak.lang = "hi-IN";
  window.speechSynthesis.speak(speak);
})