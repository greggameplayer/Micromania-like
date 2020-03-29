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
        <form id="inscriptionform" action="" method="post">
            <fieldset id="inputsinscription">
                <div>
                <label for="usernameinscription">Email :</label>
                <input  id="usernameinscription"
                        type="email"
                        name="Emailinscription"
                        required>
                </div>
                <div>
                <label for="passwordinscription">Mot de passe :</label>
                <input  id="passwordinscription"
                        type="password"
                        name="Passwordinscription"
                        required>
                </div>
                <div>
                <label for="nominscription">Nom :</label>
                <input id="nominscription"
                       type="text"
                       name="Nominscription"
                       required>
                </div>
                <div>
                <label for="prenominscription">Prenom :</label>
                <input id="prenominscription"
                       type="text"
                       name="Prenominscription"
                       required>
                </div>
            </fieldset>
            <fieldset id="actionsinscription">
                <input  type="submit"
                        id="submitinscription"
                        value="S'inscrire">
            </fieldset>
        </form>
    </div>
</main>
<div id='cart' class="cartcl"></div>
<footer>
    <p id="copyright">Copyright © Grégoire Hage 2019&nbsp;</p>
</footer>
