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

var pie1e = document.getElementById("pie1");
var bar1 = new Chart(pie1e, {
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
       text: "Overall Severity Levels"
     },
     responsive: false,
   }
});
