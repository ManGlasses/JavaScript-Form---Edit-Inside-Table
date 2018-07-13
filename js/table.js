function insertTable() {

    let dataTable = document.getElementById('dataTable')
    let txtFullName = document.getElementById('txtFullName')
    let txtAddress = document.getElementById('txtAddress')

    let rowLength = dataTable.rows.length
    let txtFullNameValue = txtFullName.value
    let txtAddressValue = txtAddress.value

    // สร้างแถวใหม่ไปต่อท้ายตาราง
    dataTable.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${rowLength + 1}</td>
            <td>
                <span id='tbFullName${rowLength}'>${txtFullNameValue}</span>
            </td>
            <td>
                <span id='tbAddress${rowLength}'>${txtAddressValue}</span>
            </td>
            <td>
                <span id='btnEdit${rowLength}' onClick='editTable("${rowLength}")'>Edit</span>
            </td>
        </tr>
    `)

    // ระยะห่างของตารางกับ คู่มือการแก่ไข
    let row3MarginTop = document.getElementById('row3').style.marginTop.replace(/%/, '')
    if (row3MarginTop > 2.48) {
        document.getElementById('row3').style.marginTop = `${row3MarginTop - 3.33}%`;
    }

    clearForm()
}

function editTable(numberRow) {

    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)
    let btnEdit = document.getElementById(`btnEdit${numberRow}`)

    let tbFullNameValue = tbFullName.innerHTML
    let tbAddressValue = tbAddress.innerHTML

    valueBeforeEdit._fullName[`${numberRow}`] = tbFullNameValue
    valueBeforeEdit._address[`${numberRow}`] = tbAddressValue

    tbFullName.insertAdjacentHTML('afterend', `
        <input id='edFullName${numberRow}' type='text' placeholder='กรุณากรอกชื่อ นามสกุล' />
    `)
    tbAddress.insertAdjacentHTML('afterend', `
        <input id='edAddress${numberRow}' type='text' placeholder='บ้านเลขที่, ถนน, ตำบล, อำเภอ, จังหวัด' />
    `)
    btnEdit.insertAdjacentHTML('afterend', `
        <span id='btnSave${numberRow}' onClick='checkInput("${numberRow}")'>Save</span>
        <span id='btnCancel${numberRow}' onClick='btnCancel_Click("${numberRow}")'>Cancel</span>
    `)

    tbFullName.innerHTML = ''
    tbAddress.innerHTML = ''
    btnEdit.remove()

    let edFullName = document.getElementById(`edFullName${numberRow}`)
    let edAddress = document.getElementById(`edAddress${numberRow}`)

    edFullName.value = tbFullNameValue
    edAddress.value = tbAddressValue

}

function updateTable(numberRow) {

    let edFullName = document.getElementById(`edFullName${numberRow}`)
    let edAddress = document.getElementById(`edAddress${numberRow}`)
    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)
    let btnSave = document.getElementById(`btnSave${numberRow}`)
    let btnCancel = document.getElementById(`btnCancel${numberRow}`)

    let edFullNameValue = edFullName.value
    let edAddressValue = edAddress.value

    tbFullName.innerHTML = edFullNameValue
    tbAddress.innerHTML = edAddressValue

    btnSave.insertAdjacentHTML('beforebegin', `
        <span id='btnEdit${numberRow}' onClick='editTable("${numberRow}")'>Edit</span>
    `)

    edFullName.remove()
    edAddress.remove()
    btnSave.remove()
    btnCancel.remove()

}

function btnCancel_Click(numberRow) {

    let edFullName = document.getElementById(`edFullName${numberRow}`)
    let edAddress = document.getElementById(`edAddress${numberRow}`)
    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)
    let btnSave = document.getElementById(`btnSave${numberRow}`)
    let btnCancel = document.getElementById(`btnCancel${numberRow}`)

    btnSave.insertAdjacentHTML('beforebegin', `
        <span id='btnEdit${numberRow}' onClick='editTable("${numberRow}")'>Edit</span>
    `)

    tbFullName.innerHTML = valueBeforeEdit._fullName[`${numberRow}`]
    tbAddress.innerHTML = valueBeforeEdit._address[`${numberRow}`]

    edFullName.remove()
    edAddress.remove()
    btnSave.remove()
    btnCancel.remove()
}
