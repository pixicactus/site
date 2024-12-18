document.addEventListener("DOMContentLoaded", function () {
    const images = Array.from(document.querySelectorAll(".img-carousel"));
    let currentIndex = 0;
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function changeImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }
  
    shuffleArray(images);
  
    images[currentIndex].classList.add("active");
  
    const imageContainer = document.querySelector(".image-container");
    images.forEach(image => imageContainer.appendChild(image));
  
    setInterval(changeImage, 3000);
  });
  
  