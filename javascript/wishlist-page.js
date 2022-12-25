import { formatMoney ,setCookie, getCookie } from './helper';
class wishlistPage{
    constructor(){
        this.storeId = custom.storeId;
        this.customerExist = custom.customerExist;
        this.wishlistUrl = custom.wishlistUrl;
        this.wishlistPageUrl = '/pages/wishlist';
        if(this.customerExist){
          this.customerId = custom.customerId;
        }
        this.init();
    }  
    clickEvents = () => {
        let wishlist_delete_btn = document.querySelectorAll(".wishlist-delete-btn");
        if (wishlist_delete_btn.length > 0) {
            wishlist_delete_btn.forEach((item,i) => {
                item.addEventListener("click", (e)=> {
                    let parent = item.closest('.wishlist-item');
                    let proid = parent.getAttribute('data-id');
                    let prohandle = parent.getAttribute('data-handle');
                    this.deleteProduct(proid,prohandle);
                })
            })
        }

        let wishlist_delete_btn_local = document.querySelectorAll(".delete-local-btn");
        if (wishlist_delete_btn_local.length > 0) {
            wishlist_delete_btn_local.forEach((item,i) => {
                item.addEventListener("click", (e)=> {
                    let parent = item.closest('.wishlist-item');
                    let proid = parent.getAttribute('data-id');
                    let prohandle = parent.getAttribute('data-handle');
                    this.deleteProductLocal(proid);
                })
            })
        }

    }

