// MODALS

const modal = document.getElementById('reservationModal')

function renderModal() {
  modal.classList.remove('hidden-modal');
  modal.classList.add('display-modal');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('display-modal');
  modal.classList.add('hidden-modal');
  document.body.classList.remove('modal-open');
}

function thankyouMessage() {
  alert("Thank you for your request :) You'll receive an email soon for the confirmation!")
}

// SLIDING IMAGES -HOMEPAGE

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


// SHOW BUTTON DELIVERY-TAKEAWAY CONTENT -HOMEPAGE
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

// WINE AND FOOD MENU -MENU PAGE

const pastaMenu = document.querySelector('.body-menu-pasta-container');
const wineMenu = document.querySelector('.body-menu-wine-container');

const pasta = 'pasta';
const wine = 'wine';

function showMenu(action) {
  if (action === wine) {
    pastaMenu.classList.remove('display-menu');
    pastaMenu.classList.add('hidden-menu');
    wineMenu.classList.remove('hidden-menu');
    wineMenu.classList.add('display-menu');
  } else {
    wineMenu.classList.remove('display-menu');
    wineMenu.classList.add('hidden-menu');
    pastaMenu.classList.remove('hidden-menu');
    pastaMenu.classList.add('display-menu');
  }
}

// SLIDING REVIEW -OUR STORY PAGE

const slideReview = document.querySelectorAll('.body-review-container');
let reviewIndex = 0;

firstSlide();

function firstSlide() {
  if (slideReview.length > 0) {
    slideReview[reviewIndex].classList.add('active-review');
  }  
}

function showReview(index) {
  if(index >= slideReview.length) {
    reviewIndex = 0;
  } else if (index < 0) {
    reviewIndex = slideReview.length -1;
  }

  slideReview.forEach(review => {
    review.classList.remove('active-review');
  })
  slideReview[reviewIndex].classList.add('active-review');
}

function prevReview() {
  reviewIndex--;
  showReview(reviewIndex);
}

function nextReview() {
  reviewIndex++;
  showReview(reviewIndex);
}
