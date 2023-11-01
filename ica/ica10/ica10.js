
let currentImage = 1; 

function changeImage() { //define the funciton
    currentImage = (currentImage % 6) + 1; //this will cycle thru the 6 pix. using modulo to get the position in the cycle and then +1 to move on from it
    document.getElementById('kittyImage').src = `cat${currentImage}.jpeg`; //update src, using an f string to edit it (not really an f string but same idea)
    // referenced this link: https://stackoverflow.com/questions/7312553/change-image-source-with-javascript
}

document.getElementById('changeImage').addEventListener('click', changeImage); //this is the actual listener 

 // referenced this link: https://stackoverflow.com/questions/7312553/change-image-source-with-javascript
