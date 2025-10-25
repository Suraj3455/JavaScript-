const img = document.getElementById('slider-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Array of image URLs
const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1045/600/400",
  "https://picsum.photos/id/1055/600/400"
];

let index = 0;

// Function to update image
function updateImage() {
  img.style.opacity = 0; // fade out
  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1; // fade in
  }, 200);
}

// Next button
nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateImage();
});

// Prev button
prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateImage();
});

// Auto-slide every 3 seconds
setInterval(() => {
  index = (index + 1) % images.length;
  updateImage();
}, 3000);
