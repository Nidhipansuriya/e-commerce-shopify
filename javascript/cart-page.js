// import { closeCartLoader, openCartLoader } from "./helper";



openCartLoader = (parent) => {
  document.querySelector('.cart_form_wrapper_fixed').classList.add('active');
  parent.querySelector('.cart-loader',parent).classList.add('active');
}
closeCartLoader = ()=>{
  document.querySelector('.cart_form_wrapper_fixed').classList.remove('active');
  let loader = document.querySelectorAll('.cart-loader');
  if(loader.length > 0){
    loader.forEach((item,i)=>{
      item.classList.remove('active');
    })
  }
}


class CartPage{
    constructor(){
      this.init();
    }
    miniCartInit = async () => {
      let url = "/cart?view=cartpage";
      let miniCart = await fetch(url);
      if(miniCart.ok){
        miniCart = await miniCart.text();
        if (document.querySelector(".template_cart")) {
          document.querySelector(".template_cart .main-cart-wrapper").innerHTML = "";
          let divContent = document.createElement("div");
          let parser = new DOMParser();
          let cartpage = parser.parseFromString(miniCart, 'text/html');
          cartpage = cartpage.body.innerHTML;
          divContent.innerHTML = cartpage;
          let innerHt = divContent.querySelector('.main-cart-wrapper').innerHTML;
          document.querySelector(".main-cart-wrapper").innerHTML = innerHt;
          let count = document.querySelector(".template_cart .count.hide").textContent;
          document.querySelector(".cart_item_counter").innerHTML= count;
          closeCartLoader(parent);
          this.cartChangeEvent();
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
        this.miniCartInit();
      }
    }
    cartChangeEvent = () => { 
      let plusItems = document.querySelectorAll(".items .spinner .spinner-plus");
      let minusItems = document.querySelectorAll(".items .spinner .spinner-min");
      let removeItems = document.querySelectorAll(".items .remove");
      if(plusItems.length > 0){
        plusItems.forEach(plusItem=>{
          plusItem.addEventListener("click",(e)=>{
            let that = e.currentTarget;
            let parent = that.closest('.items');
            openCartLoader(parent);
            let target = parent.querySelector('.product_qty');
            let value = parseInt(target.value) + 1;
            if(that.classList.contains('mob')){
              parent.querySelector('.product_qty_mobile').value = value;
            }
            const event = new Event("change");
            target.value = value;
            // console.log(target.value);
            target.dispatchEvent(event);
          });
        })
      }
      if(minusItems.length > 0){
        minusItems.forEach(minusItem=>{
          minusItem.addEventListener("click",(e)=>{
            let that = e.currentTarget;
            let parent = that.closest('.items');
            openCartLoader(parent);
            let target = parent.querySelector('.product_qty');
            let value = parseInt(target.value);
            if (value > 0) {
              value = value - 1;
              if(that.classList.contains('mob')){
                  parent.querySelector('.product_qty_mobile').value = value;
              }
              const event = new Event("change");
              target.value = value;
              target.dispatchEvent(event);
            }
          });
        })
      }
      if(removeItems.length > 0){
        removeItems.forEach(removeItem=>{
          removeItem.addEventListener("click",async (e)=>{
            let that = e.currentTarget;
            let parent = that.closest('.items')
            openCartLoader(parent);
            that.innerHTML = "Removing...";
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
                  this.miniCartInit();
                })
                .catch((error) => {
                  console.log(error);
                });
              }
            }else{
              let input = parent.querySelector('.product_qty');
              input.value = 0;
              this.changeItem(parent);
            }
          });
        })
      }
      let productQty = document.querySelectorAll(".items input.product_qty");
      if(productQty){
          productQty.forEach(item=>{
          item.addEventListener("change",(e)=>{
              // console.log("call");
              let that = e.currentTarget;
              let parent = that.closest('.items');
             openCartLoader(parent);
              this.changeItem(parent);
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
    init = () => {
      this.cartChangeEvent();
      this.miniCartInit();
    }
  }
  if(document.querySelector('body').classList.contains('template-cart')){
    new CartPage;
  }
  