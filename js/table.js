var editRow = ''

function insertTable() {
    if (editRow != '') {
        return null
    }
    var numberRow = document.getElementById('dataTable').rows.length
    var fullNameText = document.getElementById('fullName').value
    var addressText = document.getElementById('address').value

    var row3MarginTop = document.getElementById('row3').style.marginTop.replace(/rem/, '')

    document.getElementById('dataTable').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${numberRow}</td>
            <td>${fullNameText}</td>
            <td>${addressText}</td>
            <td>
                <span onClick='editTable("${numberRow}")'>Edit</span>
            </td>
        </tr>
    `)

    if (row3MarginTop > 2) {
        document.getElementById('row3').style.marginTop = `${row3MarginTop - 2.15}rem`;
    }

    clearForm()
}

function editTable(numberRow) {
    var fullNameText = document.getElementById('dataTable').rows[numberRow].cells[1].innerHTML
    var addressText = document.getElementById('dataTable').rows[numberRow].cells[2].innerHTML

    document.getElementById('fullName').value = fullNameText
    document.getElementById('address').value = addressText

    editRow = numberRow
}

function updateTable() {
    if (editRow == '') {
        return null
    }

    var fullNameText = document.getElementById('fullName').value
    var addressText = document.getElementById('address').value

    document.getElementById('dataTable').rows[editRow].cells[1].innerHTML = fullNameText
    document.getElementById('dataTable').rows[editRow].cells[2].innerHTML = addressText

    clearForm()

    editRow = ''
}