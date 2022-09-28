let carousel = [
  '<img class="rari animations" src="./assets/img/jacopo-fedi-mV0UH-8MN9k-unsplash.jpg" alt="ferrari_details" />',
  '<img class="rari animations" src="./assets/img/yrka-pictured-7qrOhvRm-x0-unsplash.jpg" alt="ferrari_details" />',
  '<img class="rari animations" src="./assets/img/yrka-pictured-ClxRpJAA69g-unsplash.jpg" alt="ferrari_details" />',
  '<img class="rari animations" src="./assets/img/yrka-pictured-IE-XPeuuRDQ-unsplash.jpg" alt="ferrari_details" />',
  '<img class="rari animations" src="./assets/img/yrka-pictured-oiqTq7BBwUQ-unsplash.jpg" alt="ferrari_details" />',
  '<img class="rari animations" src="./assets/img/yrka-pictured-t6Zs6GxKCUI-unsplash.jpg" alt="ferrari_details" />',
  '<img class="rari animations" src="./assets/img/yrka-pictured-UE35wZEypFc-unsplash.jpg" alt="ferrari_details" />',
];

function startCarousel() {
  let i = 0;
  setInterval(() => {
    let linkImage = carousel[i];
    document.getElementById("show").innerHTML = linkImage;
    i++;
    if (i == carousel.length) {
      i = 0;
    }
  }, 3000);
}
function stopCarousel() {
  clearInterval(interval);
  document.getElementById("show").innerHTML = carousel[1];
}
