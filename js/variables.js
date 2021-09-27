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
    var cardQTY = localStorage.cardQTY;
    var cardList;

    // Variables pour le panier



    var productItem = {}; //Je déclare un OBJET: on récupère les valeurs product_ID, product_QTY et product_COLOR
    var product_ID; //String de l'url produit
    var product_QTY; //Integer: on récupère la quanttié de produit
    var product_COLOR; //String de la couleur du produit