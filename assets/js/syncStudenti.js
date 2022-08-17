/**
 * Sync data html with graphs
 */
let promossi = myChartStudenti.data.datasets[0].data[0];
let rimandati = myChartStudenti.data.datasets[0].data[1];

let numStudentiPromossi = $("#numPromossi");
numStudentiPromossi.text(promossi);

let numStudentiRimandati = $("#numRimandati");
numStudentiRimandati.text(rimandati);


let request = {
    "url": "/api/getCountEsame",
    "method": "GET",
}

$.ajax(request).done(function (response) {
    $("#counter").text(response[0].res);
    document.querySelector(".nPrenotati").textContent = response[0].res;
});


$(document).ready(function () {
    $("#counter").counterUp({
        delay: 10,
        time: 1000
    })
});
