const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.dir(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.append(bgImage);
