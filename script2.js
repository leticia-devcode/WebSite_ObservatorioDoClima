const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let position = 0;

nextBtn.addEventListener('click', () => {
  position -= 200; // ajuste conforme largura das imagens
  track.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener('click', () => {
  position += 200;
  track.style.transform = `translateX(${position}px)`;
});
