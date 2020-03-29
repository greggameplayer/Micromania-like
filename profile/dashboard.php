<?php
if(!empty($_POST["Usergroup"])){
    ?>
    <!DOCTYPE html>
    <?php
    include "../database.php";
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
            <nav id="dashboardnav">
                <button class="dashboardbuttons" id="managearticlesbuttons">Gérer les articles</button>
            </nav>
        </div>
    </main>
    <div id='cart' class="cartcl"></div>
    <footer>
        <p id="copyright">Copyright © Grégoire Hage 2019&nbsp;</p>
    </footer>

    <?php
}else{
    ?>
    <p>Arrête de faire le petit margoulin</p>
<?php
}
?>