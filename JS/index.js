var actual_JSON;

let shoppingcartarticles, shoppingcartclicked = 0, totalprice = 0, completelyopen = 0;
/*
let articles = { //objet contenant toutes les caractéristiques des différents jeux
    name: ["Luigi's mansion 3", "Mario & sonic aux jo de tokyo 2020", "Dragon Ball Z Kakarot", "Anthem"], //nom des jeux
    console: ["Switch", "Switch", "PS4", "Xbox One"],// console attribué aux jeux
    coverimage: ["IMG/luigimansion.webp", "IMG/mario&sonic.jpg", "IMG/dbzkakarot.jpg", "IMG/anthem.jpg"], //couverture des jeux
    releasedate: ["31 OCT. 2019", "8 NOV. 2019", "17 JANV. 2020", "22 FÉVR. 2019"],//date de sortie des jeux
    description: [["Le plus courageux des froussards est de retour dans la suite d’un des plus grands succès de la Nintendo 3DS, avec Luigi’s Mansion 3 !<br>",
    "Après avoir reçu une invitation à séjourner dans un hôtel luxueux, Luigi se prépare à passer des vacances idylliques avec Mario et ses amis.", 
    "Le rêve tourne rapidement au cauchemar lorsque le Roi Boo révèle que tout cela n'était qu'un stratagème pour capturer Mario et ses compagnons ! Une nouvelle fois assisté du farfelu professeur K. Tastroff, c’est au plus trouillard des téméraires de s'aventurer dans l’exploration d’un hôtel qui n’a rien d’une destination idéale…<br>", 
    "Lancez‐vous dans les défis de la Tour Hantée, jusqu’à 8 joueurs, en local* ou en ligne** !",
    "Montez d’étage en étage après chaque nouveau jeu, et remplissez des objectifs toujours plus farfelus ! Quel sera votre prochain défi ? Eliminer tous les fantômes avant la fin du temps imparti ? Retrouver tous les Toad disparus ? Collectionneur en herbe, à vos aspirateurs ! Débusquez les éléments cachés dans le décor pour finir le jeu à 100% !",
    "Fouillez, aspirez, déplacez et vous serez récompensé ! *Le multijoueur local sans fil requiert une console et un exemplaire du jeu par joueur/ **Nintendo Switch Online requis"],["Rendez-vous aux Jeux Olympiques de Tokyo 2020 avec Mario, Sonic et leurs amis en exclusivité sur Nintendo Switch !", 
    "Tentez de remporter la médaille d'or en donnant le maximum dans des disciplines bourrées d'action, parmi lesquelles une large panoplie de sports classiques mais également le skateboard, le karaté, le surf et l'escalade sportive, présents pour la première fois aux J.O. de Tokyo 2020.", 
    "Allumez votre Nintendo Switch, et que la compétition commence !", 
    "Différentes façons de jouer s'offrent à vous : vous pouvez utiliser les boutons aussi bien que les commandes par mouvements, dans des modes de jeu multijoueur où peuvent s'affronter jusqu'à quatre joueurs en local et jusqu'à huit joueurs en ligne.", 
    "Incarnez Mario, Sonic, Yoshi, Amy Rose, Luigi, Dr. Eggman et bien d'autres personnages !"],[
        "Revivez l'histoire de Goku dans Dragon Ball Z : Kakarot ! Menez des combats épiques et découvrez la vie dans le monde de Dragon Ball Z : combattez, pêchez, mangez et entraînez-vous avec Goku.",
        "Au cours de votre progression dans l'histoire, explorez de nouvelles zones, vivez de nouvelles aventures et tissez des liens étroits avec d'autres héros de l'univers de Dragon Ball Z.<br>",
        "Découvrez l'histoire de Dragon Ball Z grâce à des événements épiques et à des quêtes secondaires amusantes.",
        "En outre, des moments inédits de l'histoire répondront pour la toute première fois à certaines questions brûlantes que tout le monde se pose sur l'univers de Dragon Ball !<br>",
        "Livrez des combats emblématiques à une échelle encore inégalée.",
        "Luttez sur de vastes champs de bataille à l'environnement destructible et repoussez vos limites en affrontant des boss lors de combats épiques. Augmentez votre niveau de puissance et relevez de grands défis !"
    ],[
        "Dans un monde laissé à l'abandon par les dieux, une ténébreuse faction menace toute l'Humanité.",
        "Les seuls à se dresser entre ces criminels et la technologie ancienne qu'ils convoitent sont les Freelancers.<br>",
        "Rejoignez jusqu'à trois autres joueurs et assemblez avec eux des armures exosquelettes high-tech à la puissance unique.",
        "Explorez de vastes ruines, affrontez des ennemis redoutables et emparez-vous d’artefacts surnaturels. À chaque mission, votre Javelin et vous gagnez en puissance. Bravez les dangers d'un monde en constante évolution. Unissez-vous pour triompher du mal. Triomphez ensemble.<br>",
        "Anthem™ vous propulse dans un RPG d'action coopératif campé dans un nouveau monde rempli de mystères imaginé par BioWare™ et EA."
    ]], //description ligne par ligne des jeux
    detailedInfos: [["Date de sortie : 31 Oct. 2019", "Genre : Action / Aventure"], ["Date de sortie : 8 Nov. 2019", "Genre : Sport"], ["Date de sortie : 17 Janv. 2020", "Genre : Baston / Combat"], ["Date de sortie : 22 Févr. 2019", "Genre : Jeu de rôle"]], //Infos détaillées des jeux
    screenshots: [["IMG/screenshot1.jfif", "IMG/screenshot2.jfif", "IMG/screenshot3.jfif", "IMG/screenshot4.jfif"],
        ["IMG/screenshot1mario.jfif", "IMG/screenshot2mario.jfif", "IMG/screenshot3mario.jfif", "IMG/screenshot4mario.jfif"],
        ["IMG/screenshot1dbzkakarot.jpg", "IMG/screenshot2dbzkakarot.jpg", "IMG/screenshot3dbzkakarot.jpg", "IMG/screenshot4dbzkakarot.jpg"],
        ["IMG/screenshot1anthem.jpg", "IMG/screenshot2anthem.jpg", "IMG/screenshot3anthem.jpg", "IMG/screenshot4anthem.jpg"]], //différents screenshots des jeux
    price: [64.99, 64.99, 69.99, 4.99] //prix des jeux
};*/

