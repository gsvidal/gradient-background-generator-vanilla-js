const colorLeftElement = document.querySelector('#left');
const colorMiddleElement = document.querySelector('#middle');
const colorRightElement = document.querySelector('#right');
const bodyElement = document.querySelector('body');
// const titleElement = document.querySelector('h1');
const rangeInputElement = document.querySelector('#range');
const angleInputElement = document.querySelector('#angle');

// Change title color if only middle color is darker (R,G and B channels are less than "80" respectively)
const handleChangeColor = (event, position) => {
  if (position === 'middle') {
    let s = event.target.value;
    if (s.slice(1, 3) < '80' && s.slice(3, 5) < '80' && s.slice(5, 7) < '80') {
      bodyElement.style.color = 'white';
    } else {
      bodyElement.style.color = 'black';
    }
  }

  bodyElement.style.background = `linear-gradient(${angleInputElement.value}deg, ${colorLeftElement.value}, ${colorMiddleElement.value} ${rangeInputElement.value}%, ${colorRightElement.value})`;
};

const handleChangeRange = (event) => {
  const value = event.target.value;
  bodyElement.style.background = `linear-gradient(${angleInputElement.value}deg, ${colorLeftElement.value}, ${colorMiddleElement.value} ${value}%, ${colorRightElement.value})`;
};

const handleChangeAngle = (event) => {
  console.log(event.target.value);
  const value = event.target.value;
  bodyElement.style.background = `linear-gradient(${value}deg, ${colorLeftElement.value}, ${colorMiddleElement.value} ${rangeInputElement.value}%, ${colorRightElement.value})`;
};

colorLeftElement.addEventListener('input', handleChangeColor);

colorMiddleElement.addEventListener('input', (event) =>
  handleChangeColor(event, 'middle')
);

colorRightElement.addEventListener('input', handleChangeColor);

rangeInputElement.addEventListener('input', handleChangeRange);

angleInputElement.addEventListener('input', handleChangeAngle);
