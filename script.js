// SCROLLING NAVBAR

window.addEventListener('scroll', function() {
  const threshold = 50;
  const elementsToToggle = [
    { element: document.querySelector('.navbar-collapse'), className: 'activescroll' },
    { element: document.getElementById('logoPastas'), className: 'activescroll-logo' },
    { element: document.querySelector('.reservation-button'), className: 'activescroll-btn' },
    { element: document.querySelector('.navbar-toggler'), className: 'activescroll-hamburger' }
  ];

  elementsToToggle.forEach(({ element, className }) => {
    element.classList.toggle(className, window.scrollY > threshold);
  });
});


// MODALS

const modal = document.getElementById('reservationModal')

function toggleModal() {
  modal.classList.toggle('hidden-modal');
  modal.classList.toggle('display-modal');
  document.body.classList.toggle('modal-open');
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
 
function currentSlide(index) {
  slideIndex = index - 1;
  showSlide(slideIndex);
}

// SHOW BUTTON DELIVERY-TAKEAWAY CONTENT -HOMEPAGE
const containerBtn = document.getElementById('container-initial-button');
const deliveryBtnContainer = document.querySelector('.delivery-button');
const takeAwayBtnContainer = document.querySelector('.takeaway-button');
const paperDelivery = document.getElementById('delivery-container');
const paperTakeAway = document.getElementById('takeaway-container');
const choiceButton = document.querySelectorAll('.choice-button');

const delivery = 'delivery';
const takeaway = 'takeaway';

function showPaper(action) {

  if (action === 'delivery') {
    if (paperDelivery.classList.contains('display-container')) {
      paperDelivery.classList.remove('display-container');
      containerBtn.classList.remove('initialbtn-nodisplay');
    } else {
      paperDelivery.classList.add('display-container');
      containerBtn.classList.add('initialbtn-nodisplay');
    }
    paperTakeAway.classList.remove('display-container');
  } else if (action === 'takeaway'){
    if (paperTakeAway.classList.contains('display-container')) {
      paperTakeAway.classList.remove('display-container');
      containerBtn.classList.remove('initialbtn-nodisplay');
    } else {
      paperTakeAway.classList.add('display-container');
      containerBtn.classList.add('initialbtn-nodisplay');
    }
    paperDelivery.classList.remove('display-container');
  }
}

const closeButton = document.querySelector('.close-paper-button');

function closePaper() {
  paperDelivery.classList.remove('display-container');
  paperTakeAway.classList.remove('display-container');
  containerBtn.classList.remove('initialbtn-nodisplay');
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
