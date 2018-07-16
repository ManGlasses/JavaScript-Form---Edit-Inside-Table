// ตัดช่องว่างทั้งหมดใน string
function trim(value) { return value.replace(/^\s+|\s+$/g, '') }
function trimFull(value) { return value.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '') }

function lengthFullName(numberRow = '') {

    // In form
    if (numberRow == '') {

        // ประกาศเส้นทาง
        let txtFullName = document.getElementById('txtFullName')
        let txtCountFullName = document.getElementById('txtCountFullName')

        let txtFullNameValue = trimFull(txtFullName.value)
        let txtFullNameLength = txtFullNameValue.length

        // update ตัวแปร global "valueForm"
        // เปลี่ยน string ให้มีช่องว่างห่างกันแค่วรรคเดียว
        valueForm.fullName.text = trim(txtFullName.value).replace(/\s+/g, ' ')

        valueForm.fullName.length = txtFullNameLength

        if (txtFullNameLength < MIN_FULLNAME_LENGTH) {
            txtCountFullName.style.color = 'red'
            txtCountFullName.innerHTML = `${txtFullNameLength}/Min ${MIN_FULLNAME_LENGTH}`
        }

        else if (txtFullNameLength > MAX_FULLNAME_LENGTH) {
            txtCountFullName.style.color = 'red'
            txtCountFullName.innerHTML = `${txtFullNameLength}/Max ${MAX_FULLNAME_LENGTH}`
        }

        else {
            txtCountFullName.style.color = 'black'
            txtCountFullName.innerHTML = `${txtFullNameLength}/Max ${MAX_FULLNAME_LENGTH}`
        }
    }

    // In table
    else {

        // ประกาศเส้นทาง
        let edFullName = document.getElementById(`edFullName${numberRow}`)
        let edCountFullName = document.getElementById(`edCountFullName${numberRow}`)

        let edFullNameValue = trimFull(edFullName.value)
        let edFullNameLength = edFullNameValue.length

        // update ตัวแปร global "valueEdit"
        valueEdit.fullName[`${numberRow}`] = {

            // เปลี่ยน string ให้มีช่องว่างห่างกันแค่วรรคเดียว
            text: trim(edFullName.value).replace(/\s+/g, ' '),

            length: edFullNameLength
        }

        if (edFullNameLength < MIN_FULLNAME_LENGTH) {
            edCountFullName.style.color = 'red'
            edCountFullName.innerHTML = `${edFullNameLength}/Min ${MIN_FULLNAME_LENGTH}`
        }

        else if (edFullNameLength > MAX_FULLNAME_LENGTH) {
            edCountFullName.style.color = 'red'
            edCountFullName.innerHTML = `${edFullNameLength}/Max ${MAX_FULLNAME_LENGTH}`
        }

        else {
            edCountFullName.style.color = 'black'
            edCountFullName.innerHTML = `${edFullNameLength}/Max ${MAX_FULLNAME_LENGTH}`
        }
    }

}

