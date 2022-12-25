// console.log('side cart');

blankBgOpen = () => {
    document.querySelector('.black-bg').classList.add('active');
    document.querySelector('body').classList.add('overflow-hidden');
};

blankBgClose = () => {
document.querySelector('.black-bg').classList.remove('active');
document.querySelector('body').classList.remove('overflow-hidden');
};

openSideCartLoader = (parent) => {
document.querySelector('.side_cart_wrapper_fixed').classList.add('active');
parent.querySelector('.side-cart-loader').classList.add('active');
}

closeSideCartLoader = ()=>{
document.querySelector('.side_cart_wrapper_fixed').classList.remove('active');
let loader = document.querySelectorAll('.side-cart-loader');
if(loader.length > 0){
    loader.forEach((item,i)=>{
    item.classList.remove('active');
    })
}
}

miniCartOpen = () => {
document.querySelector("#side_cart").classList.add("active");
blankBgOpen();
};

miniCartInit = async (open) => {
let url = "/cart?view=sidecart";
let miniCart = await fetch(url);
if(miniCart.ok){
    // console.log(miniCart);
    miniCart = await miniCart.text();
    if (document.querySelector("#side_cart")) {
    document.querySelector("#side_cart").innerHTML = "";
    let divContent = document.createElement("div");
    let parser = new DOMParser();
    let cartpage = parser.parseFromString(miniCart, 'text/html');
    // console.log(parser.parseFromString(miniCart, 'text/html'));
    cartpage = cartpage.body.innerHTML;
    divContent.innerHTML = cartpage;
    let innerHt = divContent.querySelector('#side_cart').innerHTML;
    document.querySelector("#side_cart").innerHTML = innerHt;
    let count = document.querySelector("#side_cart .count.hide").textContent;
    document.querySelector(".cart_item_counter").innerHTML= count;
    closeSideCartLoader();
    if (open) {
        miniCartOpen();
    }
    cartChangeEvent();
    }
}
};

changeItem = async (item) => {
let data = {};
data.line = item.getAttribute('data-id');
data.quantity = item.querySelector('input.product_qty').value;
let items = await fetch('/cart/change.js',{
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body:JSON.stringify(data)
})
if(items.ok){
    items = await items.json();
    miniCartInit();
}
}

miniCartClose = () => {
document.querySelector("#side_cart").classList.remove("active");
blankBgClose();
}

cartChangeEvent = () => {
document.querySelector(".black-bg").addEventListener("click",()=>{
    miniCartClose();
});
document.querySelector(".cart-wrap-header").addEventListener("click",(e)=>{
    e.preventDefault();
    miniCartOpen();
});
document.querySelector(".sidecart_icon_mobile").addEventListener("click",(e)=>{
    e.preventDefault();
    miniCartOpen();
});
document.querySelector(".toggleCart-close").addEventListener("click",()=>{
    miniCartClose();
});
let plusItem = document.querySelectorAll(".items .spinner .spinner-plus");
let minusItem = document.querySelectorAll(".items .spinner .spinner-min");
let removeItem = document.querySelectorAll(".items .remove");
if(plusItem){
    plusItem.forEach(item=>{
    item.addEventListener("click",(e)=>{
        // console.log('click here to add item!');
        let that = e.currentTarget;
        let parent = that.closest('.items');
        openSideCartLoader(parent);
        let target = parent.querySelector('.product_qty');
        let value = parseInt(target.value) + 1;
        const event = new Event("change");
        target.value = value;
        target.dispatchEvent(event);
    });
    })
}
if(minusItem){
    minusItem.forEach(item=>{
    item.addEventListener("click",(e)=>{
        let that = e.currentTarget;
        let parent = that.closest('.items');
        openSideCartLoader(parent);
        let target = parent.querySelector('.product_qty');
        let value = parseInt(target.value);
        if (value > 0) {
        value = value - 1;
        const event = new Event("change");
        target.value = value;
        target.dispatchEvent(event);
        }
    });
    })
}
if(removeItem){
    removeItem.forEach(item=>{
    item.addEventListener("click", async(e)=>{
        let that = e.currentTarget;
        let parent = that.closest('.items');
        openSideCartLoader(parent);
        that.innerHTML = "Removing";
        if(parent.classList.contains('bundle-item')){
        let bid = parent.getAttribute('data-bid');
        let cartJson = await fetch('/cart.js');
        cartJson = await cartJson.json();
        if(cartJson.items.length > 0){
            let items = [];
            cartJson.items.map(item=>{
            if(item && item.properties && item.properties['_bid'] == bid){
                items.push(0);
            }else{
                items.push(item.quantity);
            }
            })
            let hello = await fetch('/cart/update.js', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({updates: items}),
            })
            .then(response => response.json())
            .then(data => {
            miniCartInit(true);
            })
            .catch((error) => {
            console.log(error);
            });
        }
        }else{
        let input = parent.querySelector('.product_qty');
        input.value = 0;
        changeItem(parent);
        }
    });
    })
}
let productQty = document.querySelectorAll(".items input.product_qty");
if(productQty){
    productQty.forEach(item=>{
    item.addEventListener("change",(e)=>{
        let that = e.currentTarget;
        let parent = that.closest('.items');
        openSideCartLoader(parent);
        changeItem(parent);
    });
    })
}
let updateMobile = document.querySelectorAll(".template_cart [name='updates_mobile']");
if(updateMobile){
    updateMobile.forEach(item=>{
    item.addEventListener("change",(e)=>{
        let that = e.currentTarget;
        let input = that.closest('.items').find('input.product_qty');
        input.value = that.value;
        const event = new Event("change");
        input.dispatchEvent(event);
    });
    })
}
}

cartChangeEvent();
miniCartInit();


if(!document.querySelector('body').classList.contains('template-cart')){
  sidecartOpen = () => {
    miniCartInit(true);
  }
}