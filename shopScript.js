console.log("shopScript.js is Active");

//Cart Functionality
let cartIcon = document.querySelector('#cartIcon');
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#closeCart");
let shopContent = document.querySelector(".shopContent");

cartIcon.onclick = function(){
    cart.classList.add("active");
    shopContent.classList.add("active");
};

closeCart.onclick = function(){
    cart.classList.remove("active");
    shopContent.classList.remove("active");
};

//cart working
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

//Making Functions
function ready(){
    var removeCartButtons = document.getElementsByClassName('bx-trash')
    console.log(removeCartButtons);
    for(var i =0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quanityInputs = document.getElementsByClassName('cartQuanity');
    for(var i =0; i < quanityInputs.length; i++){
        var input = quanityInputs[i];
        input.addEventListener('change', quanityChanged);
    }

    updateTotal();

    var addCart = document.getElementsByClassName('bx-cart-add');
    for(var i =0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
    }
}

document.getElementsByClassName("buyButton")[0].addEventListener('click', buyButtonClicked);

function buyButtonClicked(){
    alert("Your order is placed!");
    var cartContent = document.getElementsByClassName("cartContent")[0];
while(cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
}
updateTotal();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quanityChanged(event){
var input = event.target;
if(isNaN(input.value) || input.value <= 0){
    input.value = 1
}
updateTotal();
}

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('productTitle')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var image = shopProducts.getElementsByClassName('productImg')[0].src;


    addProductToCart(title, price, image);
    updateTotal();

}

function addProductToCart(title, price, image){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cartBox');
    var cartItems = document.getElementsByClassName('cartContent')[0];
    var cartItemNames = cartItems.getElementsByClassName('cartProductTitle')
    for(var i =0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert("You have already added this item to your cart");
        return;
        }
    }



var cartBoxContent = `
                        <img src="${image}" class="cartImg">
                        <div class="detailBox">
                            <div class="cartProductTitle"> ${title}</div>
                            <div class="cartPrice">${price}</div>
                            <input type="number" value="1" class="cartQuanity">
                        </div>

                        <i class='bx bx-trash'></i> `;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName("bx-trash")[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName("cartQuanity")[0].addEventListener('change', quanityChanged);

};


function updateTotal(){
    var cartContent = document.getElementsByClassName('cartContent')[0];
    var cartBoxes = cartContent.getElementsByClassName('cartBox');
    var total = 0;
    for(var i =0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cartPrice')[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantityElement = cartBox.getElementsByClassName('cartQuanity')[0];
        var quanity = quantityElement.value;
        total = total + (price * quanity);
    }
        total = Math.round(total * 100 ) / 100;

        document.getElementsByClassName('totalPrice')[0].innerText = "$" + total;
    
}


