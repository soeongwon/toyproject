
const recentURL = 'https://soeongwon.github.io/toyproject/generated.json'

const recentRequest = new XMLHttpRequest();

recentRequest.open('GET', recentURL);

recentRequest.responseType = 'json';
recentRequest.send();

recentRequest.onload = function (){
  const bank = recentRequest.response
  const List = bank.bankList
  showToday(List)

  
  function showToday () {
    
    function groupDates (objectArray, property) {
      return objectArray.reduce(function(acc, obj) {
        const key = obj[property]
        if(!acc[key]) {
          acc[key] = []
        }
        acc[key].push(obj)
        return acc
      }, {})
    }
    const groupedDate = groupDates(List, 'date')
    

    const count = Object.keys(groupedDate)
    

    for (let i = 0; i < count.length; i++) {
      const historyRecent = document.querySelector('.history__recent')
      const day = document.createElement('div')
      const recent = document.createElement('div')
      const dates = document.createElement('strong')
      const recentSum = document.createElement('span')
      const historyTotal = document.createElement('ul')
      
     const today = groupedDate[count[i]]
    
     const priceArr = today.map((x)=>{
       if(x.income === "out") {
        return x.price 
       } else {
         return null
       }
     })

     console.log(priceArr)
     const priceSum = priceArr.reduce(function add(sum, currValue){
      return sum + currValue
     }, 0)
      
      
      for (let j = 0; j < today.length; j++) {
        const todayHistory = today[j].history
        const todayPrice = today[j].price.toLocaleString()
        const history = document.createElement('li')
        const priceLine = document.createElement('span')
        history.textContent = todayHistory
        historyTotal.appendChild(history)
        history.appendChild(priceLine)
        priceLine.textContent = todayPrice
        
        
        if (today[j].income === "in") {
          
          const incomPrice = history.querySelector('span').className = "income"
          console.log(incomPrice)
          
        }
        
        

        
      }

      historyRecent.appendChild(day).className = "day"
      day.appendChild(recent).className = "recent-sum"
      recent.appendChild(dates)
      recent.appendChild(recentSum)
      day.appendChild(historyTotal)
   
      dates.textContent =  count[i]
      recentSum.textContent = priceSum.toLocaleString() + "원 지출"

     
    }
    

    
  }
  
}


