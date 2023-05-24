
const frontImage = document.getElementById('frontImage');
const backImage = document.getElementById('backImage');


const showFrontBtn = document.getElementById('showFrontBtn');
const showBackBtn = document.getElementById('showBackBtn');


showFrontBtn.addEventListener('click', showFrontImage);
showBackBtn.addEventListener('click', showBackImage);


function showFrontImage() {
  frontImage.style.display = 'block';
  backImage.style.display = 'none';
}


function showBackImage() {
  frontImage.style.display = 'none';
  backImage.style.display = 'block';
}

showFrontImage();
