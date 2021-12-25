
// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.8,
  spaceBetween: 18
})
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 48
})

// 레이어팝업
const layerWrap = document.getElementById("layer__wrap")
const homeBtn = document.getElementById("home")


function layerPopup() {
  layerWrap.style.position="absolute"
  layerWrap.style.top="44px"
  layerWrap.style.opacity="1"
  layerWrap.style.zIndex="2"
  layerWrap.style.transition="all 2s ease .3s"
  homeBtn.classList.remove('on')
}
// 닫기버튼
function close() {
  layerWrap.style.opacity="0"
  layerWrap.style.zIndex="-1"
  homeBtn.className += ' on'
}



// recent history scroll area

const windowY = window.outerHeight
const tabBarY = document.querySelector('.tab-bar').clientHeight
const accountTitleY = document.querySelector('.account__title').clientHeight
const accountHistory = document.querySelector('.account__history')
const accountHistoryTop = accountHistory.offsetTop
const accountHistoryY =  windowY - accountHistoryTop // 디바이스에 따른 account__history 기본 높이값
const historyRecent = document.querySelector('.history__recent')
const historyRecentTop = historyRecent.offsetTop
const historyRecentY = accountHistoryY - historyRecentTop // 디바이스에 따른 history__recent 기본 높이값
historyRecent.style.height = `${historyRecentY + (tabBarY * 2 )}px`
console.log(accountHistoryY) // 가끔 8px이 더해지는 문제 있음 (why?)


// touch drag
const dragup = document.querySelector('.dragup')

let isUp = false
let touchInfo = {
  startY: 0,
  startTime: 0,
  moveY: 0,
  translateY: 0,
  scrollY: historyRecentY
}

function initTouchInfo() {
  touchInfo.startY = 0
  touchInfo.startTime = 0
  touchInfo.moveY = 0
  touchInfo.translateY = accountHistory.style.transform.slice(11,-3)
  touchInfo.translateY = parseInt(touchInfo.translateY)
  touchInfo.scrollY = historyRecentY
}

// drag up

function dragupStart(e){
  initTouchInfo()
  touchInfo.startY = e.changedTouches[0].clientY 
  touchInfo.startTime = e.timeStamp
  isUp = true
  touchInfo.scrollY = windowY - tabBarY - accountTitleY
  historyRecent.style.height = `${touchInfo.scrollY}px`
}

function dragupMove(e){
  if(!isUp) return
  let nowY = e.changedTouches[0].clientY
  touchInfo.moveY = touchInfo.startY - nowY
  accountHistory.style.transform = `translateY(${ touchInfo.translateY + (-1 * touchInfo.moveY)}px)`
}

function dragupEnd(e){
  isUp = false
  if (touchInfo.moveY > 25 || -25 < touchInfo.moveY < 0){
    accountHistory.style.transform = `translateY(-251px)`
    historyRecent.style.height = `${touchInfo.scrollY - historyRecentTop}px`
    console.log(historyRecentTop)
  }else if (touchInfo.moveY < -25 || 0 < touchInfo.moveY < 25){
    accountHistory.style.transform = `translateY(0)`
    initTouchInfo()
    historyRecent.style.height = `${historyRecentY + (tabBarY * 2 )}px`
  }
  accountHistory.style.transition = '.4s'
}

dragup.addEventListener('touchstart', dragupStart)
dragup.addEventListener('touchmove', dragupMove)
dragup.addEventListener('touchend', dragupEnd)

// height 고정
var body = document.getElementsByTagName("body")[0]

window.onresize = function(event){
  var innerWidth = window.innerWidth
  innerWidth < "430" ? body.style.maxHeight = "100vh" : body.style.maxHeight = `100%`
  innerWidth < "430" ? body.style.overflow = "hidden" : body.style.overflow = "visible"
}

// 계좌명 및 프로필 바꾸기
const accountName = document.getElementById('subtit')
const profilePic = document.querySelector('.profile img')
const accountNum = document.querySelectorAll('.account__number')
const myAsset = document.querySelectorAll('.asset')
const savingRate = document.querySelectorAll('.saving__box .rate')
const savingBoxName = document.querySelectorAll('.saving__info strong')
const savingBoxMoney = document.querySelectorAll('.saving__info span')

function AccountInfo(name, pic, accountNum) {
  this.accountName = name
  this.profilePic = pic
  this.accountNum = accountNum  
}

AccountInfo.prototype.getAccountIfo = function(){
  accountName.innerHTML = this.accountName
  profilePic.src = this.profilePic
}
const expenses = new AccountInfo ('생활비', "./images/expenses.png")
const son = new AccountInfo('의민이 용돈', "./images/son.png")
const grandma = new AccountInfo('할머니 계좌', "./images/grandma.png")

swiper.on('transitionEnd', function(){
  
  if (swiper.realIndex == 0) {
    expenses.getAccountIfo()
    savingRate[0].style.backgroundColor = '#FF5F00'
    savingRate[1].style.backgroundColor = '#FEB700'
    savingBoxName[0].innerHTML = '여행가자!'
    savingBoxName[1].innerHTML = '냉장고사기'
    savingBoxMoney[0].innerHTML = '842,000원'
    savingBoxMoney[1].innerHTML = '122,200원'
  } else if (swiper.realIndex == 1) {
    son.getAccountIfo()
    savingRate[0].style.backgroundColor = '#55ACEE'
    savingRate[1].style.backgroundColor = '#005F59'
    savingBoxName[0].innerHTML = '게임기^^'
    savingBoxName[1].innerHTML = '기부실천!'
    savingBoxMoney[0].innerHTML = '142,200원'
    savingBoxMoney[1].innerHTML = '82,200원'
  } else {
    grandma.getAccountIfo()
    savingRate[0].style.backgroundColor = '#0A73C3'
    savingRate[1].style.backgroundColor = '#EEBA00'
    savingBoxName[0].innerHTML = '딸 냉장고'
    savingBoxName[1].innerHTML = '아들 컴퓨터'
    savingBoxMoney[0].innerHTML = '545,200원'
    savingBoxMoney[1].innerHTML = '432,000원'
  }
})
