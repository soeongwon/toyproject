
const ctx = document.getElementById("myChart").getContext("2d");
const ctx2 = document.getElementById("dChart").getContext("2d");


const options = {
  plugins: {
    legend: {
      display: false
    }
  },

}
const barChar = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "02",
      "04",
      "06",
      "08",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22"
    ],
    datasets: [
      {
        label:'',
        data: [
          20000,
          40000,
          20000,
          40000,
          60000,
          80000,
          60000,
          80000,
          100000,
          80000,
          100000,

        ],
        backgroundColor: '#38C976',
        borderRadius: '4',
        maxBarThickness: 5,
      }
      
    ],

  },
  options: options

});

const options2 = {
  cutout: "80%"
}

const donutChar = new Chart(ctx2,{
  type: 'doughnut',
  options: options2,
  data: {
    datasets: [{
      data: [20, 50, 30],
      backgroundColor: [
        '#BD5B00',
        '#0057BD',
        '#c4c4c4',
      ],
      borderWidth: 0,
      borderRadius: '4',
      }
    ],
    
  },
  

});