function trimFull(value) { return value.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '') }

function lengthFullName(numberRow = '') {

    // In form
    if (numberRow == '') {
        let txtFullName = document.getElementById('txtFullName')
        let txtCountFullName = document.getElementById('txtCountFullName')

        let txtFullNameValue = trimFull(txtFullName.value)
        let txtFullNameLength = txtFullNameValue.length

        if (txtFullNameLength < MIN_FULLNAME_LEN) {
            txtCountFullName.style.color = 'red'
            txtCountFullName.innerHTML = `${txtFullNameLength}/Min ${MIN_FULLNAME_LEN}`
        }

        else if (txtFullNameLength > MAX_FULLNAME_LEN) {
            txtCountFullName.style.color = 'red'
            txtCountFullName.innerHTML = `${txtFullNameLength}/Max ${MAX_FULLNAME_LEN}`
        }

        else {
            txtCountFullName.style.color = 'black'
            txtCountFullName.innerHTML = `${txtFullNameLength}/Max ${MAX_FULLNAME_LEN}`
        }
    }

    // In table
    else {
        let edFullName = document.getElementById(`edFullName${numberRow}`)
        let edCountFullName = document.getElementById(`edCountFullName${numberRow}`)

        let edFullNameValue = trimFull(edFullName.value)
        let edFullNameLength = edFullNameValue.length

        if (edFullNameLength < MIN_FULLNAME_LEN) {
            edCountFullName.style.color = 'red'
            edCountFullName.innerHTML = `${edFullNameLength}/Min ${MIN_FULLNAME_LEN}`
        }

        else if (edFullNameLength > MAX_FULLNAME_LEN) {
            edCountFullName.style.color = 'red'
            edCountFullName.innerHTML = `${edFullNameLength}/Max ${MAX_FULLNAME_LEN}`
        }

        else {
            edCountFullName.style.color = 'black'
            edCountFullName.innerHTML = `${edFullNameLength}/Max ${MAX_FULLNAME_LEN}`
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

        if (txtAddressLength < MIN_ADDRESS_LEN) {
            txtCountAddress.style.color = 'red'
            txtCountAddress.innerHTML = `${txtAddressLength}/Min ${MIN_ADDRESS_LEN}`
        }

        else if (txtAddressLength > MAX_ADDRESS_LEN) {
            txtCountAddress.style.color = 'red'
            txtCountAddress.innerHTML = `${txtAddressLength}/Max ${MAX_ADDRESS_LEN}`
        }

        else {
            txtCountAddress.style.color = 'black'
            txtCountAddress.innerHTML = `${txtAddressLength}/Max ${MAX_ADDRESS_LEN}`
        }
    }

    // In table
    else {
        let edAddress = document.getElementById(`edAddress${numberRow}`)
        let edCountAddress = document.getElementById(`edCountAddress${numberRow}`)

        let edAddressValue = trimFull(edAddress.value)
        let edAddressLength = edAddressValue.length

        if (edAddressLength < MIN_ADDRESS_LEN) {
            edCountAddress.style.color = 'red'
            edCountAddress.innerHTML = `${edAddressLength}/Min ${MIN_ADDRESS_LEN}`
        }

        else if (edAddressLength > MAX_ADDRESS_LEN) {
            edCountAddress.style.color = 'red'
            edCountAddress.innerHTML = `${edAddressLength}/Max ${MAX_ADDRESS_LEN}`
        }

        else {
            edCountAddress.style.color = 'black'
            edCountAddress.innerHTML = `${edAddressLength}/Max ${MAX_ADDRESS_LEN}`
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
        let txtFullName = document.getElementById('txtFullName')
        let txtAddress = document.getElementById('txtAddress')

        let txtFullNameValue = txtFullName.value
        let txtAddressValue = txtAddress.value
        let txtFullNameLength = txtFullNameValue.length
        let txtAddressLength = txtAddressValue.length

        if (/\d/.test(txtFullNameValue) || /\d/.test(txtAddressValue)) {
            alert('กรุณาอย่าใส่ข้อมูลที่เป็นตัวเลข ให้ใส่ข้อมูลที่เป็นตัวอักษรเท่านั้น')
        }

        else if (txtFullNameLength < MIN_FULLNAME_LEN || txtFullNameLength > MAX_FULLNAME_LEN) {
            alert(`กรุณาใส่ข้อมูล "ชื่อ-นามสกุล" ที่ไม่ต่ำกว่า ${MIN_FULLNAME_LEN} หรือมากกว่า ${MAX_FULLNAME_LEN} ตัวอักษร`)
        }

        else if (txtAddressLength < MIN_ADDRESS_LEN || txtAddressLength > MAX_ADDRESS_LEN) {
            alert(`กรุณาใส่ข้อมูล "ที่อยู่" ที่ไม่ต่ำกว่า ${MIN_ADDRESS_LEN} หรือมากกว่า ${MAX_ADDRESS_LEN} ตัวอักษร`)
        }

        else {
            insertTable()
        }
    }

    // Edit
    else {
        let edFullName = document.getElementById(`edFullName${numberRow}`)
        let edAddress = document.getElementById(`edAddress${numberRow}`)

        let edFullNameValue = edFullName.value
        let edAddressValue = edAddress.value
        let edFullNameLength = edFullNameValue.length
        let edAddressLength = edAddressValue.length

        if (/\d/.test(edFullNameValue) || /\d/.test(edAddressValue)) {
            alert('กรุณาอย่าใส่ข้อมูลที่เป็นตัวเลข ให้ใส่ข้อมูลที่เป็นตัวอักษรเท่านั้น')
        }

        else if (edFullNameLength < MIN_FULLNAME_LEN || edFullNameLength > MAX_FULLNAME_LEN) {
            alert(`กรุณาใส่ข้อมูล "ชื่อ-นามสกุล" ที่ไม่ต่ำกว่า ${MIN_FULLNAME_LEN} หรือมากกว่า ${MAX_FULLNAME_LEN} ตัวอักษร`)
        }

        else if (edAddressLength < MIN_ADDRESS_LEN || edAddressLength > MAX_ADDRESS_LEN) {
            alert(`กรุณาใส่ข้อมูล "ที่อยู่" ที่ไม่ต่ำกว่า ${MIN_ADDRESS_LEN} หรือมากกว่า ${MAX_ADDRESS_LEN} ตัวอักษร`)
        }

        else {
            updateTable(numberRow)
        }
    }

}
