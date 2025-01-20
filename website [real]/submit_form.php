<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // ส่งข้อความทางอีเมล
    $to = "bsranghxng055@gmail.com"; // เปลี่ยนอีเมลนี้เป็นอีเมลของคุณ
    $subject = "ข้อความใหม่จาก: $name";
    $body = "ชื่อ: $name\nอีเมล: $email\n\nข้อความ:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "ส่งข้อความสำเร็จ!";
    } else {
        echo "เกิดข้อผิดพลาดในการส่งข้อความ!";
    }
}
?>
