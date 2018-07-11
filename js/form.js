function clearForm() {
    document.getElementById('txtFullName').value = ''
    document.getElementById('txtAddress').value = ''
}

function checkInput() {
    var fullNameValue = document.getElementById('txtFullName').value
    var addressValue = document.getElementById('txtAddress').value
    var fullNameLength = fullNameValue.length
    var addressLength = addressValue.length

    if (/\d/.test(fullNameValue) == true || /\d/.test(addressValue) == true) {
        alert('กรุณาอย่าใส่ข้อมูลที่เป็นตัวเลข ให้ใส่ข้อมูลที่เป็นตัวอักษรเท่านั้น')
    }

    // else if (fullNameLength < 20 || fullNameLength > 50) {
    //     alert('กรุณาใส่ข้อมูล ชื่อ-นามสกุล ที่ไม่ต่ำกว่า 20 หรือมากกว่า 50 ตัวอักษร')
    // }

    // else if (addressLength < 50 || addressLength > 100) {
    //     alert('กรุณาใส่ข้อมูล ที่อยู่ ที่ไม่ต่ำกว่า 50 หรือมากกว่า 100 ตัวอักษร')
    // }

    else {
        insertTable();
    }

}
