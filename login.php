<?php
if(!empty($_POST["email"]) and !empty($_POST["usergroup"])) {
    ?>
    <nav>
        <ul>
            <li id="profile">
                <a id="profile-trigger" href="#">
                    Profil <span>▼</span>
                </a>
                <div id="profile-content">
                    <button id="settingsbutton">Paramètres</button>
                    <?php if($_POST["usergroup"] == 2){?>
                    <button id="dashboardbutton">Tableau de bord</button>
                    <?php } ?>
                    <button id="disconnectbutton">Se déconnecter</button>
                </div>
            </li>
        </ul>
    </nav>
<?php } else { ?>
    <nav>
        <ul>
            <li id="login">
                <a id="login-trigger" href="#">
                    Se connecter <span>▼</span>
                </a>
                <div id="login-content">
                    <form id="loginform">
                        <fieldset id="inputs">
                            <input id="usernamelogin"
                                   type="email"
                                   name="Email"
                                   placeholder="Votre email"
                                   required>
                            <input id="passwordlogin"
                                   type="password"
                                   name="Password"
                                   placeholder="Votre mot de passe"
                                   required>
                        </fieldset>
                        <fieldset id="actions">
                            <input type="submit"
                                   id="submit"
                                   value="Se connecter">
                            <label>
                                <input type="checkbox"
                                       checked="checked">
                                Me laisser connecter
                            </label>
                        </fieldset>
                    </form>
                </div>
            </li>
            <li id="signup">
                S'inscrire
            </li>
        </ul>
    </nav>
    <?php
}
    ?>