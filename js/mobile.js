const openNav = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const closeNav = document.querySelector('.close');

openNav.addEventListener('click', function(){
	navLinks.style.left = "0";
});

closeNav.addEventListener('click', function(){
  navLinks.style.left = '-100%';
});


const hasCollapsible = document.querySelectorAll(".has-collapsible");

hasCollapsible.forEach(function (collapsible) {
  collapsible.addEventListener("click", function () {
    collapsible.classList.toggle("active");

    hasCollapsible.forEach(function (otherCollapsible) {
      if (otherCollapsible !== collapsible) {
        otherCollapsible.classList.remove("active");
      }
    });
  });
});



