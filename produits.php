<!DOCTYPE html>
<?php
include "database.php";
global $db;
?>
<main>
    <header>
        <h1 id="title">Micromania-like</h1>
        <button id='return' class='btn btn-primary'>Retour</button>
        <div id="loginheader">
        </div>
        <img id='shoppingcart' src='IMG/shopping-cart.svg'>
    </header>
    <div id="maindiv">
        <?php
        $qarticles = $db->prepare("SELECT articles.* FROM articles order by IdArticle ASC");
        $qarticles->execute([]);
        $i = 0;
        $result = [
            "Name" => [],
            "Console" => [],
            "Coverimage" => [],
            "Price" => [],
            "ReleaseDate" => [],
            "content" => [],
            "Description" => [],
            "Screenshots" => []
        ];
        while ($donnees = $qarticles->fetch()) {
            array_push($result["Name"], $donnees["Name"]);
            array_push($result["Console"], $donnees["Console"]);
            array_push($result["Coverimage"], $donnees["Coverimage"]);
            array_push($result["Price"], $donnees["Price"]);
            array_push($result["ReleaseDate"], $donnees["ReleaseDate"]);
        }
        $qarticles->closeCursor();
        $qdetailledinfos = $db->prepare("SELECT GROUP_CONCAT(detailledinfos.content) as contentconcat FROM detailledinfos group by IdArticleDetailled order by IdArticleDetailled ASC");
        $qdetailledinfos->execute([]);
        while($donneesdetailled = $qdetailledinfos->fetch(\PDO::FETCH_GROUP)){
            array_push($result["content"], explode(",", $donneesdetailled["contentconcat"]));
        }
        $qdetailledinfos->closeCursor();
        $qdescription = $db->prepare("SELECT GROUP_CONCAT(description.Description SEPARATOR '<br>') FROM description group by IdArticleDesc order by IdArticleDesc");
        $qdescription->execute([]);
        while($donneesdescription = $qdescription->fetch(\PDO::FETCH_GROUP)){
            array_push($result["Description"], $donneesdescription[0]);
        }
        $qdescription->closeCursor();
        $qscreenshots = $db->prepare("SELECT GROUP_CONCAT(screenshots.Screenshot) FROM screenshots group by IdArticleScreenshot order by IdArticleScreenshot");
        $qscreenshots->execute([]);
        while($donneesscreenshots = $qscreenshots->fetch(\PDO::FETCH_GROUP)){
            array_push($result["Screenshots"], explode(",", $donneesscreenshots[0]));
        }
        $qscreenshots->closeCursor();
        ?>
        <div id='fiche'>
            <div id='ficheleft'>
                    <div>
                        <img id='cover' src='<?= $result["Coverimage"][$_POST["data"]]?>'>
                    </div>
            </div>
            <div id='ficheright'>
                <h1 id='gametitle'><?= $result["Name"][$_POST["data"]]?> <?= $result["Console"][$_POST["data"]]?></h1>
                <h2 id='price'><?= $result["Price"][$_POST["data"]]?> €</h2>
                <h3 id='releasedate'>SORTIE LE : <?= $result["ReleaseDate"][$_POST["data"]]?></h3>
                <h3 id='descriptiontitle'>Description : </h3>
                <p id='description'><?= $result["Description"][$_POST["data"]]?></p>
                <h3 id='InfoTitle'>Informations détaillées :</h3>
                <ul>
                    <?php
                    for($j = 0; $j < count($result["content"][$_POST["data"]]); $j++) {
                        ?>
                        <li><?= $result["content"][$_POST["data"]][$j]?></li>
                        <?php
                    }
                    ?>
                </ul>
            </div>
        </div>
        <div id='tablediv'>
            <table class='tabimg'>
                <tr>
                    <?php
                    for($j = 0; $j < count($result["Screenshots"][$_POST["data"]]); $j++) {
                        ?>
                        <td>
                            <img src='<?= $result["Screenshots"][$_POST["data"]][$j]?>'>
                        </td>
                        <?php
                    }
                    ?>
                </tr>
            </table>
        </div>
        <div id='buydiv'>
            <input type='number' id='qtbuyinput' value='1' min='1' max='100'>
            <label id='qtbuylabel'> x </label>
            <button id='buybt'>Acheter</button>
        </div>
    </div>
</main>
<div id='cart' class="cartcl"></div>
<footer>
    <p id="copyright">Copyright © Grégoire Hage 2019&nbsp;</p>
</footer>
