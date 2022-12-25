// import { setCookie, getCookie } from './helper';
// class wishlist{
//     constructor(){
//         this.storeId = custom.storeId;
//         this.customerExist = custom.customerExist;
//         // this.productId = custom.productId;
//         // this.productHandle = custom.productHandle;
//         this.wishlistUrl = custom.wishlistUrl;
//         this.wishlistPageUrl = '/pages/wishlist';
//         if(this.customerExist){
//           this.customerId = custom.customerId;
//         }
//         this.init();
//     }  
//     clickEvents = () => {
//         let wishlist_btn = document.querySelectorAll(".item-wishlist-btn-wrap");
//         if (wishlist_btn.length > 0) {
//             wishlist_btn.forEach((item,i) => {
//                 item.addEventListener("click", (e)=>{
//                     let that = e.currentTarget;
//                     let id = parseInt(that.getAttribute('data-id'));
//                     let handle = that.getAttribute('data-handle');
//                     // this.getCategories(id,handle);
//                     if(that.classList.contains('with-customer')){
//                         if (that.classList.contains('pathfill')) {
//                             window.location.href = this.wishlistPageUrl;
//                         }
//                         else{
//                             this.getCategories(id,handle);
//                         }
//                     }
//                     else if(that.classList.contains('with-out-customer')){
//                         if (that.classList.contains('pathfill')) {
//                             window.location.href = this.wishlistPageUrl;
//                         }
//                         else{
//                             this.addToWishlistLocal(id,handle);
//                         }
//                     }
//                 })
//             })
//         }

//     }

//     getCategories = async (id,handle) => {
//         // First get all categories from API.
//         let url = this.wishlistUrl+'/showAllWishlistProductCategory/'+this.storeId+'/'+this.customerId;
//         let getCategories = await fetch(url, {
//             method: 'GET'
//         })
//         getCategories = await getCategories.json();
//         let categoriesList = '';
//         let available_pro = [];
//         let allpro = document.querySelectorAll('.item-wishlist-btn-wrap');
//         if(getCategories.title.length > 0){
//             getCategories.value[0].forEach((item,i) => {
//                 available_pro.push(item.p_id);
//             })
            
//             if(allpro.length > 0){
//                 allpro.forEach((item,i) => {
//                     let item_id = item.getAttribute('data-id');
//                     if(available_pro.includes(item_id)){
//                         item.classList.add('pathfill');
//                     }
//                 })
//             }
//             let catid = getCategories.catIdArray[0];
//             if(id && handle){
//                 this.addToWishlist(id,handle,catid);
//             }
//         }
//         else{
//             // this.createCategory();
//             if(allpro.length > 0){
//                 allpro.forEach((item,i) => {
//                     let item_id = item.getAttribute('data-id');
//                     if(available_pro.includes(item_id)){
//                         item.classList.remove('pathfill');
//                     }
//                 })
//             }
//         }
//     }

//     addToWishlist = async (id,handle,catid) => {

//         if(id && handle && catid){
//             let data = {
//               "store_id": this.storeId,
//               "p_id":id,
//               "p_handle":handle,
//               "cat_id": catid,
//               "cust_id": this.customerId
//             };
//             let addTowish = await fetch(this.wishlistUrl+'/addToWishlist', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(data)
//             })
//             addTowish = await addTowish.json();
//             if(addTowish == 1){
//               this.getCategories(); 
//             }
//         }
//     }

//     findCurrentProduct = (productsData) => {
//         let flag = false;
//         productsData = JSON.parse(productsData);
//         let allpro = document.querySelectorAll('.item-wishlist-btn-wrap');
//         let curr_pro_id = [];
//         productsData.forEach(item =>{
//         //   if(item.p_id == this.productId){
//         //     flag = true;
//         //   }
//             curr_pro_id.push(item.p_id);
//         })
//         if(allpro.length > 0){
//             allpro.forEach((item,i) => {
//                 let item_id = parseInt(item.getAttribute('data-id'));
//                 if(curr_pro_id.includes(item_id)){
//                     item.classList.add('pathfill');
//                     flag = true;
//                 }
//             })
//         }

//         return flag;
//     }

//     fetchProductExistLocal = () => {
//         let productsData = getCookie('wishlist');
//         if(productsData != 0){
//             let productExist = this.findCurrentProduct(productsData);

//         }else{
//         //   this.addWishlistButton(false,0); 
//         }
//     }

//     addToWishlistLocal = (p_id,p_handle) => {
//         let productsData = getCookie('wishlist');
//         if(productsData == 0){
//           productsData = [];
//         }else{
//           productsData = JSON.parse(productsData);
//         }
//         let obj = {
//           'p_id': p_id,
//           'p_handle': p_handle,
//         }
//         productsData.push(obj);
//         productsData = JSON.stringify(productsData);
//         setCookie('wishlist',productsData,100);
//         this.fetchProductExistLocal();
//     }

//     deleteProductLocal = (product) => {
//         // remove product from wishlist local
//         let productsData = readCookie('wishlist');
//         if(productsData != 0){
//           productsData = JSON.parse(productsData);
//           let newProductData = productsData.filter(item=>{
//             let flag = true;
//             if(item.p_id == product.data('id')){
//               flag = false;
//             }
//             return flag;
//           })
//           newProductData = JSON.stringify(newProductData);
//           writeCookie('wishlist','',0);
//           writeCookie('wishlist',newProductData,100);
//           this.showProducts();
//         }
//     }


//     init = () => {
//         this.clickEvents();
//         if(this.customerExist){
//             // If customer is login then fetch data from API
//         //   this.findProductExist();
//             this.getCategories();
//         }else{
//           // If customer is not login then fetch data from local storage
//             this.fetchProductExistLocal();
//         }
//     }
// }

// if (document.querySelector('#wishlist-temp')) {
    
// }
// else{
//     new wishlist;
// }