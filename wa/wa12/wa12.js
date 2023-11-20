const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const tweetBtn = document.querySelector('#js-tweet').addEventListener('click', displayAuthor)


const questionTxt = document.querySelector('#js-quote-text');
let authorTxt = document.querySelector('#js-answer-text');

const endpoint = 'https://api.quotable.io/random';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        const quote = json.content;
        currentAuthor = json.author;
        displayQuote(quote);
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
    // Clear the author text when a new quote is fetched so it never mismatches
    authorTxt.textContent = "";
}

function displayQuote(quote, author) {
    const quoteText = `"${quote}"`;
    questionTxt.textContent = quoteText;
}

function displayAuthor() {
    // Use the stored author information
    const authorText = `"${currentAuthor}"`;
    authorTxt.textContent = authorText;
}

// file names 
const catImages = ['catimg.jpeg', 'catimg1.jpeg', 'catimg2.jpeg', 'catimg3.jpeg', 'catimg4.jpeg', 'catimg5.jpeg', 'catimg6.jpeg', 'catimg7.jpeg', 'catimg8.jpeg', 'catimg9.jpeg', 'catimg10.jpeg'];

//html element 
const catImg = document.querySelector('.catBox img');


//create a listener containing the function right there for easy peasy 

let currentImageIndex = 0;
document.querySelector('#js-new-quote').addEventListener('click', function() {
    // Update the src attribute of the image with the next image in the array
    catImg.src = catImages[currentImageIndex];
    // Increment the current image index, and loop back to the beginning once all are done
    currentImageIndex = (currentImageIndex + 1) % catImages.length;
  });

getQuote();  // Fetch a quote when the page loads
