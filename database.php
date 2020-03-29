<?php
define("HOST","127.0.0.1:3308");
define("DB_NAME","micromania-like");
define("USER", "root");
define("PASSWORD","");

try{
    $db = new PDO("mysql:host=" . HOST . ";dbname=" . DB_NAME, USER, PASSWORD);
    $db->setAttribute(PDO::ERRMODE_EXCEPTION, PDO::ATTR_ERRMODE);
}catch(PDOException $e){
    echo $e;
}

