const ctx = $("#myChart");
var myChartStudenti = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Promossi', 'Rimandati'],
        datasets: [{
            data: [300, 50],
            backgroundColor: [
                '#33CCCC',
                '#FCB91C'
            ],
            hoverOffset: 3,
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14
                    },
                    color: "white",
                }
            }
        }
    }
});

