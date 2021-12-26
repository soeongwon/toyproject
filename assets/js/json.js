
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
      const historyTotal = document.createElement('ul')
      
     const today = groupedDate[count[i]]
      for (let j = 0; j < today.length; j++) {
        const todayHistory = today[j].history
        const todayPrice = today[j].price.toLocaleString()
        const history = document.createElement('li')
        history.innerHTML = todayHistory + "<span>" + todayPrice + "</span>"
        historyTotal.appendChild(history)
      }

      historyRecent.appendChild(day).className = "day"
      day.appendChild(recent).className = "recent-sum"
      recent.appendChild(dates)
      day.appendChild(historyTotal)
   
      dates.textContent =  count[i]
    }
    

    
  }
  
}


