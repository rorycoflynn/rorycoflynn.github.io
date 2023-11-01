
let currentImage = 1; 

function changeImage() { //define the funciton
    currentImage = (currentImage % 6) + 1; //this will cycle thru the 6 pix. using modulo to get the position in the cycle and then +1 to move on from it
    document.getElementById('kittyImage').src = `cat${currentImage}.jpeg`; //update src, using an f string to edit it (not really an f string but same idea)
    // referenced this link: https://stackoverflow.com/questions/7312553/change-image-source-with-javascript
}

document.getElementById('changeImage').addEventListener('click', changeImage); //this is the actual listener 

 // referenced this link: https://stackoverflow.com/questions/7312553/change-image-source-with-javascript
 let clickCount = 0; 

 document.getElementById('changeImage').addEventListener('click', function() {
     clickCount++; //every time the button is clicked we increase click counter
 
     if (clickCount <= 7) {
         const newBackgroundColor = `rgb(${255 - clickCount * 30}, ${255 - clickCount * 30}, ${255 - clickCount * 30})`;
         document.body.style.backgroundColor = newBackgroundColor;
     } else {
         document.body.style.backgroundColor = 'black';
     }
 });// every time the button is clicked, 
 //we mess with the rgb value using the current number of clicks multiplied by 30 to decrease the actual number of the rbg and thus make it darker 
// the idea is you lose functionality because you wanted to get your future told too many times. 
 //then the click=color event is referenced from this and mozilla
//https://www.geeksforgeeks.org/how-to-change-the-background-color-after-clicking-the-button-in-javascript/