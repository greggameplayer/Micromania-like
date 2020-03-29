<!DOCTYPE html>
<?php
include "database.php";
global $db;
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
?>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="icon" type="image/png" href="https://www.micromania.fr/on/demandware.static/Sites-Micromania-Site/-/default/dw6f514a3e/images/favicons/favicon-32x32.png" />
        <title>Micromania-like</title>
        <link href="CSS/index.css" rel="stylesheet"/>
        <link href="CSS/login.css" rel="stylesheet"/>
        <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
        <script src="JS/index.js"></script>
    </head>
    <body>
        <main>
            <header>
                <h1 id="title">Micromania-like</h1>
                <img id='shoppingcart' src='IMG/shopping-cart.svg'>
                <div id="loginheader">
                </div>
            </header>
            <div id="maindiv">
                <?php
                $qnumarticles = $db->prepare("SELECT articles.* FROM articles");
                $qnumarticles->execute([]);
                $i = 0;
                while ($donnees = $qnumarticles->fetch())
                {
                        ?>
                        <div id='article<?= $i?>' class='articles'>
                            <h2 id='h2article<?= $i?>' class='h2articles'><?= $donnees["Name"]?></h2>
                            <img id='imgarticle<?= $i?>' class='imgarticles' src='<?= $donnees["Coverimage"]?>'/>
                            <p id='particle<?= $i?>' class='particles'> Prix : <?= $donnees["Price"]?> €</p>
                            <button id='buttonarticle<?= $i ?>' class='buttonarticles'>Voir plus</button>
                        </div>
                        <?php
                    $i++;
                }
                $qnumarticles->closeCursor();
                ?>
            </div>
        </main>
        <div id='cart' class="cartcl"></div>
        <footer>
            <p id="copyright">Copyright © Grégoire Hage 2019&nbsp;</p>
        </footer>
    </body>
</html>