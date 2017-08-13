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
         'rgba(255, 99, 132, 0.6)',
         'rgba(54, 162, 235, 0.6)',
         'rgba(255, 206, 86, 0.6)',
         'rgba(75, 192, 192, 0.6)',
         'rgba(153, 102, 255, 0.6)',
         'rgba(255, 159, 64, 0.6)',
         'rgba(255, 99, 132, 0.6)',
         'rgba(54, 162, 235, 0.6)',
         'rgba(255, 206, 86, 0.6)',
         'rgba(75, 192, 192, 0.6)',
         'rgba(153, 102, 255, 0.6)'
       ]
     }]
   },
   options: {
     title: {
       display: true,
       text: "Number of Failing Tests per Host"
     },
     responsive: false,
   }
});

//Pie Chart
var pie1e = document.getElementById("pie1");
var pie1 = new Chart(pie1e, {
  type: 'pie',
   data: {
     labels: ["Low", "Medium", "High"],
     datasets: [{
       label: 'Overall Severity Levels',
       data: [1705,852,852],
       backgroundColor: [
         'rgba(255, 99, 132, 0.6)',
         'rgba(54, 162, 235, 0.6)',
         'rgba(255, 206, 86, 0.6)',
       ]
     }]
   },
   options: {
     title: {
       display: true,
       text: "Overall Severity Levels"
     },
     responsive: false,
   }
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
      backgroundColor: "rgb(65, 244, 92, 0.9)"
    }, {
      label: 'Failing',
      data: [20, 20, 20, 20, 20, 20, 20],
      backgroundColor: "rgba(244, 79, 65, 0.8)"
    }]
  },
  options: {
      responsive: false,
      title: {
        display: true,
        text: "Passing Hosts Over Time"
      },
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
        "rgb(244, 79, 65)",
        "#3498db",
        "#95a5a6",
      ],
      data: [1705,852,852]
    }]
  },
  options: {
      responsive: false,
      title: {
        display: true,
        text: "Overall Severity"
      },
  }
});