let cart = {//objets contenant les jeux achetés et leur quantité
  items: [],//jeux dans le panier
  quantity: [],//quantité de jeu par jeu
};

$("document").ready(function(){ //fonction s'executant à la fin du chargement de la page HTML
    let result = "";
    $.post("../shoppingcart.php", {}, function(results) {
        result = JSON.parse(results);
        for (let i = 0; i < result.Name.length; i++) { //ajouts des différents articles avec leur nom, image de couverture et leur prix
            $("#buttonarticle" + i).on("click", {id: i}, onClickBtPlus);//ajout de l'evenement clique aux boutons des articles avec leur id passer à la fonction onClickBtPlus
        }
        $("header #shoppingcart").on("click", onClickShoppingcart); //ajout de l'evenement clique sur le caddie de shopping

        //------------------------------ Permet de fermer le panier lorsque l'on clique à côté ---------------------------------------
        $("body").click
        (
            function (e) {
                if (completelyopen == 1) {
                    if (e.target.id != ("cart" && "shoppingcart") && !(e.target.className.includes("cartcl")) && e.target.localName != "hr") {
                        $("header #shoppingcart").off("click");
                        $(".dustbins").hide();
                        $("#dustbinallitems").hide();
                        $("body #cart").animate({width: "toggle"}, 700, function () {
                            $("body #cart").html("");
                            $(".dustbins").show();
                            $("#dustbinallitems").show();
                            $("header #shoppingcart").on("click", onClickShoppingcart);
                        }).animate({width: "toggle"}, 0);
                        shoppingcartclicked = 0;
                        completelyopen = 0;
                    }
                }
            }
        );
        if(sessionStorage.getItem("login") == null){
            $.post("../login.php", {}, function (results) {
                $("#loginheader").html(results);
                $('#login-trigger').on("click", loginTrigger);
                $("#loginform").on("submit", onSubmitLogin);
                $("#signup").on("click", onSignupClick);
            });
        }else {
            $.post("../login.php", {
                email: JSON.parse(sessionStorage.getItem("login")).email,
                usergroup: JSON.parse(sessionStorage.getItem("login")).usergroup
            }, function (results) {
                $("#loginheader").html(results);
                $('#profile-trigger').on("click", profileTrigger);
                $("#disconnectbutton").on("click", disconnect);
                $("#dashboardbutton").on("click", onClickDashboard);
                $("#settingsbutton").on("click", onClickSettings);
            });
        }
    });
    //-----------------------------------------------------------------------------------------------------------------------------
});

