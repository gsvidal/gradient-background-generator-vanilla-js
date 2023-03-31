const colorLeftElement = document.querySelector('#left');
const colorMiddleElement = document.querySelector('#middle');
const colorRightElement = document.querySelector('#right');
const bodyElement = document.querySelector('body');
const titleElement = document.querySelector('h1');

// Change title color if only middle color is darker (R,G and B channels are less than "80" respectively)
const changeColor = (event, position) => {
  if(position === "middle") {
    let s = event.target.value;
    if (s.slice(1, 3) < '80' && s.slice(3, 5) < '80' && s.slice(5, 7) < '80') {
      titleElement.style.color = 'white';
    } else {
      titleElement.style.color = 'black';
    }
  }

  bodyElement.style.background = `linear-gradient(to right, ${colorLeftElement.value}, ${colorMiddleElement.value}, ${colorRightElement.value})`;
};

colorLeftElement.addEventListener('input', changeColor);

colorMiddleElement.addEventListener('input', (event) => changeColor(event, "middle"));

colorRightElement.addEventListener('input', changeColor);
