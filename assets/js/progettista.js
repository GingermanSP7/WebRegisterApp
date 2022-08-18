$("#btn_addProgettista").on("click",function(){
    console.log("ciao");
    $("#c_formAddProgettista").css({"display":"flex"});
    $("#btn_removeFormProg").css({"display":"block"});
});

$("#btn_removeFormProg").on("click",function(){
    console.log("ciao222");
    $("#c_formAddProgettista").css({"display":"none"});
    $("#btn_removeFormProg").css({"display":"none"});
});

$("#formAddProgettista").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    });

    console.log("DATA TO UPDATE: ",data);

    var request = {
        "url" : `/creaProgettista`,
        "method": "POST",
        "data": data
    }

    $.ajax(request).done(function(){
        alert("Progettista aggiunto con successo!");
        location.reload();
    })
})

$(".updateProgettista").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    });

    console.log("DATA TO UPDATE: ",data);

    var request = {
        "url" : `/updateProgettista/edit?matricola=${data.matricola}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(){
        alert("Progettista aggiornato con successo!");
        location.reload();
    })
})

let ondelete = $("table tbody tr td button a.deleteProg");
ondelete.click(function(){
    var matricola = $(this).attr("data-matricola");

    var request = {
        "url" : `/deleteProgettista?matricola=${matricola}`,
        "method": "DELETE",
    }

    if(confirm("Vuoi davvero eliminare il progetto?")){
        $.ajax(request).done(function(response){
            alert("progetto eliminato con successo!");
            location.reload();
        })
    }
})
