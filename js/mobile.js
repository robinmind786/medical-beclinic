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


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.boxShadow = "0 8px 16px 0 rgba(0, 0, 0, .3)";
    document.getElementById("navbar").style.background = "var(--main-color)";
  } else {
    document.getElementById("navbar").style.position = null;
    document.getElementById("navbar").style.background = null;
  }
}
