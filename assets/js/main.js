// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.8,
  spaceBetween: 18
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,

});

// 레이어팝업
function layerPopup() {
  // document.getElementById("layer__wrap").style.display="block";
  document.getElementById("layer__wrap").style.position="absolute";
  document.getElementById("layer__wrap").style.top="44px";
  document.getElementById("layer__wrap").style.opacity="1";
  document.getElementById("layer__wrap").style.zIndex="0"
  document.getElementById("layer__wrap").style.transition="all 2s ease .3s";
}
function close() {
  // document.getElementById("layer__wrap").style.display="none";
  document.getElementById("layer__wrap").style.opacity="0";
  document.getElementById("layer__wrap").style.zIndex="-1";
}

// width고정
// var wWidth = window.innerWidth
// var wHeight = document.querySelector("#wrap")

// function setH () {
//   if(wWidth <= 375) {
//     wHeight.style.maxHeight = "100vh"
//     wHeight.style.overflow = "hidden"
//   } else {
//     wHeight.style.height = "100%"
//     wHeight.style.overflow = "none"
//   }
// }
// setH()

var body = document.getElementsByTagName("body")[0]

window.onresize = function(event){
  var innerWidth = window.innerWidth;
  innerWidth <= "375" ? body.style.maxHeight = "100vh" : body.style.maxHeight = "100%";
  innerWidth <= "375" ? body.style.overflow = "hidden" : body.style.overflow = "visible"
}