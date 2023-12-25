document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      const a = new Audio("./sounds/kick-bass.mp3");
      a.play();
      break;
    case "s":
      const s = new Audio("./sounds/snare.mp3");
      s.play();
    case "d":
      const d = new Audio("./sounds/tom-1.mp3");
      d.play();
      break;
    case "f":
      const f = new Audio("./sounds/tom-2.mp3");
      f.play();
    case "g":
      const g = new Audio("./sounds/tom-3.mp3");
      g.play();
      break;
    case "h":
      const h = new Audio("./sounds/tom-4.mp3");
      h.play();
      break;
    case "j":
      const j = new Audio("./sounds/crash.mp3");
      j.play();
      break;
    default:
      break;
  }
});
