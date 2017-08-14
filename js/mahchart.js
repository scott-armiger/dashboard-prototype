//Bar Chart
var bar1e = document.getElementById("bar1");
var bar1 = new Chart(bar1e, {
  type: 'bar',
   data: {
     labels: ["Host1", "Host2", "Host3", "Host4", "Host5", "Host6", "Host7", "Host8"],
     datasets: [{
       label: 'Number of Failing Tests per Host',
       data: [341, 115, 222, 122, 431, 1231, 872, 75],
       backgroundColor: [
         'rgba(112, 212, 79, 0.9)',
         'rgba(51, 51, 51, 0.9)',
         'rgba(110, 208, 78, 0.9)',
         'rgba(34, 34, 34, .9)',
         'rgba(113, 213, 79, 0.9)',
         'rgba(51, 51, 51, 0.9)',
         'rgba(110, 208, 78, 0.9)',
         'rgba(51, 51, 51, 0.9)',
       ]
     }]
   },
   options: {
     legend: {
          display: false,
      },
     scales: {
       xAxes: [{
         gridLines: {
           display: false,
         },
         ticks: {
           fontColor: '#FFFFFF',
         },
       }],
       yAxes: [{
         gridLines: {
           color: 'rgba(255,255,255, .6)',
           display: true,
         },
         ticks: {
           fontColor: '#FFFFFF',
         },
       }]
     },
     responsive: false,
   }
});

//Pie Chart
var pie1e = document.getElementById("pie1");
var pie1 = new Chart(pie1e, {
  type: 'pie',
   data: {
     labels: ["High", "Medium", "low"],
     datasets: [{
       label: 'Overall Severity Levels',
       data: [1705,852,852],
       backgroundColor: [
         'rgba(113, 213, 79, 0.9)',
         'rgba(121, 121, 121, 0.9)',
         'rgba(51, 51, 51, 0.9)',
       ]
     }]
   },
   options: {
     legend: {
       labels: {
        fontColor: "white",
        }
      },
     responsive: false,
   },
});

//Line Chart
var line1e = document.getElementById('line1').getContext('2d');
var line1 = new Chart(line1e, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'passing',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(140, 254, 106, 0.5)",
      borderColor: "rgb(255,255,255)",
    },
  ]
  },
  options: {
    legend: {
         display: false,
     },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: '#FFFFFF',
        },
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(255,255,255, .6)',
          display: true,
        },
        ticks: {
          fontColor: '#FFFFFF',
        },
      }]
    },
    responsive: false,
  }
});

//Polar Chart
var polare = document.getElementById("polar1").getContext('2d');
var polar1 = new Chart(polare, {
  type: 'polarArea',
  data: {
    labels: ["High", "Medium", "Low"],
    datasets: [{
      backgroundColor: [
        'rgba(113, 213, 79, 0.9)',
        'rgba(121, 121, 121, 0.9)',
        'rgba(51, 51, 51, 0.9)',
      ],
      data: [1705,852,852]
    }]
  },
  options: {
    legend: {
      labels: {
       fontColor: "white",
       }
     },
    responsive: false,
  },
});

//Line Chart For Low Severity
var line2e = document.getElementById('line2').getContext('2d');
var line2 = new Chart(line2e, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'passing',
      data: [12, 19, 3, 17, 6, 3, 7],
      borderColor: "rgb(255,255,255)",
      fill:false,
      //backgroundColor: "rgb(65, 244, 92, 0.9)"
    }]
  },
  options: {
      responsive: false,
      legend: {
        display: false
      },
      scales:
      {
          xAxes: [{
              display: false
          }],
          yAxes: [{
              display: false
          }]

      },
  }
});

//Line Chart For Medium Severity
var line3e = document.getElementById('line3').getContext('2d');
var line3 = new Chart(line3e, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'passing',
      data: [7, 18, 8, 12, 4, 2, 7],
      borderColor: "rgb(255,255,255)",
      fill:false,
      //backgroundColor: "rgb(65, 244, 92, 0.9)"
    }]
  },
  options: {
      responsive: false,
      legend: {
        display: false
      },
      scales:
      {
          xAxes: [{
              display: false
          }],
          yAxes: [{
              display: false
          }]

      },
  }
});

//Line Chart For High Severity
var line4e = document.getElementById('line4').getContext('2d');
var line4 = new Chart(line4e, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'passing',
      data: [7, 19, 8, 17, 6, 15, 13],
      borderColor: "rgb(255,255,255)",
      fill:false,
      //backgroundColor: "rgb(65, 244, 92, 0.9)"
    }]
  },
  options: {
      responsive: false,
      legend: {
        display: false
      },
      scales:
      {
          xAxes: [{
              display: false
          }],
          yAxes: [{
              display: false
          }]

      },
  }
});
