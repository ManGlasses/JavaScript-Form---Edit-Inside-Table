function changeNewTable(numberRow) {

    // ประกาศเส้นทาง
    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)
    let btnEdit = document.getElementById(`btnEdit${numberRow}`)

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

}

function changeOldTable(numberRow) {

    // ประกาศเส้นทาง
    let edFullName = document.getElementById(`edFullName${numberRow}`)
    let edAddress = document.getElementById(`edAddress${numberRow}`)
    let edCountFullName = document.getElementById(`edCountFullName${numberRow}`)
    let edCountAddress = document.getElementById(`edCountAddress${numberRow}`)
    let btnSave = document.getElementById(`btnSave${numberRow}`)
    let btnCancel = document.getElementById(`btnCancel${numberRow}`)

    // เปลี่ยนเป็นรูปแบบตารางเก่า
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

    // ประกาศเส้นทาง
    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)

    // reset ค่าเก่าก่อนที่จะแก้ไข
    tbFullName.innerHTML = valueBeforeEdit.fullName[`${numberRow}`]
    tbAddress.innerHTML = valueBeforeEdit.address[`${numberRow}`]

    changeOldTable(numberRow)

}

function updateTable(numberRow) {

    // ประกาศเส้นทาง
    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)

    // update
    tbFullName.innerHTML = valueEdit.fullName[`${numberRow}`].text
    tbAddress.innerHTML = valueEdit.address[`${numberRow}`].text

    changeOldTable(numberRow)

}

function editTable(numberRow) {

    // ประกาศเส้นทาง
    let tbFullName = document.getElementById(`tbFullName${numberRow}`)
    let tbAddress = document.getElementById(`tbAddress${numberRow}`)

    let tbFullNameValue = tbFullName.innerHTML
    let tbAddressValue = tbAddress.innerHTML

    // เก็บค่าก่อนที่จะแก้ไขเอาไว้
    valueBeforeEdit.fullName[`${numberRow}`] = tbFullNameValue
    valueBeforeEdit.address[`${numberRow}`] = tbAddressValue

    // เริ่มต้นสร้างค่าให้ ตัวแปร global "valueEdit"
    valueEdit.fullName[`${numberRow}`] = {
        text: tbFullNameValue,
        length: ''
    }
    valueEdit.address[`${numberRow}`] = {
        text: tbAddressValue,
        length: ''
    }

    valueEdit.fullName[1]

    changeNewTable(numberRow)

    // ประกาศเส้นทาง
    let edFullName = document.getElementById(`edFullName${numberRow}`)
    let edAddress = document.getElementById(`edAddress${numberRow}`)

    // ใส่ค่าให้ input ในตาราง
    edFullName.value = tbFullNameValue
    edAddress.value = tbAddressValue

    lengthFullName(numberRow)
    lengthAddress(numberRow)

}

function insertTable() {

    // ประกาศเส้นทาง
    let dataTable = document.getElementById('dataTable')

    let rowLength = dataTable.rows.length

    // สร้างก่อนจบ
    // เพิ่มแถว
    dataTable.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${rowLength + 1}</td>
            <td>
                <span id='tbFullName${rowLength}'>${valueForm.fullName.text}</span>
            </td>
            <td>
                <span id='tbAddress${rowLength}'>${valueForm.address.text}</span>
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
