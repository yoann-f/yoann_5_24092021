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


lsProductID = () => {
    var idProduct = getProductID();
    localStorage.lsProductID = idProduct;
}

/*
* Déclaration de la variable addToCartClass permettant de cibler le bouton d'ajout au panier
* La variable lsqty retourne à sa valeur par défaut (var lsqty = 0)
* Ajout d'un "addEventListener" sur ce bouton.
* Lorsque l'utilisateur clique sur le bouton d'ajout au panier :
        - La valeur de lsqty est raffraichît et ajoute +1 à 0 directement
        - Création de la localStorage lsQTY (si inexistante) ou remplacement de la valeur indiquée par la nouvelle valeur de la variable lsqty
* Lorsque l'utilisateur sélectionne une couleur dans le menu déroulant, il réinitialise la valeur de lsqty à 0
*/
lsProductQTY = () => {
    const addToCartClass = document.getElementById("addToCart");

    addToCartClass.addEventListener("click", () => {
        lsqty++;
        localStorage.lsQTY = lsqty;
    });

    const changeProductOption = document.getElementById("product-option");
    changeProductOption.addEventListener("change", () => {
        lsqty = -1;
        lsqty++;
        localStorage.lsQTY = lsqty;
    });
}


/*FONCTION APPELÉE SUR CHAQUE PAGE
* Vérifie si la localStorage "cartQTY" existe et a une valeur
*       ==> Si oui: Récupère la valeur de la localStorage "cartQTY"
*       ==> Si non: cartQTY est créé avec une valeur par défaut de 0
* Affiche cette valeur dans le bouton-panier présent sur chaque page
*/
getProductQTY = (qty) => {
    var myqty = document.getElementById("qty-cart");
    var qty = localStorage.getItem("cartQTY");
    myqty.innerText = qty;

    if (localStorage.getItem("cartQTY") && localStorage.cartQTY >= 0) {
      console.log("%cL'indication pour la quantité de produit existe dans le localstorage :", "background: #222; color: #bada55", "KEY= cartQTY / Value= ", localStorage.cartQTY);
    } else {
      let myqty = 0;
      localStorage.setItem("cartQTY", JSON.parse(myqty));
      console.log("%cL'indication pour la quantité de produit n'existait pas dans le localstorage et a été créé :", "background: #222; color: #bada55", "KEY= cartQTY / Value= ", localStorage.cartQTY);
    }
}

/*FONCTION PERMETTANT D'AJOUTER UN PRODUIT A CHAQUE CLIC UTILISATEUR LA QUANTITÉ TOTALE DE PRODUIT DANS LE PANIER
* Récupèration de la valeur de la localStorage "cartQTY" (par défaut cartQTY = 0)
* Déclaration de la variable addToCartClass = document.getElementById("addToCart"); 
* L'utilisateur clique sur le bouton "Ajouter au panier" : addEventListener("click", () => {}
* Incrémente de 1, la variable cartQTY lors de chaque cliques
* Retourne la valeur de cartQTY à l'élément html ayant pour id "qty-cart"
* Envoi de la nouvelle valeur à la localStorage "cartQTY"
*/
addProductQTY = () => {
    var cartQTY = JSON.parse(localStorage.cartQTY);
    const addToCartClass = document.getElementById("addToCart");

    addToCartClass.addEventListener("click", () => {
        cartQTY++;
        document.getElementById("qty-cart").innerHTML = cartQTY;
        localStorage.cartQTY = cartQTY;
    })
}

/*FONCTION DE RÉCUPÉRATION DE LA COULEUR DU PRODUIT AJOUTÉ AU PANIER*/
getProductColor = () => {
    var couleur = document.getElementById("product-option").value; //Je récupère la couleur sélectionnée
    localStorage.lsColor = couleur;
};


//Ajoute un produit au panier
addProductToCart = () => {
  const addToCartClass = document.getElementById("addToCart");

  addToCartClass.addEventListener("click", () => {
    console.log('La fonction "addProductToCart" a été exécuté.');
    
    //Création du productItemClass lors du clic
    

    //Vérification des données du produit
    if ((productItem.product_ID == localStorage.lsProductID) && (productItem.product_COLOR == localStorage.lsColor)) {
        productItem.product_QTY = localStorage.lsQTY;

        cartList = JSON.stringify(productList);
        localStorage.setItem("cartList", cartList);

        } else {
        productItem = new productItemClass(localStorage.lsProductID, localStorage.lsColor, localStorage.lsQTY);
        productList.push(productItem);
        cartList = JSON.stringify(productList);
        console.log("#3: La variable productList vaut :", productList); 
        localStorage.setItem("cartList", cartList);

        }
    });
};


/*Ce que je dois vérifier :
if ((localStorage.lsProductID) && (localStorage.lsColor) {

} else ...
*/

/*FONCTION PERMETTANT DE MANIPULER LE PANIER*/
//Vérifie la liste des produits présents dans le panier
checkCartProductList = () => {

};

//Vérifie la présence d'un produit dans le panier
checkCartProductItem = () => {

};


//Supprime un produit du panier
deleteProductFromCart = () => {

};



/*
Créer fonctions :

- Vérification 

*/