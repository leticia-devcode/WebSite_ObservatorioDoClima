
  const slider = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slider-container img');
  let index = 0;

  function moveSlider() {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    slider.style.transform = `translateX(-${index * 100}vw)`;
  }

  setInterval(moveSlider, 3000); // Muda a imagem a cada 3 segundos
