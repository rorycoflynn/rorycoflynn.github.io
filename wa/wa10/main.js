// Step 1 - Functions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random]}

// Step 2 - Raw text strings
var storyText = `It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.`;
//step 2.5 - Change the story strings
var insertX = ['Pete The Cat', 'Jazzy The Dog', 'Michael the angelfish'];
var insertY = ['kansas city', 'aquarium', 'UMC']; //locations
var insertZ = ['curled up and slept on the floor, ignoring everyone else', 'rolled up like a roly poly and tumbled away', 'exploded into a pile of feathers and smoke']; //exits

// Step 3 - Partial function and listener

randomize.addEventListener('click', result);

function result() {
//insert one of the random strings 
  let newStory = storyText;

  var xItem = randomValueFromArray(insertX); 
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

//replace the text with input names f string style ##
//NOTE I LOOKED SOMETHING UP HERE: 
//was having an issue where .replace only replaces the first instance 
//of :insertX: in the story string. So I instead looked up that issue 
// and made insertX a 'g' flagged variable. 
//https://www.w3schools.com/jsref/jsref_replace.asp

  newStory = newStory.replace(/:insertX:/g, xItem);
  newStory = newStory.replace(':insertY:', yItem);
  newStory = newStory.replace(':insertZ:', zItem);

  //if the name is blank then its bob
  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);}

  //convert to UK values if uk box checked
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.071429);
    var temperature =  Math.round((94 - 32) * 5/9); 

    newStory = newStory.replace('300 pounds', weight + ' stone').replace('94 fahrenheit', temperature + ' centigrade');}

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
