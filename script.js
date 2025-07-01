const orien = document.getElementById("orientation");

const text = "My name is ";

let i = 0;

function typewriter() {
  if (i < text.length) {
    orien.innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, 100);
  }
}

typewriter();