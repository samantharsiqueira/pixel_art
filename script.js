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
  const colorsArray = ['brown', 'black', 'red', 'green'];
  for (let index = 0; index < colorsArray.length; index += 1) {
    const colorList = document.createElement('div'); // enquanto percorre o array ele criou uma div pra cada cor
    colorList.classList.add('color'); // e adicionou a classe cor pra cada div criada do array
    // CSS STYLE
    colorList.style.border = '1px solid black';
    colorList.style.height = '40px';
    colorList.style.width = '40px';
    colorList.style.backgroundColor = colorsArray[index];

    colorPalette.appendChild(colorList);
  }
  // CSS STYLE para a DIV pai das minhas DIVs coloridas pra conseguir ajustar elas como um conjunto
  colorPalette.style.display = 'flex';
};

createColor();

// O requisito 5 pediu um botao que limpasse as cores preenchidas mas como o JS é lido de cima pra baixo
// coloquei o botão aqui pra ficar onde o requisito queria que ficasse

const reseatBtn = () => {
  const buttonDiv = document.createElement('div'); // criei uma div pra armazernar meu botao. Precisa disso?
  buttonDiv.id = 'divBtn'; // coloquei um ID pra ser mais facil chamar pq eu tenho mais divs
  // criei o botao
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  document.body.appendChild(buttonDiv); // a div é filha do body
  buttonDiv.appendChild(button); // o botão é filho da div
  button.style.marginTop = '10px'; // STYLE CSS pra espacar no topo
};

reseatBtn();

// botao requisito 7
const randomColorBtn = () => {
  const colorDiv = document.createElement('div'); // criei uma div pra armazernar meu botao. Precisa disso?
  colorDiv.id = 'color-div'; // coloquei um ID pra ser mais facil chamar pq eu tenho mais divs
  // criei o botao
  const colorButton = document.createElement('button');
  colorButton.id = 'button-random-color';
  colorButton.innerText = 'Cores aleatórias';
  document.body.appendChild(colorDiv); // a div é filha do body
  colorDiv.appendChild(colorButton); // o botão é filho da div
  colorButton.style.marginTop = '10px'; // STYLE CSS pra espacar no topo
};
randomColorBtn();

// Requisito 2
/* Adicione à página um quadro contendo 25 pixels, sendo que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel */
// Vou criar uma caixa e colocar caixinhas dentro dela

const pixelContainer = document.createElement('div');
pixelContainer.id = 'pixel-board';
document.body.appendChild(pixelContainer);

const createPixels = () => {
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    // Eu nao coloquei o numero dinamico, um parametro quantity nao funcinou pra mim
    // STYLE CSS dos meus pixels individuais
    pixel.style.height = '40px';
    pixel.style.width = '40px';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';

    pixelContainer.appendChild(pixel);
  }
  // STYLE CSS pra minha caixa de pixels
  pixelContainer.style.width = '230px';
  pixelContainer.style.height = '200px';
  pixelContainer.style.marginTop = '10px';
};

createPixels();

// Requisito 3

//  Ao selecionar uma caixa, ela recebe a classe selected e retira da outra caixa
// mesma logica do personagem do Mario Kart

function receiveClick(event) {
  const elementoSelecionado = document.querySelector('.selected'); // Quando seleciona o elemento vc adiciona a classe selected nele
  if (elementoSelecionado) {
    // remover a classe selected
    elementoSelecionado.classList.remove('selected'); // se ja tiver selecionado em algum lugar, vc retira e repete
    // Precisa fazer isso pra poder mover o quadrado de seleção, o JS não consegue puxar o quadrado, ele remove e coloca em outro lugar
  }

  event.target.classList.add('selected'); // O evento de clique no lugar especifico adicionou a classe selected
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

// Requisito 7 pra nao dar erro
const savePixelBoard = () => {
  const pixelClass = document.getElementsByClassName('pixel'); // Recuperar o quadradinho que eu vou alterar
  const pixelArray = []; // criei um array vazio pra entrar a cor do index que vai aparecer no meu for
  for (let index = 0; index < pixelClass.length; index += 1) {
    pixelArray.push(pixelClass[index].style.backgroundColor); // Empurra pra dentro do array
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelArray)); // Salva no local storage
};
// Requisito 4

// A caixinha selecionada, deve receber a cor que a pessoa usuária escolher

// eslint-disable-next-line max-lines-per-function
function changeBackground(event) {
  const elementoSelecionado = document.querySelector('.selected');
  const elementoClicado = event;
  elementoClicado.target.style.backgroundColor = elementoSelecionado.style.backgroundColor; // adiciona a cor de fundo do elemento selecionado no espaco pixel que vc clicou

  savePixelBoard();
}
const changePixelColor = () => {
  const pixelBox = document.getElementsByClassName('pixel'); // Recuperando o quadradinho pra poder passar a nova cor de fundo

  for (let index = 0; index < pixelBox.length; index += 1) {
    const pixelSquare = pixelBox[index]; // Um Array de quadradinhos pra envolver no evento de clique
    pixelSquare.addEventListener('click', changeBackground);
  }
};

changePixelColor();

// Requisito 5

function resetPixel() {
  const pixelBox = document.getElementsByClassName('pixel'); // Recuperando o quadradinho pra poder passar a nova cor de fundo
  for (let index = 0; index < pixelBox.length; index += 1) {
    const pixelSquare = pixelBox[index]; // Um Array de quadradinhos pra envolver no evento de clique
    pixelSquare.style.backgroundColor = 'white'; // adiciona a cor de fundo do elemento selecionado no espaco pixel que vc clicou
  }
}
function resetColor() {
  const pixelBox = document.getElementsByClassName('pixel'); // // Recuperando o quadradinho pra poder passar a nova cor de fundo
  const resetButton = document.getElementById('clear-board'); // Chamando o botão limpar

  for (let index = 0; index < pixelBox.length; index += 1) {
    resetButton.addEventListener('click', resetPixel);
  }
}

resetColor();

// Requisito 6

// Criei um botão do lado do outro

const colorRange = () => {
  const initialColor = document.getElementsByClassName('color'); // Recuperar o quadradinho que eu vou alterar
  for (let index = 0; index < initialColor.length; index += 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    const finalColor = `rgb(${r}, ${g}, ${b})`; // Concatenando a cor aleatoria - Seria esse o melhor jeito pra fazer?
    const colorIndex = initialColor[index];
    colorIndex.style.backgroundColor = finalColor;
  }
};

const randomColor = () => {
  const initialColor = document.getElementsByClassName('color'); // Recuperar o quadradinho que eu vou alterar
  const randomBtn = document.getElementById('button-random-color'); // Recuperar o o botao que eu vou adicionar o evento de click
  for (let index = 0; index < initialColor.length; index += 1) {
    randomBtn.addEventListener('click', colorRange);
  }
};

randomColor();

// Requisito 7

const returnPixelBoard = () => {
  const pixelClass = document.getElementsByClassName('pixel'); // Recuperar o quadradinho que eu vou alterar
  const pixelBox = JSON.parse(localStorage.getItem('pixelBoard')); // recupera o que eu salvei no storage

  for (let index = 0; index < pixelClass.length; index += 1) {
    if (pixelBox !== null) { // se for diferente de branco
      pixelClass[index].style.background = pixelBox[index]; // retorna o que estava anteriormente
      console.log(pixelBox);
    }
  }
};

returnPixelBoard();

// Requisito 8
     
     