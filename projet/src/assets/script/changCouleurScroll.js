var posInitial = window.pageYOffset;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 10) {
    this.document.getElementById("navbar").style.background = "#000";
  } else {
    this.document.getElementById("navbar").style.background = "#3f51b5";
  }
}

// 
// var departScroll = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (departScroll > currentScrollPos) {
//     this.document.getElementById("navbar").style.background = "#3f51b5";
//   } else {
//     this.document.getElementById("navbar").style.background = "#000";
//   }
//   departScroll = currentScrollPos
// }
