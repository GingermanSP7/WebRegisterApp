$("#formAddAppello").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    });

    console.log("DATA TO UPDATE: ",data);

    var request = {
        "url" : `/creaAppello/add`,
        "method": "POST",
        "data": data
    }

    $.ajax(request).done(function(response){
        // alert("Appello creato con successo!");
        if(typeof response !== 'undefined'){
            let msg = document.createElement("p");
            let msgImg = document.createElement("img");
            let divMsg = document.getElementsByClassName("msgFromBackend")[0];

            msgImg.src = "../img/mario24px.png";
            msgImg.style.marginRight = "20px";

            msg.style.textAlign = "center";
            msg.style.color = "#FCB91C";
            msg.style.fontSize = "18px";
            msg.style.alignItems = "center";
            
            msg.textContent = response.msg;
            divMsg.appendChild(msgImg);
            divMsg.appendChild(msg);
        }
    })
})

$(".updateAppello").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    });

    console.log("DATA TO UPDATE: ",data);

    var request = {
        "url" : `/updateAppello/edit/${data.idAppello}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Appello aggiornato con successo!");
    })
})

//DELETE APPELLO
if(window.location.pathname == "/visualizzaAppelli"){
    $ondelete = $("table tbody tr td button a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id");

        var request = {
            "url" : `visualizzaAppelli/api/deleteAppello/${id}`,
            "method": "DELETE",
        }

        if(confirm("Vuoi davvero eliminare l'appello?")){
            $.ajax(request).done(function(response){
                alert("Appello eliminato con successo!");
                location.reload();
            })
        }
    })
}

