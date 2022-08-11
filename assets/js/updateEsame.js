$(".updateEsame").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    });

    console.log("DATA TO UPDATE: ",data);

    var request = {
        "url" : `/updateEsame/edit?idAppello=${data.idAppello}&matricola=${data.matricola}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Esame aggiornato con successo!");
    })
})