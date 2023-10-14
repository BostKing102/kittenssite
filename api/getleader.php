<?php
header("Access-Control-Allow-Origin: *");

$id = $_GET['id'];
if (!$id) {
    $response = array('type' => 0, 'msg' => 'ID is not avalible');
    die(json_encode($response));
}

$hostname = "localhost";
$username = "mysql";
$password = "mysql";
$bdname = "kittens";

$conn = new mysqli($hostname, $username, $password, $bdname);

if ($conn->connect_error) {
    $response = array('type' => 0, 'msg' => $conn->connect_error);
    echo json_encode($response);
}

$leader = array();

$sql = "SELECT * FROM `leader` WHERE id=$id";
$result = $conn->query($sql);

if ($result->num_rows < 1) {
    $response = array('type' => 0, 'msg' => 'not found');
    die(json_encode($response));
}

echo json_encode($result->fetch_assoc());