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