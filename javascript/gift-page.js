// import { formatMoney,showToast,generateUniqueId } from './helper';
// class GiftPage{
//     constructor(){
//         this.selectedValue = {
//             "gift_box":"",
//             "products":[],
//             "gift_card":{}
//         }
//         this.productList = custom.collectionProducts;
//         this.collectionHandle = custom.collectionHandle;
//         this.init();
//     }   
//     moveToNextStep = (currentStep) => {
//         currentStep = Number(currentStep);
//         let nextStep = currentStep + 1;
//         document.querySelectorAll('.tab-header-li').forEach(item=>{
//             item.classList.remove('active');    
//         });
//         document.querySelectorAll('.gift-content').forEach(item=>{
//             item.classList.remove('active');    
//         });
//         document.querySelector(`.tab-header-li.step-${currentStep}`).classList.add('filled');
//         document.querySelector(`.tab-header-li.step-${nextStep}`).classList.add('active');
//         document.querySelector(`.gift-content.step-${nextStep}`).classList.add('active');
//         this.headerLinks();
//     }
//     updateNewContent = () => {
//         let imageContent = '';
//         let textContent = '';
//         let totalPrice = 0; 
//         if(this.selectedValue.products){
//             this.selectedValue.products.map(item=>{
//                 imageContent += `
//                 <div class="image-wrap">
//                     <img src="${item.featured_image}" alt="${item.title}" />
//                     <span class="count">${item.quantity}</span>
//                 </div>`;

