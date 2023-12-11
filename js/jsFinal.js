var slider = document.getElementById("myRange");
var digitImages = document.getElementById("digitImages");
var popup = document.getElementById("popup");
var popupText = document.getElementById("popupText");

// default slider value
updateDigitImages(slider.value);

// Updates each time you drag the slider 
slider.oninput = function() {

  updateDigitImages(this.value);

}

function updateDigitImages(value) {

    var stringValue = String(value).padStart(10, '0').slice(0, 10);
  
    digitImages.innerHTML = '';
    var digits = stringValue.split('');
  

    digits.forEach(function(digit) {
      var img = document.createElement('img');
      img.src = 'imgs/img' + digit + '.png'; //imgs folder imgs#+.png to create img9.png as src for images 
      digitImages.appendChild(img);
    });
  }


function submitPhoneNumber() {


  var phoneNumber = slider.value.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  popupText.innerHTML = phoneNumber + ". Is this your phone number?";
  popup.style.display = "block";
}


function resetSlider() {


  slider.value = 0;


  updateDigitImages(0);
  closePopup();
}


function closePopup() {
  popup.style.display = "none";
}


