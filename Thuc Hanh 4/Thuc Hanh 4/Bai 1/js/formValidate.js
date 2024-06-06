
$(document).ready(function () {
    $('#formSinhVien').validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            name: {
                required: true,
                valiName: true
            },
            sid: {
                required: true,
            },
            birthDay: {
                required: true,
            },
            sclass: {
                required: true,
            },
            submitHandler: function (form) {
                form.submit();
            }
        },
        messages: {
            user: {
                required: "Vui lòng không để trống",
            },
            code: {
                required: "Vui lòng không để trống",
                number: "Vui lòng nhập mã số SV",
            },
            date: {
                required: "Vui lòng không để trống",
                date: "Vui lòng nhập đúng định dạng ngày sinh",
            },
            class: "Vui lòng không để trống",
        },
    });
    $.validator.methods.valiName = function (value, element) {
        return this.optional(element) || /^([A-Z][a-z]+)\s([A-Z][a-z]+)\s([A-Z][a-z]+)$/.test(value);
    };

})