    getCategories = async (id,handle) => {
        // First get all categories from API.
        let url = this.wishlistUrl+'/showAllWishlistProductCategory/'+this.storeId+'/'+this.customerId;
        let getCategories = await fetch(url, {
            method: 'GET'
        })
        getCategories = await getCategories.json();
        let categoriesList = '';
        let available_pro_handle = [];
        let wishlist_items_wrap = document.querySelector(".wishlist-items-wrap");
        if(getCategories.title.length > 0){
            for(let i=0; i<getCategories.title.length;i++){
                let products = '';
                if(getCategories.value[i].length > 0){
                    for(let j=0; j<getCategories.value[i].length;j++){
                        let product = getCategories.value[i][j];
                        let url = window.location.origin+'/products/'+product.p_handle+'.json';
                        let pro_link = window.location.origin+'/products/'+product.p_handle;
                        let getProductData = await fetch(url, {
                            method: 'GET'
                        })
                        if(getProductData.ok){
                            getProductData = await getProductData.json();
                            let product_img = getProductData.product.images[0].src;
                            products += `
                                <div class="wishlist-item" data-id=${product.p_id} data-handle="${product.p_handle}">
                                                <div class="d-flex align-items-center">
                                                    <div class="wishlist-product-info">
                                                        <div class="d-flex flex-nowrap">
                                                            <div class="item-img-wrap">
                                                                <a href="${pro_link}">
                                                                    <img src="${product_img}" alt="product-img" class="wishlist-item-img">
                                                                </a>
                                                            </div>
                                                            <div class="wishlist-item-info">
                                                                <div class="item-info-wrap">
                                                                    <a href="${pro_link}">${getProductData.product.title}</a>
                                                                    <div class="item-price">
                                                                        <span class="money">${formatMoney(getProductData.product.variants[0].price)}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="wishlist-product-price">
                                                        <div class="item-price">
                                                            <span class="money">${formatMoney(getProductData.product.variants[0].price)}</span>
                                                        </div>
                                                    </div>
                                                    <div class="wishlist-product-action">
                                                        <div class="d-flex justify-content-end">
                                                            <button class="wishlist-delete-btn d-flex align-items-center justify-content-center"><img src="//cdn.shopify.com/s/files/1/0588/6528/7346/files/cart-remove.svg?v=8823650813497247124" alt="remove item"/></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
                        }
                        
                        
                    }
                    wishlist_items_wrap.innerHTML = products;
                }
                else{
                    products += `<div class="text-center">
                                    <span class="empty-msg">there is no item in wishlist</span><br>
                                    <span class="empty-msg">add item you want to shop</span>
                                </div>`
                    wishlist_items_wrap.innerHTML = products;
                }
            }
        }
        this.clickEvents();
    }

    deleteProduct = async (proid,prohandle) => {
        let data = {
            'store_id': this.storeId,
            'p_id': proid,
            'p_handle': prohandle,
            'cust_id': this.customerId	
        };
        let products = await fetch(this.wishlistUrl+'/removeFromWishlist', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        products = await products.json();
        this.getCategories();
    }

    productLocal = async (productsData) => {
        // show product existing in wishlist local
        let products = '';
        let wishlist_items_wrap = document.querySelector(".wishlist-items-wrap");
        if(productsData.length > 0){
            for(let i=0; i<productsData.length;i++){
                let product = productsData[i];
                let url = window.location.origin+'/products/'+product.p_handle+'.json';
                let pro_link = window.location.origin+'/products/'+product.p_handle;
                let getProductData = await fetch(url, {
                    method: 'GET'
                })
                if(getProductData.ok){
                    // console.log('ok');
                    getProductData = await getProductData.json();
                    getProductData = getProductData.product
                    // console.log(getProductData);
                    let getProductData_img = '';
                    if(getProductData.images.length != 0 ){
                        getProductData_img = getProductData.images[0].src;
                    }
                    else{
                        // console.log('below 0');
                    }
                    
                    products += `
                    <div class="wishlist-item" data-id=${product.p_id} data-handle="${product.p_handle}">
                    <div class="d-flex align-items-center">
                    <div class="wishlist-product-info">
                    <div class="d-flex">
                    <div class="item-img-wrap">
                    <a href="${pro_link}">
                    <img src="${getProductData_img}"  class="wishlist-item-img">
                    </a>
                    </div>
                    <div class="wishlist-item-info">
                    <div class="item-info-wrap">
                    <a href="${pro_link}">${getProductData.title}</a>
                    <div class="item-price">
                        <span class="money">${formatMoney(getProductData.variants[0].price)}</span>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="wishlist-product-price">
                    <div class="item-price">
                    <span class="money">${formatMoney(getProductData.variants[0].price)}</span>
                    </div>
                    </div>
                    <div class="wishlist-product-action">
                    <div class="d-flex justify-content-end">
                    <button class="delete-local-btn d-flex align-items-center justify-content-center"><img src="//cdn.shopify.com/s/files/1/0588/6528/7346/files/cart-remove.svg?v=8823650813497247124" alt="remove item"/></button>
                    </div>
                    </div>
                    </div>
                    </div> `;
                    wishlist_items_wrap.innerHTML = products;
                }
                else{
                    // products += `<div class="text-center">
                    //                 <span class="empty-msg">there is no item in wishlist</span><br>
                    //                 <span class="empty-msg">add item you want to shop</span>
                    //             </div>`
                    // wishlist_items_wrap.innerHTML = products;
                }
                
            };
        }
        else{
            products += `<div class="text-center">
                            <span class="empty-msg">there is no item in wishlist</span><br>
                            <span class="empty-msg">add item you want to shop</span>
                        </div>`
                    wishlist_items_wrap.innerHTML = products;
        }

        this.clickEvents();
    }

    showProducts = () => {
        // check wishlist is available or not than show data according
        let productsData = getCookie('wishlist');
        productsData = JSON.parse(productsData);
        // console.log(productsData);
        if(productsData > 0){
            // show wishlist products
          this.productLocal(productsData);
        }else{
            this.productLocal(productsData);
        }
    }

    deleteProductLocal = (proid) => {
        // remove product from wishlist local
        let productsData = getCookie('wishlist');
        if(productsData != 0){
          productsData = JSON.parse(productsData);
          let newProductData = productsData.filter(item=>{
            let flag = true;
            if(item.p_id == proid){
              flag = false;
            }
            return flag;
          })
          newProductData = JSON.stringify(newProductData);
          setCookie('wishlist','',0);
          setCookie('wishlist',newProductData,100);
          this.showProducts();
        }
    }


    init = () => {
        this.clickEvents();
        if(this.customerExist){
            // If customer is login then fetch data from API
        //   this.findProductExist();
            this.getCategories();
        }else{
          // If customer is not login then fetch data from local storage
        //   this.fetchProductExistLocal();
        this.showProducts();
        }
    }
}

if(document.querySelector('#wishlist-temp')){
    new wishlistPage;
}
