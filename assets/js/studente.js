let input = document.querySelector("#searchStudentByMatricola");
let btnSearch = document.querySelector(".btnSearch");

input.addEventListener("input", () => {
    let td,txtValue;

    let table = document.getElementById("tableStudenti")
    let tr = table.rows;

    for(let i=1;i<tr.length;i++){       
        td = tr[i].children[0];
        if(td){
            txtValue = td.textContent
            if(txtValue.indexOf(input.value)>-1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }
})