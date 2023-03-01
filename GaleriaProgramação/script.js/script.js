const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const mainImg = document.getElementById('mainImg');
const thumbImgs = document.querySelectorAll('.thumb_img_list img');

// Define a posição inicial da imagem atual
let currentImgIndex = 0;

// Adiciona um ouvinte de evento para os botões de navegação
prevButton.addEventListener('click', showPrevImg);
nextButton.addEventListener('click', showNextImg);

// Define a função para exibir a imagem anterior
function showPrevImg() {

  // Decrementa o índice da imagem atual
  currentImgIndex--;

  // Se o índice for menor que 0, volta ao último item
  if (currentImgIndex < 0) {
    currentImgIndex = thumbImgs.length - 1;
  }

  // Define a nova imagem atual
  mainImg.src = thumbImgs[currentImgIndex].src;
}

// Define a função para exibir a próxima imagem

function showNextImg() {

  // Incrementa o índice da imagem atual

  currentImgIndex++;
  // Se o índice for maior que o último item, volta ao primeiro

  if (currentImgIndex >= thumbImgs.length) {
    currentImgIndex = 0;
  }

  // Define a nova imagem atual
  mainImg.src = thumbImgs[currentImgIndex].src;
}