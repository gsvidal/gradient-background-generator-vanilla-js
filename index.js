const colorLeftElement = document.querySelector('#left');
const colorMiddleElement = document.querySelector('#middle');
const colorRightElement = document.querySelector('#right');
const bodyElement = document.querySelector('body');
const rangeInputElement = document.querySelector('#range');
const labelRangeElement = document.querySelector('#label-range');
const angleInputElement = document.querySelector('#angle');
const labelAngleElement = document.querySelector('#label-angle');
const CSSGeneratedElement = document.querySelector('.generator');
const copyCSSButtonElement = document.querySelector('button');

CSSGeneratedElement.textContent = `linear-gradient(${angleInputElement.value}deg, ${colorLeftElement.value}, ${colorMiddleElement.value} ${rangeInputElement.value}%, ${colorRightElement.value})`;

const textAndStyleCopyButton = () => {
  copyCSSButtonElement.textContent = 'Copy to Clipboard';
  copyCSSButtonElement.classList.remove('copied');
}

// Change title color if only middle color is darker (R,G and B channels are less than "80" respectively)
const handleChangeColor = (event, position) => {
  textAndStyleCopyButton();
  if (position === 'middle') {
    let s = event.target.value;
    if (s.slice(1, 3) < '80' && s.slice(3, 5) < '80' && s.slice(5, 7) < '80') {
      bodyElement.style.color = 'white';
    } else {
      bodyElement.style.color = 'black';
    }
  }

  bodyElement.style.background =
    CSSGeneratedElement.textContent = `linear-gradient(${angleInputElement.value}deg, ${colorLeftElement.value}, ${colorMiddleElement.value} ${rangeInputElement.value}%, ${colorRightElement.value})`;
};

const handleChangeRange = (event) => {
  textAndStyleCopyButton();
  const value = event.target.value;
  bodyElement.style.background =
    CSSGeneratedElement.textContent = `linear-gradient(${angleInputElement.value}deg, ${colorLeftElement.value}, ${colorMiddleElement.value} ${value}%, ${colorRightElement.value})`;
  labelRangeElement.textContent = `${value}%`;
};

const handleChangeAngle = (event) => {
  textAndStyleCopyButton();
  const value = event.target.value;
  bodyElement.style.background =
    CSSGeneratedElement.textContent = `linear-gradient(${value}deg, ${colorLeftElement.value}, ${colorMiddleElement.value} ${rangeInputElement.value}%, ${colorRightElement.value})`;
  labelAngleElement.textContent = `${value}°`;
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(CSSGeneratedElement.textContent).then(() => {
    copyCSSButtonElement.textContent = 'Copied!';
    copyCSSButtonElement.classList.add('copied');
  });
};

colorLeftElement.addEventListener('input', handleChangeColor);

colorMiddleElement.addEventListener('input', (event) =>
  handleChangeColor(event, 'middle')
);

colorRightElement.addEventListener('input', handleChangeColor);

rangeInputElement.addEventListener('input', handleChangeRange);

angleInputElement.addEventListener('input', handleChangeAngle);

copyCSSButtonElement.addEventListener('click', copyToClipboard);
