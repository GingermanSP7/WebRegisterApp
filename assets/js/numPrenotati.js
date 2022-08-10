let prenotati = document.querySelector(".nPrenotati");

var request = {
    "url" : `/api/getCountEsame`,
    "method": "GET",
}

$.ajax(request).done(function(response){
    prenotati.textContent = response[0].res;
})