const ctx2 = $("#myChartProgettisti");
var myChartProgettisti = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
        datasets: [{
            label: 'Progetti corretti',
            data: [65, 59, 80, 81, 56, 55, 40, 35, 44, 21, 47, 52],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)',
                'rgba(84, 84, 221, 1)',
                'rgba(45, 151, 130, 1)',
                'rgba(209, 151, 130, 1)',
                'rgba(209, 72, 130, 1)',
                'rgba(209, 72, 255, 1)'
            ],
            borderColor: [
                'rgb(255, 0, 51)',
                'rgb(255, 128, 0)',
                'rgb(255, 200, 0)',
                'rgb(75, 239, 239)',
                '#006BB2',
                '#553891',
                '#78787A'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales:{

          x:{
            ticks:{
                color:"white"
            },
            grid:{
                borderColor: "rgba(255, 255, 255, 0.3)",
                color:"rgba(255, 255, 255, 0.3)"
            }
          },

          y:{
            ticks:{
                color:"white"
            },
            grid:{
                borderColor:"rgba(255, 255, 255, 0.3)",
                color:"rgba(255, 255, 255, 0.3)"
            }
          }  
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14
                    },
                    color: "white"
                }
            }
        }
    },
});


