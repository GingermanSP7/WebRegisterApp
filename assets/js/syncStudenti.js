/**
 * Sync data html with graphs
 */

if(document.readyState == "loading"){ 
    counterEsaminati();
    counterRegistrati();
    $(document).ready(function () {
        $("#counterEsaminati").counterUp({
            delay: 10,
            time: 1000
        })

        $("#counterStudente").counterUp({
            delay: 10,
            time: 1000
        })
    });
}

function counterEsaminati(){
    let request1 = {
        "url": "/api/getCountEsame",
        "method": "GET",
    }
    
    $.ajax(request1).done(function (response) {
        $("#counterEsaminati").text(response[0].res);
    });
}


function counterRegistrati(){
    let request2 = {
        "url": "/getCountStudente",
        "method": "GET",
    }

    $.ajax(request2).done(function (response) {
        $("#counterStudente").text(response[0].res);
    });
}




