var numberRow = ''
var fullNameText
var addressText

function insertTable() {
    if (numberRow != '') {
        return null
    }
    numberRow = document.getElementById('dataTable').rows.length
    fullNameText = document.getElementById('fullName').value
    addressText = document.getElementById('address').value

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

function editTable(editRow) {
    numberRow = editRow
    fullNameText = document.getElementById('dataTable').rows[numberRow].cells[1].innerHTML
    addressText = document.getElementById('dataTable').rows[numberRow].cells[2].innerHTML

    document.getElementById('dataTable').rows[numberRow].cells[1].innerHTML = `
    <input id='fullNameInTable${numberRow}' type="text" placeholder="กรุณากรอกชื่อ นามสกุล">`

    document.getElementById('dataTable').rows[numberRow].cells[2].innerHTML = `
    <textarea id="addressInTable${numberRow}" placeholder="บ้านเลขที่&#10;ถนน&#10;ตำบล&#10;อำเภอ จังหวัด"></textarea>`

    document.getElementById('dataTable').rows[numberRow].cells[3].innerHTML = `
    <span onClick='updateTable()'>Save&nbsp;&nbsp;</span>
    <span onClick='cancel()'>&nbsp;&nbsp;Cancel</span>`

    // document.getElementById('fullName').value = fullNameText
    // document.getElementById('address').value = addressText
    document.getElementById(`fullNameInTable${numberRow}`).value = fullNameText
    document.getElementById(`addressInTable${numberRow}`).value = addressText
}

function updateTable() {
    if (numberRow == '') {
        return null
    }

    fullNameText = document.getElementById(`fullNameInTable${numberRow}`).value
    addressText = document.getElementById(`addressInTable${numberRow}`).value

    document.getElementById('dataTable').rows[numberRow].cells[1].innerHTML = fullNameText
    document.getElementById('dataTable').rows[numberRow].cells[2].innerHTML = addressText

    clearForm()
}

function cancel() {
    document.getElementById('dataTable').rows[numberRow].cells[1].innerHTML = `
    `

    document.getElementById('dataTable').rows[numberRow].cells[2].innerHTML = `
    <textarea id="addressInTable" placeholder="บ้านเลขที่&#10;ถนน&#10;ตำบล&#10;อำเภอ จังหวัด"></textarea>`

    document.getElementById('dataTable').rows[numberRow].cells[3].innerHTML = `
    <span onClick='editTable("${numberRow}")'>Edit</span>`
}