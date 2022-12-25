// console.log('hello there');

miniCartOpen = () => {
    document.querySelector("#side_cart").classList.add("active");
    // blankBgOpen();
}; 


miniCartInit = async (open) => {
    // console.log("call");
    let url = "/cart?view=sidecart";
    let miniCart = await fetch(url);
    if (miniCart.ok) {
      // console.log('hello there this is side cart!');
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
        // closeSideCartLoader();
        if (open) {
          miniCartOpen();
        }
        // this.cartChangeEvent();
      }
    }
};



// if(!document.querySelector('body').classList.contains('template-cart')){
//     sidecartOpen = () => {
//     miniCartInit(true);
//     }
// }

ajaxAddtocart = async (items, flag) => {
    let add = await fetch('/cart/add.js', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ items })
    });
    if (add.ok) {
        add = await add.json();
        if (flag) {
            let sizeChartEle = document.querySelector('.size-chart-main-wrap');
            if (sizeChartEle && sizeChartEle.classList.contains('show-popup')) {
                sizeChartEle.classList.remove('show-popup');
            }
            miniCartInit(true);
            // miniCartOpen();
            // sidecartOpen();
        }
    }
}

clickEvent = () => {

    let productPageAdd = document.querySelectorAll(".product-add-to-cart");
    if (productPageAdd.length > 0) {
        productPageAdd.forEach((item, i) => {
            item.addEventListener("click", (e) => {
                // alert('you have clicked the button!');
                // console.log('clicked');
                let that = e.currentTarget;
                let qty = parseInt(document.querySelector('.product_qty_num').value);
                let swatch_elem = document.querySelector(".swatch-element");
                let selected_value = document.querySelector(".selected-value");
                if (that.classList.contains('default_variant')) {
                    let vid = parseInt(that.getAttribute('data-id'));
                    // console.log(vid);
                    let items = [];
                    items = [{ id: vid, quantity: qty }];
                    ajaxAddtocart(items, true);
                }
                else {
                    let id = parseInt(document.querySelector('.variants-list').selectedOptions[0].getAttribute('data-id'));
                    if (id != 1) {
                        let custimizeEle = document.querySelector('.custimize-size-input');
                        let items = [];
                        if (custimizeEle) {
                            let obj = {};
                            let innerParent = document.querySelector('.size-table.in');
                            let custiInput = innerParent.querySelectorAll('.custimize-size-input input');

                            innerParent.querySelectorAll('thead th').forEach((ele, index) => {
                                let objName = ele.textContent;
                                if (objName != 'Size') {
                                    obj[objName] = custiInput[index - 1].value;
                                }
                            })
                            items = [{ id: id, quantity: qty, properties: obj }];
                        } else {
                            // console.log(custiInput);
                            items = [{ id: id, quantity: qty }];
                        }
                        console.log(id);

                        ajaxAddtocart(items, true);
                    } else {
                        // jQuery(".swatch-element").removeClass('active');
                        selected_value.innerHTML = "Select Size";
                        swatch_elem.classList.remove('active');
                        variant_err.style.display = "block"
                        // console.log('click');
                    }
                }
            });
        })
    }
    // this.miniCartInit(true);
}

miniCartInit();
clickEvent();

// console.log('cart page is end here!');