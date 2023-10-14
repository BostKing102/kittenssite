<?php
header("Access-Control-Allow-Origin: *");

$hostname = "localhost";
$username = "mysql";
$password = "mysql";
$bdname = "kittens";

$conn = new mysqli($hostname, $username, $password, $bdname);

if ($conn->connect_error) {
    $response = array('type' => 0, 'msg' => $conn->connect_error);
    echo json_encode($response);
}

$leaders = array();

$sql = "SELECT * FROM `leader`";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()) {
    $leaders[] = $row;
}

echo json_encode($leaders);