/**
 * Sync data html with graphs
 */


let request = {
    "url": "/api/getCountEsame",
    "method": "GET",
}


$.ajax(request).done(function (response) {
    $("#counter").text(response[0].res);
    if(response[0].res){
        $(".nPrenotati").textContent = response[0].res;
    }
});



$(document).ready(function () {
    $("#counter").counterUp({
        delay: 10,
        time: 1000
    })
});