function onClickBtPlus(event){ // fonction s'executant lors de l'appuie sur un bouton lié à un article pour en savoir plus et qui permet de supprimer le contenu précédant et d'afficher le contenu lié au jeu
    $.post("../produits.php", {data: event.data.id}, function(results){
       $("body").html(results);
       $("#return").on("click", onClickToMenu);
       $("header #shoppingcart").on("click", onClickShoppingcart);
       $("#buybt").on("click", onClickBtBuy);
       if(sessionStorage.getItem("login") == null){
            $.post("../login.php", {}, function (results) {
                $("#loginheader").html(results);
                $('#login-trigger').on("click", loginTrigger);
                $("#loginform").on("submit", onSubmitLogin);
                $("#signup").on("click", onSignupClick);
            });
       }else {
           $.post("../login.php", {
               email: JSON.parse(sessionStorage.getItem("login")).email,
               usergroup: JSON.parse(sessionStorage.getItem("login")).usergroup
           }, function (results) {
               $("#loginheader").html(results);
               $('#profile-trigger').on("click", profileTrigger);
               $("#disconnectbutton").on("click", disconnect);
               $("#dashboardbutton").on("click", onClickDashboard);
               $("#settingsbutton").on("click", onClickSettings);
           });
       }
    })
        .fail(function() {
            alert( "error" );
        });
}

function onClickToMenu(){ // fonction permettant de retourner au menu s'executant lors de l'appuie sur le bouton retour qui est présent sur la page de détail de n'importe quel jeu
    document.location.reload();
}

function onClickBtBuy(){ // fonction permettant d'ajouter une ou plusieurs fois un jeu dans son panier
    var result = "";
    $.post("../shoppingcart.php", {}, function(results){
        result = JSON.parse(results);
        for(let i = 0; i < result.Coverimage.length; i++){
            if(result.Coverimage[i] == $("#cover").attr("src")){
                if(localStorage.getItem("shoppingcart") != null){
                    cart = JSON.parse(localStorage.getItem("shoppingcart"));
                    let modifquantity = 0;
                    for(let j = 0; j < cart.items.length; j++){
                        if(cart.items[j] == i){ // si le jeu déjà dans le panier , permet d'incrémenter juste la quantité
                            cart.quantity[j] += parseInt($("#qtbuyinput").val());
                            localStorage.setItem("shoppingcart", JSON.stringify(cart));
                            alert(`${result.Name[i]} a été correctement acheté`);
                            modifquantity++;
                        }
                    }
                    if(modifquantity == 0){
                        cart.items.push(i);
                        cart.quantity.push(parseInt($("#qtbuyinput").val()));
                        localStorage.setItem("shoppingcart", JSON.stringify(cart));
                        alert(`${result.Name[i]} a été correctement acheté`);
                    }
                }else{
                    cart.items.push(i);
                    cart.quantity.push(parseInt($("#qtbuyinput").val()));
                    localStorage.setItem("shoppingcart", JSON.stringify(cart));
                    alert(`${result.Name[i]} a été correctement acheté`);
                }
            }
        }
    })
        .fail(function() {
            alert( "error" );
        });


    /*
    */
}

function onClickShoppingcart() { // fonction permettant de faire une petite animation et d'afficher ou de faire disparaître le panier
    if (localStorage.getItem("shoppingcart") != null) {
        if (shoppingcartclicked === 0) {
            $("header #shoppingcart").off("click");
            setShoppingcart(true);
        } else {
            $("header #shoppingcart").off("click");
            $(".dustbins").hide();
            $("#dustbinallitems").hide();
            $("body #cart").animate({width: "toggle"}, 700, function(){
                $("body #cart").html("");
                $(".dustbins").show();
                $("#dustbinallitems").show();
                $("header #shoppingcart").on("click", onClickShoppingcart);
            }).animate({width: "toggle"}, 0);
            shoppingcartclicked = 0;
        }
    }else{
        cart.items = [];
        cart.quantity = [];
        localStorage.setItem("shoppingcart", JSON.stringify(cart));
        onClickShoppingcart();
    }
}

function onChangeQtCart(event){ // fonction permettant de changer le prix total lors du changement d'une quantité d'un ou plusieurs jeu(x)
    let result = "";
    $.post("../shoppingcart.php", {}, function(results) {
        result = JSON.parse(results);
        cart.quantity[event.data.id] = $("#qtinputitem" + event.data.id).val();
        localStorage.setItem("shoppingcart", JSON.stringify(cart));
        totalprice = 0;
        for (let i = 0; i < cart.items.length; i++) {
            totalprice += result.Price[cart.items[i]] * cart.quantity[i];
        }
        $("#ptotal").html("Total : " + totalprice.toFixed(2) + " €");
    });
}

