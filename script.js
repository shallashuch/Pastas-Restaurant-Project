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
const paperDeliveryContainer = document.querySelector('.paper-left-container');
const paperTakeAwayContainer = document.querySelector('.paper-right-container');

function deliverySlide() {
  takeAwayBtnContainer.classList.remove('takeaway-transitioned');
  deliveryBtnContainer.classList.remove('delivery-disappearence');
  paperTakeAwayContainer.classList.remove('display-container-takeaway');

  deliveryBtnContainer.classList.toggle('delivery-transitioned');
  takeAwayBtnContainer.classList.toggle('takeaway-disappearence');
  paperDeliveryContainer.classList.toggle('display-container');
}

function takeAwaySlide() {
  deliveryBtnContainer.classList.remove('delivery-transitioned');
  takeAwayBtnContainer.classList.remove('takeaway-disappearence');
  paperDeliveryContainer.classList.remove('display-container');

  takeAwayBtnContainer.classList.toggle('takeaway-transitioned');
  deliveryBtnContainer.classList.toggle('delivery-disappearence');
  paperTakeAwayContainer.classList.toggle('display-container-takeaway');
}