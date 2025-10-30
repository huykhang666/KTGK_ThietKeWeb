$(document).ready(function () {
    $('#toggleButton').on('click', function () {
        $('.items').toggle();
        if ($('.items:first').is(':visible')) {
            $(this).text('Ẩn nội dung');
        } else {
            $(this).text('Hiện nội dung');
        }
    });
});


var btnSend = document.getElementById("btn-send");

btnSend.addEventListener('click', function () {
    var name = document.getElementById("Name").value.trim();
    var email = document.getElementById("Email").value.trim();
    var subject = document.getElementById("Subject").value.trim();
    var message = document.getElementById("Message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Vui lòng nhập đầy đủ thông tin: Name, Email, Subject, Message");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng");
        return;
    }

    alert("Gửi thành công!");
});