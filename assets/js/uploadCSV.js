const fileInput = document.getElementById("fileCSV");
const submitFile = document.getElementById("sbmtCSV");

let file = null;

fileInput.addEventListener("change", function () {
    file = this.files[0];
    console.log(file);
});

submitFile.addEventListener('click', function () {
    if (!file || file.type !== 'text/csv') {
        alert('Please choose a CSV file')
        return
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('/read', {
        method: 'POST',
        body: formData
    })
        .then((response) => response.json())
        .then(({ data }) => {
            // console.log(data.length);
            if (data.length) {
                const columns = data[0]
                const rows = data.splice(1).map((arr) => {
                    const obj = {}
                    columns.forEach((column, index) => {
                        obj[column] = arr[index]
                    })
                    return obj
                })

                console.log(rows, columns)

                // const table = new Tabulator("#csvTable", {
                //     height: "300px",
                //     data: rows,
                //     autoColumns: true
                // });
            } else {
                alert('The CSV is empty')
            }
        })
        .catch((e) => alert(e.message));
});

