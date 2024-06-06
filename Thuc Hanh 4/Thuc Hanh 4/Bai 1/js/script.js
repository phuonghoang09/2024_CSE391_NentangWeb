
document.getElementById('formSinhVien').addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy dữ liệu từ form
    const name = document.getElementById('name').value;
    const sid = document.getElementById('sid').value;
    const birthDay = document.getElementById('birthDay').value;
    const sclass = document.getElementById('sclass').value;

    //Validate dữ liệu

    // Kiểm tra tính duy nhất của sid
    if (isSidUnique(sid)) {

        // Thêm sinh viên vào bảng
        const tableBody = document.getElementById('tableSinhVien').getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();

        const nameCell = newRow.insertCell();
        nameCell.textContent = name;

        const sidCell = newRow.insertCell();
        sidCell.textContent = sid;

        const birthDayCell = newRow.insertCell();
        birthDayCell.textContent = birthDay;

        const sclassCell = newRow.insertCell();
        sclassCell.textContent = sclass;

        const actionCell = newRow.insertCell();

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.onclick = function () { editRow(this) };
        actionCell.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () { confirmDeleteRow(this) };
        actionCell.appendChild(deleteBtn);

        // Thêm sinh viên vào localStorage
        const student = {
            hoTen: name,
            maSV: sid,
            ngaySinh: birthDay,
            lop: sclass
        };

        let students = [];
        students = JSON.parse(localStorage.getItem('student')) || [];
        students.push(student);
        localStorage.setItem('student', JSON.stringify(students));

        alert('Submit successful! Student information added.')

        document.getElementById('formSinhVien').reset();
    } else {
        alert('Student ID (SID) must be unique!');
    }
});
// hàm kiểm tra tính duy nhất của sid
isSidUnique = (sid) => {
    const students = JSON.parse(localStorage.getItem('student')) || [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].maSV === sid) {
            return false; // sid đã tồn tại trong danh sách sinh viên
        }
    }
    return true; // sid là duy nhất
}

// hàm xác nhận trước khi xoá
confirmDeleteRow = (button) => {
    if (confirm('Are you sure you want to delete this student?')) {
        deleteRow(button);
    }
};
// hàm xoá 1 row khi nhấn btn
deleteRow = (button) => {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// Hàm sửa thông tin sinh viên
editRow = (button) => {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    const name = cells[0].textContent;
    const sid = cells[1].textContent;
    const birthDay = cells[2].textContent;
    const sclass = cells[3].textContent;

    // đổ thông tin table vào form sửa thông tin
    document.getElementById('name').value = name;
    document.getElementById('sid').value = sid;
    document.getElementById('birthDay').value = birthDay;
    document.getElementById('sclass').value = sclass;

    // Xóa row cũ sau khi lấy thông tin
    deleteRow(button);
};

// Hàm hiển thị danh sách sinh viên từ localStorage khi trang tải
function hienThiDanhSachSinhVien() {
    const students = JSON.parse(localStorage.getItem('student')) || [];

    const tableBody = document.getElementById('tableSinhVien').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    students.forEach(function (student) {
        const newRow = tableBody.insertRow();

        const nameCell = newRow.insertCell();
        nameCell.textContent = student.hoTen;

        const sidCell = newRow.insertCell();
        sidCell.textContent = student.maSV;

        const birthDayCell = newRow.insertCell();
        birthDayCell.textContent = student.ngaySinh;

        const sclassCell = newRow.insertCell();
        sclassCell.textContent = student.lop;

        const actionCell = newRow.insertCell();
        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.onclick = function () { editRow(this) };
        actionCell.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () { deleteRow(this) };
        actionCell.appendChild(deleteBtn);
    });
}

hienThiDanhSachSinhVien();