function onClickDustbinItem(event){ // fonction permettant de supprimer un jeu du panier s'execute lors du clique sur la poubelle à côté du jeu qu'on veut supprimer
    cart.items.splice(event.data.id, 1);
    cart.quantity.splice(event.data.id, 1);
    localStorage.setItem("shoppingcart", JSON.stringify(cart));
    $("body #cart").html("");
    shoppingcartclicked = 0;
    setShoppingcart(false);
}

function setShoppingcart(animate){ // fonction permettant d'afficher le panier et de faire une petite animation à l'ouverture de celui-ci
    let result = "";
    $.post("../shoppingcart.php", {}, function(results) {
        result = JSON.parse(results);
        cart = JSON.parse(localStorage.getItem("shoppingcart"));
        totalprice = 0;
        for (let i = 0; i < cart.items.length; i++) {
            totalprice += result.Price[cart.items[i]] * cart.quantity[i];
        }
        $("body #cart").append("<h2 id='carth2' class='cartcl'>Panier</h2><hr>");
        $("body #cart").append("<div id='cartlist' class='cartcl'></div>");
        for (let i = 0; i < cart.items.length; i++) {
            $("#cartlist").append("<div class='cartitems cartcl'><div class='qtdivs cartcl'><input type='number' id='qtinputitem" + i + "' class='qtinputitems cartcl' value='" + parseInt(cart.quantity[i]) + "' min='1' max='100'><label class='qtlabel cartcl'> x </label></div><div class='infocartdivs cartcl'><h3 class='h3cartitems cartcl'>" + result.Name[cart.items[i]] + "</h3><img class='imgcartitems cartcl' src='" + result.Coverimage[cart.items[i]] + "'><p class='pcartitems cartcl'>" + result.Price[cart.items[i]] + " €</p></div><div class='dustbins cartcl'><img id='dustbinitem" + i + "' class='dustbinimgs cartcl' src='IMG/delete.svg'></div></div>");
            $("#cartlist").append("<hr>");
            $("#qtinputitem" + i).on("change", {id: i}, onChangeQtCart);
            $("#dustbinitem" + i).on("click", {id: i}, onClickDustbinItem);
        }
        $("body #cart").append("<div id='totalcart' class='cartcl'><p id='ptotal' class='cartcl'>Total : " + totalprice.toFixed(2) + " €</p><img id='dustbinallitems' class='cartcl' src='IMG/delete.svg'></div>");
        if (cart.items.length != 0) {
            $("#dustbinallitems").on("click", onClickDustbinAllitems);
        } else {
            $("#dustbinallitems").remove();
        }
        if (animate == true) {
            $("body #cart").animate({width: "toggle"}, 0, function () {
                $(".dustbins").hide();
                $("#dustbinallitems").hide();
            }).animate({width: "toggle"}, 700, function () {
                $(".dustbins").show();
                $("#dustbinallitems").show();
                $("header #shoppingcart").on("click", onClickShoppingcart);
                completelyopen = 1;
            });
        }
        shoppingcartclicked = 1;
    });
}

function onClickDustbinAllitems(){ // fonction permettant de supprimer tous les jeux du panier lors de l'appuie sur la poubelle rouge à côté du total
    cart.items = [];
    cart.quantity = [];
    localStorage.setItem("shoppingcart", JSON.stringify(cart));
    $("body #cart").html("");
    shoppingcartclicked = 0;
}

function onSignupClick(){
    $.post("../inscription.php", {}, function(results){
        $("body").html(results);
        $("#return").on("click", onClickToMenu);
        $("header #shoppingcart").on("click", onClickShoppingcart);
        $("#buybt").on("click", onClickBtBuy);
        $("#inscriptionform").on("submit", onClickSubmitInscription);
        if(sessionStorage.getItem("login") == null){
            $.post("../login.php", {}, function (results) {
                $("#loginheader").html(results);
                $('#login-trigger').on("click", loginTrigger);
                $("#loginform").on("submit", onSubmitLogin);
                $("#signup").on("click", onSignupClick);
            });
        }else {
            $.post("../login.php", {
                email: JSON.parse(sessionStorage.getItem("login")).email,
                usergroup: JSON.parse(sessionStorage.getItem("login")).usergroup
            }, function (results) {
                $("#loginheader").html(results);
                $('#profile-trigger').on("click", profileTrigger);
                $("#disconnectbutton").on("click", disconnect);
                $("#dashboardbutton").on("click", onClickDashboard);
                $("#settingsbutton").on("click", onClickSettings);
            });
        }
    })
        .fail(function() {
            alert( "error" );
        });
}

