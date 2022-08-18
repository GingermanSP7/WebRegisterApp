// al click del tasto invia, il client invia al server i nomi dei file csv
function sendFile(){    
    let file1 = document.querySelector("#fileCSV").value.split("\\");
    let file2 = document.querySelector("#file2").value.split("\\");

    let names = [];
    names.push(file1[file1.length-1],file2[file2.length-1]);

    $.ajax({
        type: "POST",
        url: "/uploadFile",
        data: { nomeFile: names},
        dataType: "json",
        success: function(){
            console.log("OK");
        }
    })
}