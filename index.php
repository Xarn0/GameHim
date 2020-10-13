<html>
<h1>Загрузка файлов</h1>
<form method="POST"  name = 'upload_file' enctype="multipart/form-data">
<input type="file" name = 'filename'>
<input type="hidden" name = "filename"></br>
<input type = 'submit' value = 'Загрузить'>
</form>
</html>
<?php
$size = $_FILES['filename']['size'];
$name = $_FILES['filename']['name'];
$dir = $_FILES['filename']['tmp_name'];
$servdir = $_FILES['filename']['name'];


if(move_uploaded_file($dir, 'img/' .$servdir)){
    echo "Файл успешно загружен";
}else {
    echo "Файл  no успешно загружен";
    
}

?>