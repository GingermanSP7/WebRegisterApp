// var numeroStudentiPrenotati = 0;
// const btn_submit = document.getElementById("submitData").addEventListener("click",()=>{
//     Papa.parse(document.getElementById("uploadCSV").files[0],
//     {
//         download: true,
//         header:true,
//         skipEmptyLines: true,
//         complete: function(results){
//             console.log(results);
//             numeroStudentiPrenotati = results.data.length;

//             //DEVE FARE UNA CHIAMATA POST PER INSERIRE L'APPELLO NEL DB E DOPO FARLO COMPARIRE NELLA LISTA DEGLI APPELLI CREATI
//         }
//     })
// });

// $("#formAddAppello").submit(function(event){
//     alert("Appello Inserito con successo!")
// });

$(".updateAppello").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    console.log("ARRAY: ",unindexed_array);
    var data = {};

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    });

    console.log("DATA TO UPDATE: ",data);

    var request = {
        "url" : `http://localhost:3000/visualizzaAppelli/api/updateAppello/${data.idAppello}`,
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
            "url" : `http://localhost:3000/visualizzaAppelli/api/deleteAppello/${id}`,
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