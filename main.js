// HAMBURGER MENU
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
//AND ADDED EVENT LISTENER TO MAKE MENU CLOSE ON LINK CLICK
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  x.addEventListener("click", function () {
    x.style.display = "none";
  });
}

// Get the HAMBURGER?? modal
var modalparent = document.getElementsByClassName("modal_multi");
// Get the button that opens the modal
var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");
// When the user clicks the button, open the modal
function setDataIndex() {
  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].setAttribute("data-index", i);
    modalparent[i].setAttribute("data-index", i);
    span_close_multi[i].setAttribute("data-index", i);
  }
}
for (i = 0; i < modal_btn_multi.length; i++) {
  modal_btn_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modalparent[ElementIndex].style.display = "block";
  };
  // When the user clicks on <span> (x), close the modal
  span_close_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modalparent[ElementIndex].style.display = "none";
  };
}
window.onload = function () {
  setDataIndex();
};
window.onclick = function (event) {
  if (event.target === modalparent[event.target.getAttribute("data-index")]) {
    modalparent[event.target.getAttribute("data-index")].style.display = "none";
  }
};


// START SEASON CAROUSEL

let slideIndexSpringTopic = 1;
showSlideSpringTopic(slideIndexSpringTopic);

// Next/previous controls
function plusSlideSpringTopic(m) {
  showSlideSpringTopic((slideIndexSpringTopic += m));
}

// Thumbnail image controls
function currentSlideSpringTopic(m) {
  showSlideSpringTopic((slideIndexSpringTopic = m));
}

function showSlideSpringTopic(m) {
  let j;
  // let slideSpringTopic = document.getElementsByClassName("spring-topic");
    let slideSpringTopic = document.getElementsByClassName("spring-topic");
  // let dotSpringTopic = document.getElementsByClassName("spring-topic");
    let dotSpringTopic = document.getElementsByClassName("dot-spring");
  if (m > slideSpringTopic.length) {
    slideIndexSpringTopic = 1;
  }
  if (m < 1) {
    slideIndexSpringTopic = slideSpringTopic.length;
  }
  for (j = 0; j < slideSpringTopic.length; j++) {
    slideSpringTopic[j].style.display = "none";
  }
  for (j = 0; j < dotSpringTopic.length; j++) {
    dotSpringTopic[j].className = dotSpringTopic[j].className.replace(" active", "");
  }
  slideSpringTopic[slideIndexSpringTopic - 1].style.display = "block";
  dotSpringTopic[slideIndexSpringTopic - 1].className += " active";
}
// END SEASON CAROUSEL

// ---------------

// Get the modal
var modalOne = document.getElementById("modalOne");

// Get the button that opens the modal
var btnOne = document.getElementById("buttonOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-one")[0];

// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  modalOne.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalOne.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(eventOne) {
//   if (eventOne.target == modalOne) {
//     modalOne.style.display = "none";
//   }
// }

// ---------------

// Get the modal
var modalTwo = document.getElementById("modalTwo");

// Get the button that opens the modal
var btnTwo = document.getElementById("buttonTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-two")[0];

// When the user clicks on the button, open the modal
btnTwo.onclick = function() {
  modalTwo.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalTwo.style.display = "none";
};

// ---------------

// Get the modal
var modalThree = document.getElementById("modalThree");

// Get the button that opens the modal
var btnThree = document.getElementById("buttonThree");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-three")[0];

// When the user clicks on the button, open the modal
btnThree.onclick = function() {
  modalThree.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalThree.style.display = "none";
};

// ---------------

// Get the modal
var modalFour = document.getElementById("modalFour");

// Get the button that opens the modal
var btnFour = document.getElementById("buttonFour");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-four")[0];

// When the user clicks on the button, open the modal
btnFour.onclick = function() {
  modalFour.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalFour.style.display = "none";
};

// ---------------

// Get the modal
var modalFive = document.getElementById("modalFive");

// Get the button that opens the modal
var btnFive = document.getElementById("buttonFive");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-five")[0];

// When the user clicks on the button, open the modal
btnFive.onclick = function() {
  modalFive.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalFive.style.display = "none";
};

// ---------------

// PREVIEW MODAL START

// Get the modal
var modalSix = document.getElementById("modalSix");

// Get the button that opens the modal
var btnSix = document.getElementById("buttonSix");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-six")[0];

// When the user clicks on the button, open the modal
btnSix.onclick = function() {
  modalSix.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalSix.style.display = "none";
};

// ---------------

// Get the modal
var modalSeven = document.getElementById("modalSeven");

// Get the button that opens the modal
var btnSeven = document.getElementById("buttonSeven");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-seven")[0];

// When the user clicks on the button, open the modal
btnSeven.onclick = function() {
  modalSeven.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalSeven.style.display = "none";
};

// ---------------

// Get the modal
var modalEight = document.getElementById("modalEight");

// Get the button that opens the modal
var btnEight = document.getElementById("buttonEight");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-eight")[0];

// When the user clicks on the button, open the modal
btnEight.onclick = function() {
  modalEight.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalEight.style.display = "none";
};

// ---------------

// Get the modal
var modalNine = document.getElementById("modalNine");

// Get the button that opens the modal
var btnNine = document.getElementById("buttonNine");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-nine")[0];

// When the user clicks on the button, open the modal
btnNine.onclick = function() {
  modalNine.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalNine.style.display = "none";
};

// ---------------
// PREVIEW MODAL END



// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(eventTwo) {
//   if (eventTwo.target == modalTwo) {
//     modalTwo.style.display = "none";
//   }
// };
// ------------


// Function to close all modals
  // function closeAllModals() {
  //   document.querySelectorAll('.modal').forEach(modal => {
  //     modal.classList.display('none');
  //         modal.classList.style.display('none');
  //   });
  // }

// Listen for clicks anywhere on the window
  // window.addEventListener('click', function(event) {
  //   // If the click is NOT inside a modal-content, close all modals
  //   if (!event.target.closest('.modal')) {
  //     closeAllModals();
  //   }
  // });
