function insertTable() {

    let dataTable = document.getElementById('dataTable')
    let txtFullName = document.getElementById('txtFullName')
    let txtAddress = document.getElementById('txtAddress')

    let rowLength = dataTable.rows.length
    let txtFullNameValue = txtFullName.value
    let txtAddressValue = txtAddress.value

    // สร้างก่อนจบ
    // เพิ่มแถว
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

    // สร้างหลังจบ
    // สร้างรูปแบบตารางใหม่
    tbFullName.insertAdjacentHTML('afterend', `
        <input id='edFullName${numberRow}' oninput='lengthFullName("${numberRow}");' type='text' placeholder='กรุณากรอกชื่อ นามสกุล' />
        <span id='edCountFullName${numberRow}'></span>
    `)
    tbAddress.insertAdjacentHTML('afterend', `
        <input id='edAddress${numberRow}' oninput='lengthAddress("${numberRow}");' type='text' placeholder='บ้านเลขที่, ถนน, ตำบล, อำเภอ, จังหวัด' />
        <span id='edCountAddress${numberRow}'></span>
    `)
    btnEdit.insertAdjacentHTML('afterend', `
        <span id='btnSave${numberRow}' onClick='checkInput("${numberRow}")'>Save</span>
        <span id='btnCancel${numberRow}' onClick='btnCancel_Click("${numberRow}")'>Cancel</span>
    `)

    // remove รูปแบบตารางเก่า
    tbFullName.innerHTML = ''
    tbAddress.innerHTML = ''
    btnEdit.remove()

    let edFullName = document.getElementById(`edFullName${numberRow}`)
    let edAddress = document.getElementById(`edAddress${numberRow}`)

    // ใส่ค่าให้ input ในตาราง
    edFullName.value = tbFullNameValue
    edAddress.value = tbAddressValue

}

function updateTable(numberRow) {

    let edFullName = document.getElementById(`edFullName${numberRow}`)
    let edAddress = document.getElementById(`edAddress${numberRow}`)
    let edCountFullName = document.getElementById(`edCountFullName${numberRow}`)
    let edCountAddress = document.getElementById(`edCountAddress${numberRow}`)
    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)
    let btnSave = document.getElementById(`btnSave${numberRow}`)
    let btnCancel = document.getElementById(`btnCancel${numberRow}`)

    let edFullNameValue = edFullName.value
    let edAddressValue = edAddress.value

    // เปลี่ยนเป็นรูปแบบตารางเก่า
    // update
    tbFullName.innerHTML = edFullNameValue
    tbAddress.innerHTML = edAddressValue
    btnSave.insertAdjacentHTML('beforebegin', `
        <span id='btnEdit${numberRow}' onClick='editTable("${numberRow}")'>Edit</span>
    `)

    // remove รูปแบบตารางเดิม
    edFullName.remove()
    edAddress.remove()
    edCountFullName.remove()
    edCountAddress.remove()
    btnSave.remove()
    btnCancel.remove()

}

function btnCancel_Click(numberRow) {

    let edFullName = document.getElementById(`edFullName${numberRow}`)
    let edAddress = document.getElementById(`edAddress${numberRow}`)
    let edCountFullName = document.getElementById(`edCountFullName${numberRow}`)
    let edCountAddress = document.getElementById(`edCountAddress${numberRow}`)
    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)
    let btnSave = document.getElementById(`btnSave${numberRow}`)
    let btnCancel = document.getElementById(`btnCancel${numberRow}`)

    // เปลี่ยนเป็นรูปแบบตารางเก่า
    btnSave.insertAdjacentHTML('beforebegin', `
        <span id='btnEdit${numberRow}' onClick='editTable("${numberRow}")'>Edit</span>
    `)

    // reset ค่าเก่าก่อนที่จะแก้ไข
    tbFullName.innerHTML = valueBeforeEdit._fullName[`${numberRow}`]
    tbAddress.innerHTML = valueBeforeEdit._address[`${numberRow}`]

    // remove รูปแบบตารางเดิม
    edFullName.remove()
    edAddress.remove()
    edCountFullName.remove()
    edCountAddress.remove()
    btnSave.remove()
    btnCancel.remove()
}
