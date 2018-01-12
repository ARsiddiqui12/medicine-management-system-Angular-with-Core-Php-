<?php

header('Access-Control-Allow-Origin: *');  

header('content-type:application/json');

$post_data = file_get_contents("php://input");

$request = json_decode($post_data);

echo json_encode($post_data);














?>