//                 textContent += `
//                 <div class="selected-product-wrap">
//                     <div class="qty-wrap">${item.quantity}</div>
//                     <div class="title-wrap">${item.title}</div>
//                     <div class="price-wrap">${formatMoney(item.price)}</div>
//                     <div class="remove-btn-wrap" data-pid="${item.id}"><span class="remove-icon"><img src="//cdn.shopify.com/s/files/1/0588/6528/7346/files/cart-remove.svg?v=8823650813497247124" alt="remove item"/></span></div>
//                 </div>`;
//                 totalPrice += item.price * item.quantity;
//             });
//             document.querySelector('.selected-products-wrap .left-inner-wrap').innerHTML = imageContent;
//             document.querySelector('.selected-products-wrap .middle-section').innerHTML = textContent;
//             document.querySelector('.selected-products-wrap .total-value').textContent = formatMoney(totalPrice);
//             this.clickEventsSelectedProduct();
//         }
//     }
//     removeItems = (pId) => {
//         if(this.selectedValue.products.length > 0){
//             let newProducts = [];
//             this.selectedValue.products.map((item,index)=>{
//                 let newItem = {...item};
//                 if(newItem.id == pId){
//                     let parent = document.querySelector(`.gift-each-product-wrap[data-pid="${pId}"]`);
//                     parent.querySelector('.qty-spinner-wrap').classList.add('hide');
//                     parent.querySelector('.add-to-box-btn').classList.remove('hide');
//                     parent.querySelector('.product_qty_num').textContent = 0;
//                 }else{
//                     newProducts.push(newItem);
//                 }
//             })
//             this.selectedValue.products = [...newProducts];
//         }
//         this.updateNewContent();
//     }
//     firstClickEvents = () => {
//         let gitBoxButton = document.querySelectorAll('.gift-box-button');
//         if(gitBoxButton){
//             gitBoxButton.forEach(ele=>{
//                 ele.addEventListener('click',(e)=>{
//                     let that = e.currentTarget;
//                     this.selectedValue.gift_box = that.getAttribute('data-id');
//                     this.moveToNextStep(1);
//                 });
//             })
//         }
//         let finalAddToCart = document.querySelector('.gift-add-to-cart-btn');
//         if(finalAddToCart){
//             finalAddToCart.addEventListener('click',(e)=>{
//                 let parent = document.querySelector('.card-section-final');
//                 let giftCheck = parent.querySelector('#gift-checkbox');
//                 if(giftCheck.checked){
//                     this.setProperties(true);
//                     this.moveToNextStep(3);
//                 }else{
//                     let userTo = parent.querySelector('#user-to');
//                     let userFrom = parent.querySelector('#user-from');
//                     let giftMsg = parent.querySelector('#gift-message');
//                     if(userTo && userTo.value.length > 0 && userFrom && userFrom.value.length > 0 && giftMsg && giftMsg.value.length > 0){
//                         this.setProperties(false,userTo.value,userFrom.value,giftMsg.value);
//                     }else{
//                         showToast('Please Fill up details!');
//                     }
//                 }
//             });
//         }
//         let cardButton = document.querySelectorAll('.card-child-wrap');
//         if(cardButton){
//             cardButton.forEach(ele=>{
//                 ele.addEventListener('click',(e)=>{
//                     let that = e.currentTarget;
//                     let id = that.getAttribute('data-id');
//                     let image = that.querySelector('img').getAttribute('src');
//                     this.selectedValue.gift_card['id'] = id;
//                     this.selectedValue.gift_card['image'] = image;
//                     document.querySelector('.card-section-first').classList.add('hide');
//                     document.querySelector('.card-section-final img').setAttribute('src',image);
//                     document.querySelector('.card-section-final').classList.remove('hide');
//                 });
//             })
//         }
//         let completeBox = document.querySelector('.complete-box-btn');
//         if(completeBox){
//             completeBox.addEventListener('click',(e)=>{
//                 if(this.selectedValue.products.length > 0){
//                     let totalPrice = 0;
//                     this.selectedValue.products.map(item=>{
//                         totalPrice += item.price * item.quantity;
//                     });
//                     if(totalPrice > 199900){
//                         this.moveToNextStep(2);
//                     }else{
//                         showToast('Please select products above Rs.2000!');
//                     }
//                 }else{
//                     showToast('Please select products above Rs.2000!');
//                 }
//             });
//         }
//         let sortByButton = document.querySelector('#sort-by');
//         if(sortByButton){
//             sortByButton.addEventListener('change',(e)=>{
//                 let that = e.currentTarget;
//                 let currValue = that.value;
//                 let url = `/collections/${this.collectionHandle}?sort_by=${currValue}&view=gift-sort`;
//                 fetch(url)
//                 .then(response => response.json())
//                 .then(data=>{
//                     this.setProductData(data);
//                 })
//             });
//         }
//         let changeCardBtn = document.querySelector('.change-card-button');
//         if(changeCardBtn){
//             changeCardBtn.addEventListener("click",(e)=>{
//                 document.querySelector('.card-section-first').classList.remove('hide');
//                 document.querySelector('.card-section-final').classList.add('hide');
//             });
//         }
//         let viewCartBtn = document.querySelector('.step-view-cart');
//         if(viewCartBtn){
//             viewCartBtn.addEventListener('click',(e)=>{
//                 custom.sidecartOpen();
//             });
//         }
//     }
//     setProperties = (flag,userTo,userFrom,giftMsg) => {
//         let items = [];
//         let mainProductPro = {};
//         let uniqueId = generateUniqueId();
//         if(!flag){
//             mainProductPro = {'userTo':userTo,"userFrom":userFrom,"giftMsg":giftMsg};
//         } 
//         mainProductPro['_bid'] = uniqueId;
//         mainProductPro['_type'] = 'master';
//         mainProductPro['_card_id'] = this.selectedValue.gift_card.id;
//         items.push({id:this.selectedValue.gift_box, quantity:1,properties:mainProductPro});
//         this.selectedValue.products.map(item=>{
//             let obj = {};
//             let propObj = {'_bid':uniqueId,'_type':'child'};
//             obj['id'] = item.variants[0].id;
//             obj['quantity'] = item.quantity;
//             obj['properties'] = propObj;
//             items.push(obj);
//         });
//         this.ajaxAddtocart(items);
//     }
//     ajaxAddtocart = async (items) => {
//         let add = await fetch('/cart/add.js',{
//             method:"POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body:JSON.stringify({items})
//         });
//         if(add.ok){
//             add = await add.json();
//             this.moveToNextStep(3);
//         }
//     }
//     headerLinks = () => {
//         let headerLi = document.querySelectorAll('.tab-header-li.filled');
//         if (headerLi.length > 0){
//             headerLi.forEach(ele=>{
//                 ele.addEventListener('click',(e)=>{
//                     let that = e.currentTarget;
//                     let selectedStep = Number(that.getAttribute('data-step'));
//                     document.querySelectorAll('.tab-header-li').forEach(item=>{
//                         item.classList.remove('active');    
//                     });
//                     document.querySelectorAll('.gift-content').forEach(item=>{
//                         item.classList.remove('active');    
//                     });
//                     document.querySelector(`.tab-header-li.step-${selectedStep}`).classList.add('active');
//                     document.querySelector(`.gift-content.step-${selectedStep}`).classList.add('active');
//                 });
//             });
//         }
//     }
//     setProductData = (collection_data) => {
//         let products = collection_data;
//         let parent = document.querySelector('.gift-products-wrap');
//         let htmlContent = '';
//         if(products.length > 0){
//             products.map(product=>{
//                 let quantity = 0;
//                 if(this.selectedValue.products.length > 0){
//                     this.selectedValue.products.map(item=>{
//                         if(item.id == product.id){
//                             quantity = item.quantity;
//                         }
//                     })
//                 }
//                 htmlContent +=`
//                 <div class="gift-each-product-wrap" data-pid="${product.id}">
//                     <img src=${product.featured_image}" alt="${product.featured_image.alt}" />
//                     <div class="add-to-box-btn${quantity == 0 ? '' : ' hide' }" data-pid="${product.id}">Add to box</div>
//                     <div class="qty-spinner-wrap${quantity == 0 ? ' hide' : '' }">
//                         <div class="qty-min d-flex justify-content-center align-items-center">
//                             -
//                         </div>    
//                         <div class="product_qty_num">${quantity}</div>
//                         <div class="qty-plus d-flex justify-content-center align-items-center">
//                             +
//                         </div>
//                     </div>
//                 </div>
//                 `;
//             });
//             parent.innerHTML = htmlContent;
//             this.clickEventsProduct();
//         }
//     }
//     clickEventsSelectedProduct = () => {
//         let removeButtons = document.querySelectorAll('.remove-btn-wrap');
//         if(removeButtons){
//             removeButtons.forEach(ele=>{
//                 ele.addEventListener('click',(e)=>{
//                     let that = e.currentTarget;
//                     let pId = Number(that.getAttribute('data-pid'));
//                     this.removeItems(pId);
//                 });
//             });
//         }
//     }
//     clickEventsProduct = () => {
//         let addBoxButton = document.querySelectorAll('.add-to-box-btn');
//         if(addBoxButton){
//             addBoxButton.forEach(ele=>{
//                 ele.addEventListener('click',(e)=>{
//                     let that = e.currentTarget;
//                     let parent = that.parentElement;
//                     let pId = Number(that.getAttribute('data-pid'));
//                     this.productList.map(item=>{
//                         let newItem = {...item};
//                         if(item.id == pId){
//                             let quantity = 1;
//                             newItem['quantity'] = quantity;
//                             this.selectedValue.products.push(newItem); 
//                             parent.querySelector('.product_qty_num').textContent = quantity;
//                         }
//                     });
//                     that.classList.add('hide');
//                     parent.querySelector('.qty-spinner-wrap').classList.remove('hide');
//                     this.updateNewContent();
//                 });
//             })
//         }
//         let minusButton = document.querySelectorAll('.gift-each-product-wrap .qty-min');
//         let plusButton = document.querySelectorAll('.gift-each-product-wrap .qty-plus');
//         if(minusButton){
//             minusButton.forEach(ele=>{
//                 ele.addEventListener('click',(e)=>{
//                     let that = e.currentTarget;
//                     let parent = that.parentNode.parentNode;
//                     let pId = Number(parent.getAttribute('data-pid'));
//                     if(this.selectedValue.products.length > 0){
//                         let newProducts = [];
//                         this.selectedValue.products.map((item,index)=>{
//                             let newItem = {...item};
//                             if(newItem.id == pId){
//                                 if(item.quantity != 1){
//                                     newItem.quantity = newItem.quantity - 1;
//                                     newProducts.push(newItem);
//                                     parent.querySelector('.product_qty_num').textContent = newItem.quantity;
//                                 }else{
//                                     parent.querySelector('.qty-spinner-wrap').classList.add('hide');
//                                     parent.querySelector('.add-to-box-btn').classList.remove('hide');
//                                     parent.querySelector('.product_qty_num').textContent = 0;
//                                 }
//                             }else{
//                                 newProducts.push(newItem);
//                             }
//                         })
//                         this.selectedValue.products = [...newProducts];
//                     }
//                     this.updateNewContent();
//                 });
//             });
//         }
//         if(plusButton){
//             plusButton.forEach(ele=>{
//                 ele.addEventListener('click',(e)=>{
//                     let that = e.currentTarget;
//                     let parent = that.parentNode.parentNode;
//                     let pId = Number(parent.getAttribute('data-pid'));
//                     if(this.selectedValue.products.length > 0){
//                         this.selectedValue.products.map((item,index)=>{
//                             let newItem = {...item};
//                             if(newItem.id == pId){
//                                 let quantity = item.quantity + 1;
//                                 this.selectedValue.products[index]['quantity'] = quantity; 
//                                 parent.querySelector('.product_qty_num').textContent = quantity;
//                             }
//                         })
//                     }
//                     this.updateNewContent();
//                 });
//             });
//         }
//     }
//     init = () => {
//         this.firstClickEvents();
//         this.clickEventsProduct();
//         this.clickEventsSelectedProduct();
//     }
// }
// if(document.querySelector('#gift-page-wrap')){
//     new GiftPage;
// }