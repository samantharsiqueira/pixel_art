// Requisito 1

// criar um titulo 'Paleta de Cores' e colocar o id title
const createTitle = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  // add como filho do boby pra mostrar no html
  document.body.appendChild(title);
};

createTitle();
// criar a paleta de cor. Deve ser uma lista? Percorrer um array?
// color o id color-palette
// eu deveria criar uma div pra cada cor ou uma lista??? lista ficaria de um jeito especifico ne?

const createColor = () => {
  const colorPalette = document.createElement('div');
  colorPalette.id = 'color-palette';
  document.body.appendChild(colorPalette);

  // criar um array com as cores e colocar a classe color nelas
  const colorsArray = ['blue', 'green', 'red', 'yellow'];
  for (let index = 0; index < colorsArray.length; index += 1) {
    const colorList = document.createElement('div');
    colorList.classList.add('color');

    colorList.style.border = '1px solid black';
    colorList.style.height = '40px';
    colorList.style.width = '40px';
    colorList.style.backgroundColor = colorsArray[index];

    colorPalette.appendChild(colorList);
  }
  colorPalette.style.display = 'flex';
};

createColor();

const createBtn = () => {
  const buttonDiv = document.createElement('div');
  buttonDiv.id = 'divBtn';
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  document.body.appendChild(buttonDiv);
  buttonDiv.appendChild(button);
  button.style.position = '10px';
};

createBtn();

// Requisito 2
/* Adicione à página um quadro contendo 25 pixels, sendo que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel */
// Vou criar uma caixa e colocar quadradinhos dentro dela
const pixelContainer = document.createElement('div');
pixelContainer.id = 'pixel-board';
document.body.appendChild(pixelContainer);

const createPixels = () => {
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    pixel.style.height = '40px';
    pixel.style.width = '40px';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';

    pixelContainer.appendChild(pixel);
  }

  pixelContainer.style.width = '230px';
  pixelContainer.style.height = '200px';
  pixelContainer.style.marginTop = '10px';
};

createPixels();
// Requisito 3

// 1. Ao selecionar uma caixa, ela recebe a classe selected e retira da outra caixa

function receiveClick(event) {
  const elementoSelecionado = document.querySelector('.selected');
  if (elementoSelecionado) {
    // remover a classe selected
    elementoSelecionado.classList.remove('selected');
  }

  event.target.classList.add('selected');
}
const selectColor = () => {
  // Retorna uma node list ou seja um array
  const colors = document.getElementsByClassName('color');

  // Percorrer o array de cores
  for (let index = 0; index < colors.length; index += 1) {
    const color = colors[index];
    // Um evento para cada cor
    // Event listener só funciona para 1 elemento
    color.addEventListener('click', receiveClick);
  }
};
selectColor();
// Requisito 4

// A caixinha selecionada, deve receber a cor que a pessoa usuária escolher

function changeBackground(event) {
  const elementoSelecionado = document.querySelector('.selected');
  const elementoClicado = event;
  elementoClicado.target.style.backgroundColor = elementoSelecionado.style.backgroundColor;
}

const changePixelColor = () => {
  const pixelBox = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixelBox.length; index += 1) {
    const pixelSquare = pixelBox[index];
    pixelSquare.addEventListener('click', changeBackground);
  }
};

changePixelColor();

// Requisito 5


function resetPixel() {
  const pixelSquare = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelSquare.length; index += 1) {
    const pixel = pixelSquare[index];
    pixel.style.backgroundColor = 'white';
  }
}
function resetColor() {
  const pixelBox = document.getElementsByClassName('pixel');
  const resetButton = document.getElementById('clear-board');

  for (let index = 0; index < pixelBox.length; index += 1) {
    resetButton.addEventListener('click', resetPixel);
  }
}


resetColor();
