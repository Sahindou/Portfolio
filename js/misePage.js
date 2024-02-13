$(document).ready(function(){
    // Fonction pour charger le contenu d'un fichier externe dans un div spécifique
    function loadContent(pageUrl, targetDiv) {
        $.ajax({
            url: pageUrl,
            dataType: 'html',
            success: function(response) {
                $(targetDiv).text(response);
            },
            error: function(xhr, status, error) {
                console.error('Erreur lors du chargement du contenu: ' + error);
            }
        });
    }

    // Écouteurs d'événements pour les boutons
    $('#btnAbout').click(function(){
        loadContent('template/about.html', "#content"); // Charge le contenu de about.html dans #content
    });

    $('#btnContact').click(function(){
        loadContent('contact.html', '#content'); // Charge le contenu de contact.html dans #content
    });
});
