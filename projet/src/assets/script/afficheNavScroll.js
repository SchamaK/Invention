var departScroll = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (departScroll > currentScrollPos) {
    this.document.getElementById("navbar").style.top = "0";
    this.document.getElementById("navbar").style.background = "#3f51b5";

  } else {
    this.document.getElementById("navbar").style.top = "-100px";
    this.document.getElementById("navbar").style.background = "#000";

  }
  departScroll = currentScrollPos
}
