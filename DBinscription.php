<?php
include "database.php";
global $db;
$uniquemail = 1;
$qcheckmail = $db->prepare("SELECT COUNT(users.Id) FROM users where users.Email = :email");
$qcheckmail->execute([
    "email" => $_POST["Email"]
]);
while($donnees = $qcheckmail->fetch()){
    if($donnees[0] > 0){
        $uniquemail = 0;
    }
}
$qcheckmail->closeCursor();
if($uniquemail == 1) {
    $options = [
        "cost" => 12,
    ];
    $hashpassword = password_hash($_POST["Password"], PASSWORD_BCRYPT, $options);
    $qinscription = $db->prepare("INSERT INTO users(Email,Password,Nom, Prenom) VALUES(:email,:password,:nom,:prenom)");
    $qinscription->execute([
        "email" => $_POST["Email"],
        "password" => $hashpassword,
        "nom" => $_POST["Nom"],
        "prenom" => $_POST["Prenom"]
    ]);
    $qinscription->closeCursor();
    echo("utilisateur créé");
    unset($uniquemail);
}else{
    echo("l'utilisateur existe déjà");
    unset($uniquemail);
}

