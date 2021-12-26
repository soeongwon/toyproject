const accountURL = 'https://soeongwon.github.io/toyproject/assets/js/accountinfo.json'

const accountInfo = new XMLHttpRequest();

accountInfo.open('GET', accountURL);

accountInfo.responseType = 'json';
accountInfo.send();

accountInfo.onload = function () {
  const account = accountInfo.response
  const accountStatus = account.accountInfo
  const savingBox1 = account.savingBox1
  const savingBox2 = account.savingBox2
  
  showAccount(accountStatus)
  
  
  function showAccount() {
    const accountName = document.getElementById('subtit')
    const profilePic = document.querySelector('.profile img')
    const accountNumber = document.querySelectorAll('.account__number')
    const myAsset = document.querySelectorAll('.asset')
    const savingRate = document.querySelectorAll('.saving__box .rate')
    const savingBoxName = document.querySelectorAll('.saving__info strong')
    const savingBoxMoney = document.querySelectorAll('.saving__info span')
    
    swiper.on('transitionEnd', function(){
      const accontIndex = swiper.realIndex
      
  
      for(i = 0; i <= accontIndex; i++) {
           
        accountName.innerHTML = accountStatus[i].name
        profilePic.src = accountStatus[i].pic
        accountNumber[i].innerHTML = accountStatus[i].accountNum
        myAsset[i].innerHTML = accountStatus[i].asset
        savingRate[0].style.backgroundColor = savingBox1[i].rateColor
        savingRate[1].style.backgroundColor = savingBox2[i].rateColor
        savingBoxName[0].innerHTML = savingBox1[i].name
        savingBoxName[1].innerHTML = savingBox2[i].name
        savingBoxMoney[0].innerHTML =
        savingBox1[i].money
        savingBoxMoney[1].innerHTML =
        savingBox1[2].money
               
        

      }
    }) 
  }
}