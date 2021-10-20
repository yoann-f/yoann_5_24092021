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
  

  if (localStorage.cartList != undefined) {
    var productList = JSON.parse(localStorage.cartList);
    console.log("#1: La variable productList vaut :", productList);
  } else {
    var productList = [];
    console.log("#2: La variable productList n'existait pas et a donc été créé :", productList);
  }

  var productItem = {};



/* 
* Création du constructor pour l'objet "productItem"
* Se rapporte à productList
*/
class productItemClass {
  constructor(product_ID, product_COLOR, product_QTY) {
    this.product_ID = product_ID;
    this.product_COLOR = product_COLOR;
    this.product_QTY = product_QTY;
  
    //productList.push(this);
  };
  
};