

function insertTable() {

    // นำค่าจาก form ออกมาเก็บไว้ พร้อมทั้งกำหนดลำดับแถว
    var rowLength = document.getElementById('dataTable').rows.length
    var fullNameValue = document.getElementById('txtFullName').value
    var addressValue = document.getElementById('txtAddress').value

    // สร้างแถวใหม่ไปต่อท้ายตาราง
    document.getElementById('dataTable').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${rowLength}</td>
            <td>
                <span id='fullNameValue${rowLength}'>${fullNameValue}</span>
                <input id='edFullName${rowLength}' type='text' />
            </td>
            <td>
                <span id='addressValue${rowLength}'>${addressValue}</span>
                <input id='edAddress${rowLength}' type='text' />
            </td>
            <td>
                <span id='btnEdit${rowLength}' onClick='editTable("${rowLength}")'>Edit</span>
                <span id='btnSave${rowLength}' onClick='updateTable("${rowLength}")'>Save</span>
                <span id='btnCancel${rowLength}' onClick='btnCancel_Click("${rowLength}")'>Cancel</span>
            </td>
        </tr>
    `)

    // ซ่อนปุ่ม save กับ cancel
    document.getElementById(`btnSave${rowLength}`).style.display = 'none'
    document.getElementById(`btnCancel${rowLength}`).style.display = 'none'

    // ซ่อน input ใน table
    document.getElementById(`edFullName${rowLength}`).style.display = 'none'
    document.getElementById(`edAddress${rowLength}`).style.display = 'none'

    // ระยะห่างของตารางกับ คู่มือการแก่ไข
    var row3MarginTop = document.getElementById('row3').style.marginTop.replace(/%/, '')
    if (row3MarginTop > 6) {
        document.getElementById('row3').style.marginTop = `${row3MarginTop - 3.27}%`;
    }

    clearForm()
}

function editTable(numberRow) {

    // แสดงปุ่ม save และ cancel พร้อมกับซ่อน ปุ่ม edit
    document.getElementById(`btnEdit${numberRow}`).style.display = 'none'
    document.getElementById(`btnSave${numberRow}`).style.display = 'inline'
    document.getElementById(`btnCancel${numberRow}`).style.display = 'inline'

    // นำค่าจากแถวที่เลือกมาเก็บไว้
    var fullNameValue = document.getElementById(`fullNameValue${numberRow}`).innerHTML
    var addressValue = document.getElementById(`addressValue${numberRow}`).innerHTML

    // แสดง input พร้อมกับ ซ่อนข้อความในตาราง
    document.getElementById(`fullNameValue${numberRow}`).style.display = 'none'
    document.getElementById(`addressValue${numberRow}`).style.display = 'none'
    document.getElementById(`edFullName${numberRow}`).style.display = 'inline'
    document.getElementById(`edAddress${numberRow}`).style.display = 'inline'

    // เพิ่ม input เข้าไปในแถวที่เลือก
    document.getElementById(`edFullName${numberRow}`).value = fullNameValue
    document.getElementById(`edAddress${numberRow}`).value = addressValue

}

function updateTable(numberRow) {

    // นำค่าที่อยู่ใน input มาเก็บไว้
    var fullNameValue = document.getElementById(`edFullName${numberRow}`).value
    var addressValue = document.getElementById(`edAddress${numberRow}`).value

    // update
    document.getElementById(`fullNameValue${numberRow}`).innerHTML = fullNameValue
    document.getElementById(`addressValue${numberRow}`).innerHTML = addressValue

    btnCancel_Click(numberRow)

}

function btnCancel_Click(numberRow) {

    // แสดงค่าที่ update พร้อมทั้งเอา input ออก
    document.getElementById(`fullNameValue${numberRow}`).style.display = 'inline'
    document.getElementById(`addressValue${numberRow}`).style.display = 'inline'
    document.getElementById(`edFullName${numberRow}`).style.display = 'none'
    document.getElementById(`edAddress${numberRow}`).style.display = 'none'

    // ซ่อนปุ่ม save และ cancel พร้อมกับแสดง ปุ่ม edit
    document.getElementById(`btnEdit${numberRow}`).style.display = 'inline'
    document.getElementById(`btnSave${numberRow}`).style.display = 'none'
    document.getElementById(`btnCancel${numberRow}`).style.display = 'none'
}
