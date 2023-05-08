$uploaddir = '/images/';
$uploadfile = $uploaddir . basename($_FILES['my_files']['name']);

if (move_uploaded_file($_FILES['my_files']['my_name'], $uploadfile)) {
echo "success";
} else {
echo "error";
}
