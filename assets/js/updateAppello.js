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
