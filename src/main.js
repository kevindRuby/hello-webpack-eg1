import imageSrc from './image.jpg'; // Adjust the path if necessary

const imgElement = document.createElement('img');
imgElement.src = imageSrc;
imgElement.alt = 'Description of image';
document.body.appendChild(imgElement);


const textElement = document.createElement('h1');
textElement.textContent = 'This text will blink!';
document.body.appendChild(textElement);

setInterval(() => {
    textElement.style.visibility = (textElement.style.visibility === 'hidden' ? '' : 'hidden');
}, 500);
