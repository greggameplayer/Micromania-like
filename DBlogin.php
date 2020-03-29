<?php
include "database.php";
global $db;

$qlogin = $db->prepare("SELECT * FROM users WHERE Email = :email");
$qlogin->execute([
    "email" => $_POST["Email"]
]);

while($donnees = $qlogin->fetch()){
    if(password_verify($_POST["Password"], $donnees["Password"])){
        echo json_encode(array("email" => $_POST["Email"], "usergroup" => $donnees["Usergroup"]));
    }else{
        echo "KO";
    }
}