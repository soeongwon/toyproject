
const myChartOne = document.getElementById("myChart").getContext("2d");
const myChartTwo = document.getElementById("dChart").getContext("2d");

const barChar = new Chart(myChartOne, {
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
        label: '',
        data: [
          20000,
          40000,
          60000,
          80000,
          100000,

        ],
        backgroundColor: '#38C976',
        borderRadius: '4',
        maxBarThickness: 5,
      }
      
    ],

  }
});

const donutChar = new Chart(myChartTwo,{
  type: 'doughnut',
  data: {
    datasets: [{
      data: [30, 40, 40],
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