function loginTrigger(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;');
    else $(this).find('span').html('&#x25BC;');
}

function profileTrigger(){
    $(this).next('#profile-content').slideToggle();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;');
    else $(this).find('span').html('&#x25BC;');
}

function onClickSubmitInscription(event){
    event.preventDefault();
    $.post("../DBinscription.php", {Email: $("#usernameinscription").val(),
        Password: $("#passwordinscription").val(), Nom: $("#nominscription").val(), Prenom: $("#prenominscription").val()}, function(results){
        alert(results);
        $("header #shoppingcart").on("click", onClickShoppingcart);
        $("#buybt").on("click", onClickBtBuy);
        $('#login-trigger').on("click", loginTrigger);
        $("#signup").on("click", onSignupClick);
        $("#inscriptionform").on("submit", onClickSubmitInscription);
    })
        .fail(function() {
            alert( "error" );
        });
}

function onSubmitLogin(event){
    event.preventDefault();
    $.post("../DBlogin.php", {Email: $("#usernamelogin").val(), Password: $("#passwordlogin").val()}, function(results){
        if(results != "KO"){
            let jsonresult = JSON.parse(results);
            sessionStorage.setItem("login", results);
            $.post("../login.php", {email: jsonresult.email, usergroup: jsonresult.usergroup}, function(results){
               $("#loginheader").html(results);
                $('#profile-trigger').on("click", profileTrigger);
                $("#disconnectbutton").on("click", disconnect);
                $("#dashboardbutton").on("click", onClickDashboard);
                $("#settingsbutton").on("click", onClickSettings);
            });
        }
    });
}

function disconnect(){
    sessionStorage.removeItem("login");
    $.post("../login.php", {}, function (results) {
        $("#loginheader").html(results);
        $('#login-trigger').on("click", loginTrigger);
        $("#loginform").on("submit", onSubmitLogin);
        $("#signup").on("click", onSignupClick);
    });
}

function onClickDashboard(event){

    $.post("../profile/dashboard.php", {Usergroup: JSON.parse(sessionStorage.getItem("login")).usergroup}, function (results) {
        $("body").html(results);
        $("#return").on("click", onClickToMenu);
        $("header #shoppingcart").on("click", onClickShoppingcart);
        $("#buybt").on("click", onClickBtBuy);
        $("#managearticlesbuttons").on("click", onClickManageArticles);
        if(sessionStorage.getItem("login") == null){
            $.post("../login.php", {}, function (results) {
                $("#loginheader").html(results);
                $('#login-trigger').on("click", loginTrigger);
                $("#loginform").on("submit", onSubmitLogin);
                $("#signup").on("click", onSignupClick);
            });
        }else {
            $.post("../login.php", {
                email: JSON.parse(sessionStorage.getItem("login")).email,
                usergroup: JSON.parse(sessionStorage.getItem("login")).usergroup
            }, function (results) {
                $("#loginheader").html(results);
                $('#profile-trigger').on("click", profileTrigger);
                $("#disconnectbutton").on("click", disconnect);
                $("#dashboardbutton").on("click", onClickDashboard);
                $("#settingsbutton").on("click", onClickSettings);
            });
        }
    });
}

function onClickSettings(){
    $.post("../profile/settings.php", {Usergroup: JSON.parse(sessionStorage.getItem("login")).usergroup}, function (results) {
        $("body").html(results);
    });
}

function onClickManageArticles(event){
    $.post("../profile/ArticlesManagement/index.php", {}, function (results) {
        $("body").html(results);
        $("#return").on("click", onClickToMenu);
        $("header #shoppingcart").on("click", onClickShoppingcart);
        $("#buybt").on("click", onClickBtBuy);
        if(sessionStorage.getItem("login") == null){
            $.post("../login.php", {}, function (results) {
                $("#loginheader").html(results);
                $('#login-trigger').on("click", loginTrigger);
                $("#loginform").on("submit", onSubmitLogin);
                $("#signup").on("click", onSignupClick);
            });
        }else {
            $.post("../login.php", {
                email: JSON.parse(sessionStorage.getItem("login")).email,
                usergroup: JSON.parse(sessionStorage.getItem("login")).usergroup
            }, function (results) {
                $("#loginheader").html(results);
                $('#profile-trigger').on("click", profileTrigger);
                $("#disconnectbutton").on("click", disconnect);
                $("#dashboardbutton").on("click", onClickDashboard);
                $("#settingsbutton").on("click", onClickSettings);
            });
        }
    });
}