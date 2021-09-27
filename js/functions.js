/*FICHIER CONTENANT L'ENSEMBLE DES FONCTIONS JAVASCRIPT DU SITE*/


/*FONCTION PERMETTANT DE RÉCUPÉRER L'ID PRODUIT*/
getProductID = (id) => {
    //A l'aide de la propriété "search", de l'interface "location", j'isole une chaîne de requête contenant un "?", suivi de paramètres URL
    const urlPage = window.location.search;

    //Une fois le paramètre URL isolé, je récupère uniquement l'élément qui m'intéresse, dans mon cas, l'ID du produit présent dans l'URL
    const urlProductPage = new URLSearchParams(urlPage);

    //Récupération de l'ID du produit présenté sur la page
    idProduct = urlProductPage.get("id");    

    //Met fin à l'éxécution de la fonction et définit une valeur à renvoyer à la fonction appelante
    return idProduct; 
};


/*FONCTION PERMETTANT LA RÉCUPÉRATION DE LA QUANTITÉ DE PRODUITS PRÉSENTS DANS LE PANIER*/
/*Je récupère la quantité de produit ajouté au panier et l'affiche dans le panier en page d'accueil*/
getProductQTY = (qty) => {
    var myqty = document.getElementById("qty-cart");
    var qty = localStorage.getItem("cartQTY");
    myqty.innerText = qty;
};


/*FONCTION DE RÉCUPÉRATION DE LA COULEUR DU PRODUIT AJOUTÉ AU PANIER*/
getProductColor = () => {

};


/*FONCTION PERMETTANT DE MANIPULER LE PANIER*/
//Vérifie la liste des produits présents dans le panier
checkCartProductList = () => {

};

//Vérifie la présence d'un produit dans le panier
checkCartProductItem = () => {

};

//Ajoute un produit au panier
addProductToCart = () => {

};

//Supprime un produit du panier
deleteProductFromCart = () => {

};