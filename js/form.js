function form_Load() {

    let txtFullName = document.getElementById('txtFullName')
    let txtAddress = document.getElementById('txtAddress')

    txtFullName.maxLength = MAX_FULLNAME_LEN
    txtAddress.maxLength = MAX_ADDRESS_LEN

}

function trimFull(value) { return value.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '') }

function lengthFullName() {

    let txtFullName = document.getElementById('txtFullName')
    let countFullName = document.getElementById('countFullName')

    let txtFullNameValue = trimFull(txtFullName.value)
    let txtFullNameLength = txtFullNameValue.length

    if (txtFullNameLength < MIN_FULLNAME_LEN) {
        countFullName.style.color = 'red'
        countFullName.innerHTML = `${txtFullNameLength}/${MIN_FULLNAME_LEN}`
    }
    else if (txtFullNameLength >= MIN_FULLNAME_LEN && txtFullNameLength <= MAX_FULLNAME_LEN) {
        countFullName.style.color = 'black'
        countFullName.innerHTML = `${txtFullNameLength}/${MAX_FULLNAME_LEN}`
    }

}

function lengthAddress() {

    let txtAddress = document.getElementById('txtAddress')
    let countAddress = document.getElementById('countAddress')

    let txtAddressValue = trimFull(txtAddress.value)
    let txtAddressLength = txtAddressValue.length

    if (txtAddressLength < MIN_ADDRESS_LEN) {
        countAddress.style.color = 'red'
        countAddress.innerHTML = `${txtAddressLength}/${MIN_ADDRESS_LEN}`
    }
    else if (txtAddressLength >= MIN_ADDRESS_LEN && txtAddressLength <= MAX_ADDRESS_LEN) {
        countAddress.style.color = 'black'
        countAddress.innerHTML = `${txtAddressLength}/${MAX_ADDRESS_LEN}`
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