function lengthAddress(numberRow = '') {

    // In form
    if (numberRow == '') {
        let txtAddress = document.getElementById('txtAddress')
        let txtCountAddress = document.getElementById('txtCountAddress')

        let txtAddressValue = trimFull(txtAddress.value)
        let txtAddressLength = txtAddressValue.length

        // update ตัวแปร global "valueForm"
        // เปลี่ยน string ให้มีช่องว่างห่างกันแค่วรรคเดียว
        valueForm.address.text = trim(txtAddress.value).replace(/\s+/g, ' ')

        valueForm.address.length = txtAddressLength

        if (txtAddressLength < MIN_ADDRESS_LENGTH) {
            txtCountAddress.style.color = 'red'
            txtCountAddress.innerHTML = `${txtAddressLength}/Min ${MIN_ADDRESS_LENGTH}`
        }

        else if (txtAddressLength > MAX_ADDRESS_LENGTH) {
            txtCountAddress.style.color = 'red'
            txtCountAddress.innerHTML = `${txtAddressLength}/Max ${MAX_ADDRESS_LENGTH}`
        }

        else {
            txtCountAddress.style.color = 'black'
            txtCountAddress.innerHTML = `${txtAddressLength}/Max ${MAX_ADDRESS_LENGTH}`
        }
    }

    // In table
    else {
        let edAddress = document.getElementById(`edAddress${numberRow}`)
        let edCountAddress = document.getElementById(`edCountAddress${numberRow}`)

        let edAddressValue = trimFull(edAddress.value)
        let edAddressLength = edAddressValue.length

        // update ตัวแปร global "valueEdit"
        valueEdit.address[`${numberRow}`] = {

            // เปลี่ยน string ให้มีช่องว่างห่างกันแค่วรรคเดียว
            text: trim(edAddress.value).replace(/\s+/g, ' '),

            length: edAddressLength
        }

        if (edAddressLength < MIN_ADDRESS_LENGTH) {
            edCountAddress.style.color = 'red'
            edCountAddress.innerHTML = `${edAddressLength}/Min ${MIN_ADDRESS_LENGTH}`
        }

        else if (edAddressLength > MAX_ADDRESS_LENGTH) {
            edCountAddress.style.color = 'red'
            edCountAddress.innerHTML = `${edAddressLength}/Max ${MAX_ADDRESS_LENGTH}`
        }

        else {
            edCountAddress.style.color = 'black'
            edCountAddress.innerHTML = `${edAddressLength}/Max ${MAX_ADDRESS_LENGTH}`
        }
    }

}

function clearForm() {
    document.getElementById('txtFullName').value = ''
    document.getElementById('txtAddress').value = ''

    lengthFullName()
    lengthAddress()
}

function checkInput(numberRow = '') {

    // Insert
    if (numberRow == '') {
        if (/\d/.test(valueForm.fullName.text)) {
            alert('กรุณาอย่าใส่ข้อมูลที่เป็นตัวเลข ให้ใส่ข้อมูลที่เป็นตัวอักษรเท่านั้น')
        }

        else if (valueForm.fullName.length < MIN_FULLNAME_LENGTH || valueForm.fullName.length > MAX_FULLNAME_LENGTH) {
            alert(`กรุณาใส่ข้อมูล "ชื่อ-นามสกุล" ที่ไม่ต่ำกว่า ${MIN_FULLNAME_LENGTH} หรือมากกว่า ${MAX_FULLNAME_LENGTH} ตัวอักษร`)
        }

        else if (valueForm.address.length < MIN_ADDRESS_LENGTH || valueForm.address.length > MAX_ADDRESS_LENGTH) {
            alert(`กรุณาใส่ข้อมูล "ที่อยู่" ที่ไม่ต่ำกว่า ${MIN_ADDRESS_LENGTH} หรือมากกว่า ${MAX_ADDRESS_LENGTH} ตัวอักษร`)
        }

        else {
            insertTable()
        }
    }

    // Edit
    else {
        if (/\d/.test(valueEdit.fullName[`${numberRow}`].text)) {
            alert('กรุณาอย่าใส่ข้อมูลที่เป็นตัวเลข ให้ใส่ข้อมูลที่เป็นตัวอักษรเท่านั้น')
        }

        else if (valueEdit.fullName[`${numberRow}`].length < MIN_FULLNAME_LENGTH || valueEdit.fullName[`${numberRow}`].length > MAX_FULLNAME_LENGTH) {
            alert(`กรุณาใส่ข้อมูล "ชื่อ-นามสกุล" ที่ไม่ต่ำกว่า ${MIN_FULLNAME_LENGTH} หรือมากกว่า ${MAX_FULLNAME_LENGTH} ตัวอักษร`)
        }

        else if (valueEdit.address[`${numberRow}`].length < MIN_ADDRESS_LENGTH || valueEdit.address[`${numberRow}`].length > MAX_ADDRESS_LENGTH) {
            alert(`กรุณาใส่ข้อมูล "ที่อยู่" ที่ไม่ต่ำกว่า ${MIN_ADDRESS_LENGTH} หรือมากกว่า ${MAX_ADDRESS_LENGTH} ตัวอักษร`)
        }

        else {
            updateTable(numberRow)
        }
    }

}
