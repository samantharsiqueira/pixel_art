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
