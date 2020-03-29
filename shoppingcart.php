<?php
include "database.php";
global $db;
$qarticles = $db->prepare("SELECT articles.* FROM articles order by IdArticle ASC");
$qarticles->execute([]);
$i = 0;
$result = [
    "Name" => [],
    "Console" => [],
    "Coverimage" => [],
    "Price" => [],
    "ReleaseDate" => [],
];
while ($donnees = $qarticles->fetch()) {
    array_push($result["Name"], $donnees["Name"]);
    array_push($result["Console"], $donnees["Console"]);
    array_push($result["Coverimage"], $donnees["Coverimage"]);
    array_push($result["Price"], $donnees["Price"]);
    array_push($result["ReleaseDate"], $donnees["ReleaseDate"]);
}
$qarticles->closeCursor();
echo json_encode($result);


