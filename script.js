// SLIDING IMAGES

const slideImages = document.querySelectorAll('.slideimages');
const slideDot = document.querySelectorAll('.dot');
let slideIndex = 0;

initializeSlider();

function initializeSlider() {
  if (slideImages.length > 0) {
    slideImages[slideIndex].classList.add('active');
  } 
  if (slideDot.length > 0) {
    slideDot[slideIndex].classList.add('dot-active');
  } 
}

function showSlide(index) {
  if(index >= slideImages.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slideImages.length -1;
  }

  slideImages.forEach(slide => {
    slide.classList.remove('active');
  })
  slideImages[slideIndex].classList.add('active');

  slideDot.forEach(dot => {
    dot.classList.remove('dot-active');
  })
  slideDot[slideIndex].classList.add('dot-active');
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}


// SHOW BUTTON DELIVERY-TAKEAWAY CONTENT
const deliveryBtnContainer = document.querySelector('.delivery-button');
const takeAwayBtnContainer = document.querySelector('.takeaway-button');
const paperContainer = document.querySelector('.paper-container');
const paperDelivery = document.querySelector('.text-paper-container-delivery');
const paperTakeAway = document.querySelector('.text-paper-container-takeaway');
const choiceButton = document.querySelectorAll('.choice-button');

const delivery = 'delivery';
const takeaway = 'takeaway';

function showPaper(action) {
  if (action === 'delivery') {
    takeAwayBtnContainer.classList.remove('takeaway-transitioned');
    deliveryBtnContainer.classList.remove('delivery-disappearence');
    paperContainer.classList.remove('display-container');
    paperDelivery.classList.remove('noshow-delivery');
    deliveryBtnContainer.classList.toggle('delivery-transitioned');
    takeAwayBtnContainer.classList.toggle('takeaway-disappearence');
    paperContainer.classList.toggle('display-container');
    paperTakeAway.classList.toggle('noshow-takeaway');  
    if (!deliveryBtnContainer.classList.contains('delivery-transitioned')) {
      takeAwayBtnContainer.classList.remove('takeaway-disappearence');
      paperContainer.classList.remove('display-container');
      paperDelivery.classList.remove('noshow-delivery');
    }
  } else {
    deliveryBtnContainer.classList.remove('delivery-transitioned');
    takeAwayBtnContainer.classList.remove('takeaway-disappearence');
    paperContainer.classList.remove('display-container');
    paperTakeAway.classList.remove('noshow-takeaway');
    takeAwayBtnContainer.classList.toggle('takeaway-transitioned');
    deliveryBtnContainer.classList.toggle('delivery-disappearence');
    paperContainer.classList.toggle('display-container');
    paperDelivery.classList.toggle('noshow-delivery');
    if (!takeAwayBtnContainer.classList.contains('takeaway-transitioned')) {
      deliveryBtnContainer.classList.remove('delivery-disappearence');
      paperContainer.classList.remove('display-container');
      paperTakeAway.classList.remove('noshow-takeaway');
    }
  }
}

const closeButton = document.querySelector('.close-paper-button');

function closePaper() {
  if (!deliveryBtnContainer.classList.contains('delivery-transitioned')) {
    deliveryBtnContainer.classList.remove('delivery-transitioned');
    takeAwayBtnContainer.classList.remove('takeaway-transitioned');
    deliveryBtnContainer.classList.remove('delivery-disappearence');
    takeAwayBtnContainer.classList.remove('takeaway-disappearence');
    paperContainer.classList.remove('display-container');
    paperDelivery.classList.remove('noshow-delivery');
    paperTakeAway.classList.remove('noshow-takeaway');
  } else if (!takeAwayBtnContainer.classList.contains('takeaway-transitioned')) {
    deliveryBtnContainer.classList.remove('delivery-transitioned');
    takeAwayBtnContainer.classList.remove('takeaway-transitioned');
    deliveryBtnContainer.classList.remove('delivery-disappearence');
    takeAwayBtnContainer.classList.remove('takeaway-disappearence');
    paperContainer.classList.remove('display-container');
    paperDelivery.classList.remove('noshow-delivery');
    paperTakeAway.classList.remove('noshow-takeaway');
  }
}