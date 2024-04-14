// Création d'un tableau pour stocker les articles
let articles = [];

// Fonction pour ajouter un article à la liste
function ajouterArticle() {
    // Récupération des valeurs des champs d'entrée
    let titre = document.getElementById('titre').value;
    let description = document.getElementById('description').value;

    // Création d'un nouvel objet article
    let article = {
        titre: titre,
        description: description
    };

    // Ajout de l'article à la liste
    articles.push(article);

    // Affichage de l'article dans la console
    console.log("Article ajouté : ", article);

    // Mise à jour de l'affichage de la liste
    afficherListe();
}

// Fonction pour afficher la liste d'articles
function afficherListe() {
    // Récupération de l'élément de la liste
    let liste = document.getElementById('liste');

    // Réinitialisation de la liste
    liste.innerHTML = '';

    // Parcours de la liste d'articles
    for(let i = 0; i < articles.length; i++) {
        // Création d'un nouvel élément de liste
        let element = document.createElement('li');

        // Ajout du titre et de la description à l'élément
        element.innerHTML = "<h2>" + articles[i].titre + "</h2><p>" + articles[i].description + "</p>";

        // Ajout de l'élément à la liste
        liste.appendChild(element);
    }
}
