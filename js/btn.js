function btnShowAbout(btnId) {
    $('#aboutAlternance').hide("slow");
    $('#fh5co-resume').hide("slow");
    $('#fh5co-work').hide("slow");
    $("#container-" + btnId).show("slow");
}

function btnHideAbout(btnId) {
    $('#aboutAlternance').show("slow");
    $("#container-" + btnId).hide("slow");
    $('#fh5co-resume').hide("show");
    $('#fh5co-work').hide("show");
}


function btnShow2(btnId){
    switch(btnId){
        case "resume":
            $('#fh5co-' + btnId).show("slow");
            $('#fh5co-work').hide("slow");
            $('#aboutAlternance').hide("slow");
            $("#container-About").hide("slow");
        break;
        case "work":
            $('#fh5co-' + btnId).show("slow");
            $('#fh5co-resume').hide("slow");
            $('#aboutAlternance').hide("slow");
            $("#container-About").hide("slow");
        break;
        case "skills":
            $('#fh5co-' + btnId).show("slow");
            $('#fh5co-work').hide("slow");
            $('#aboutAlternance').hide("slow");
            $("#container-About").hide("slow");
            $('#fh5co-resume').hide("slow");
        break;
    }
}

function btnHide2(btnId){
    switch(btnId){
        case "resume":
            $('#fh5co-' + btnId).hide("slow");
            $('#fh5co-work').hide("slow");
            $('#aboutAlternance').show("slow");
            $("#container-About").hide("slow");
        break;
        case "work":
            $('#fh5co-' + btnId).hide("slow");
            $('#fh5co-resume').hide("slow");
            $('#aboutAlternance').show("slow");
            $("#container-About").hide("slow");
        break;
        case "skills":
            $('#fh5co-' + btnId).hide("slow");
            $('#fh5co-work').hide("slow");
            $('#aboutAlternance').show("slow");
            $("#container-About").hide("slow");
            $('#fh5co-resume').hide("slow");
        break;
    }
}



$(document).ready(function() {

    //Vérification des btn
    var btnAboutClique = false;
    var btnForClique   = false;
    var btnWorkClique  = false;
    var btnSkillClique = false;

    // Cacher tous les autres sections
    $('.containerAbout').hide();
    $('#fh5co-resume').hide();
    $("#fh5co-work").hide();
    $("#fh5co-skills").hide();
    
    //mise en écouteur des btn
    $('.btn').click(function() {
        // Récupération de l'id
        var btnId = $(this).attr('id');

        switch(btnId) {
            case "About":
                //vérification de l'état du btn / faire l'inverse du btn
                if(btnAboutClique){btnHideAbout(btnId);}
                //Faire ce qu'on attend du btn
                else{btnShowAbout(btnId);}
                btnAboutClique = !btnAboutClique;
            break;
            case "resume":
                //vérification
                if(btnForClique){btnHide2(btnId);}
                else{btnShow2(btnId);}
                btnForClique = !btnForClique;
            break;
            case "work":
                //vérification
                if(btnWorkClique){btnHide2(btnId);}
                else{btnShow2(btnId);}
                btnWorkClique = !btnWorkClique;
            break;
            case "skills":
                //vérification
                if(btnSkillClique){btnHide2(btnId);}
                else{btnShow2(btnId);}
                btnSkillClique = !btnSkillClique;
            break;
        }
    });
});


/*$(document).ready(function(){
    var btnAboutClique = false;
    $('.containerAbout').hide();    

    // Ajout de l'écouteur d'événements sur le bouton avec l'ID "myBtn"
    $('#btnAbout').click(function(){
        // Action à exécuter lorsque le bouton est cliqué
        $("#aboutAlternance").hide();
        $('.containerAbout').show("slow");

        // Vérification de l'état du bouton
        if (btnAboutClique) {
            // Si le bouton a déjà été cliqué, faire l'inverse de l'action précédente
            // Dans cet exemple, afficher un message d'alerte
            $("#aboutAlternance").show("slow");
            $('.containerAbout').hide();
        } else {
            // Si le bouton n'a pas encore été cliqué, faire l'action initiale
            // Dans cet exemple, afficher un autre message d'alerte
            $("#aboutAlternance").hide();
            $('.containerAbout').show("slow");
        }

        btnAboutClique = !btnAboutClique;
    });
});*/

