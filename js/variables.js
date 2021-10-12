/*FICHIER CONTENANT L'ENSEMBLE DES VARIABLES JAVASCRIPT DU SITE*/


/*VARIABLES DONT LA VALEUR RESTE CONSTANTE*/
    //Déclaration de l'url de l'API en variable
    const URL_API = "https://teddies-api.herokuapp.com/api/";

    //Déclaration en variable du type de produit vendu dans la boutique. Options possibles : "cameras", "teddies" ou "furniture"
    const productType = "teddies";


/*VARIABLES DONT LA VALEUR EST RÉINITIALISÉE A CHAQUE CHARGEMENT DE PAGE*/
    //Déclaration de la variable lsqty qui permet de remettre à zéro la quantité
    var lsqty = 0;


/*VARIABLES A VALEUR ÉVOLUTIVE*/
    var cartQTY = localStorage.cartQTY;
    var cartList;


    // Variable pour le panier
    //Tableau: On récupère l'ensemble des tableaux produits (product_ID + product_QTY)
    if (productList != undefined) {
        var productList = JSON.parse(localStorage.cartList);
        console.log("#1: Ma variable productList vaut :", productList);
    } else {
        var productList = [];
        console.log("#2: Ma variable productList vaut :", productList);    
    };
    /*var productItem = {}; //Je déclare un OBJET: on récupère les valeurs product_ID, product_QTY et product_COLOR
    var product_ID; //String de l'url produit
    var product_QTY; //Integer: on récupère la quanttié de produit
    var product_COLOR; //String de la couleur du produit*/


/* 
* Création du constructor "productItem"
* Se rapporte à productList
*/
class productItem {
  constructor(product_ID, product_COLOR, product_QTY) {
    this.product_ID = product_ID;
    this.product_COLOR = product_COLOR;
    this.product_QTY = product_QTY;
  }
}