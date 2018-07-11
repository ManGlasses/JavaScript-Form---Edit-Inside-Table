var editRow = ''

function insertTable() {
    if (editRow != '') {
        return null
    }

    var rowLength = document.getElementById('dataTable').rows.length
    var fullNameValue = document.getElementById('txtFullName').value
    var addressValue = document.getElementById('txtAddress').value

    document.getElementById('dataTable').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${rowLength}</td>
            <td>${fullNameValue}</td>
            <td>${addressValue}</td>
            <td>
                <span onClick='editTable("${rowLength}")'>Edit</span>
            </td>
        </tr>
    `)

    // ระยะห่างของตารางกับ คู่มือการแก่ไข
    var row3MarginTop = document.getElementById('row3').style.marginTop.replace(/%/, '')
    if (row3MarginTop > 6) {
        document.getElementById('row3').style.marginTop = `${row3MarginTop - 3.27}%`;
    }

    clearForm()
}

function editTable(numberRow) {
    var fullNameValue = document.getElementById('dataTable').rows[numberRow].cells[1].innerHTML
    var addressValue = document.getElementById('dataTable').rows[numberRow].cells[2].innerHTML

    document.getElementById('txtFullName').value = fullNameValue
    document.getElementById('txtAddress').value = addressValue

    editRow = numberRow
}

function updateTable() {
    if (editRow == '') {
        return null
    }

    var fullNameValue = document.getElementById('txtFullName').value
    var addressValue = document.getElementById('txtAddress').value

    document.getElementById('dataTable').rows[editRow].cells[1].innerHTML = fullNameValue
    document.getElementById('dataTable').rows[editRow].cells[2].innerHTML = addressValue

    clearForm()

    editRow = ''
}
