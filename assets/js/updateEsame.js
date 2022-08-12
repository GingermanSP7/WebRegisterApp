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

$("#delEsame").on("click",function(event){
    $ondelete = $("table tbody tr td button a.delete");
    $ondelete.click(function(){
        var idAppello = $(this).attr("data-id");
        var matricola = $(this).attr("data-matricola");

        var request = {
            "url" : `/api/deleteEsame?idAppello=${idAppello}&matricola=${matricola}`,
            "method": "DELETE",
        }

        if(confirm("Vuoi davvero eliminare l'esame?")){
            $.ajax(request).done(function(response){
                alert("Esame eliminato con successo!");
                location.reload();
            })
        }
    })
    
})

$("#btn_addEsame").on("click",function(){
    $("#c_formAddEsame").css({"display":"flex"});
    $("#btn_removeForm").css({"display":"block"});
})

$("#btn_removeForm").on("click",function(){
    $("#c_formAddEsame").css({"display":"none"});
    $("#btn_removeForm").css({"display":"none"});
})