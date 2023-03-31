const colorLeftElement = document.querySelector('#left');
const colorMiddleElement = document.querySelector('#middle');
const colorRightElement = document.querySelector('#right');
const bodyElement = document.querySelector('body');
const titleElement = document.querySelector('h1');
const rangeInputElement = document.querySelector('#range');

// Change title color if only middle color is darker (R,G and B channels are less than "80" respectively)
const handleChangeColor = (event, position) => {
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

const handleChangeRange = (event) => {
  const value = event.target.value;
  bodyElement.style.background = `linear-gradient(to right, ${colorLeftElement.value}, ${colorMiddleElement.value} ${value}%, ${colorRightElement.value})`;
}

colorLeftElement.addEventListener('input', handleChangeColor);

colorMiddleElement.addEventListener('input', (event) => handleChangeColor(event, "middle"));

colorRightElement.addEventListener('input', handleChangeColor);

rangeInputElement.addEventListener('input', handleChangeRange);