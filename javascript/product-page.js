import { inToCm, cmToIn ,showPopup, blankBgClose, setCookie, getCookie } from './helper';
class ProductPage{
    constructor(){
        // this.storeId = custom.storeId;
        // this.customerExist = custom.customerExist;
        // this.productId = custom.productId;
        // this.productHandle = custom.productHandle;
        // this.wishlistUrl = custom.wishlistUrl;
        // this.wishlistPageUrl = '/pages/wishlist';
        // this.productImgs = custom.productImgs;
        // if(this.customerExist){
        //   this.customerId = custom.customerId;
        // }
        this.init();
        // console.log("dsdsd");
    }
    // slider = () => {
        
    //     document.addEventListener( 'DOMContentLoaded', function () {
    //         // product page slider (product slider)
    //         $('.img_main_for').slick({
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             arrows: false,
    //             fade: true,
    //             dots: false,
    //             asNavFor: '.img_main_nav'
    //         });
    //         $('.img_main_nav').slick({
    //             slidesToShow: 3,
    //             Infinity: false,
    //             slidesToScroll: 1,
    //             arrows:true,
    //             centerPadding:'0px',
    //             vertical: true,
    //             asNavFor: '.img_main_for',
    //             dots: false,
    //             centerMode: true,
    //             focusOnSelect: true,
    //             responsive: [
    //             {
    //                 breakpoint: 992,
    //                 settings: {
    //                 slidesToShow: 3,
    //                 arrows:false,
    //                 vertical: false,
    //                 slidesToScroll: 1
    //                 }
    //             }
    //             ]
    //         });

    //         // related product slider
    //         $('.releated_product_row').slick({
    //             dots: false,
    //             infinite: true,
    //             speed: 300,
    //             Arrows:true,
    //             appendArrows: '.releated_product_slider_arrow',
    //             slidesToShow: 5,
    //             slidesToScroll: 1,
    //             responsive: [
    //             {
    //                 breakpoint: 1200,
    //                 settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 1,
    //                 }
    //             },
    //             {
    //                 breakpoint: 1025,
    //                 settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //                 }
    //             },
    //             {
    //                 breakpoint: 601,
    //                 settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //                 }
    //             },
    //             {
    //                 breakpoint: 401,
    //                 settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //                 }
    //             }
    //             // You can unslick at a given breakpoint now by adding:
    //             // settings: "unslick"
    //             // instead of a settings object
    //             ]
    //         });

    //     });

    //     // if(window.screen.width > 767){

    //     //     let main_slide_wrap;
    //     //     let slider_length = document.querySelectorAll('.main_img_box').length;
    //     //     if(slider_length >= 5){
    //     //         document.addEventListener( 'DOMContentLoaded', () => {
    //     //             let secondarySlider = new Splide( '.product-temp-slider', {
    //     //                 rewind      : true,
    //     //                 direction  : 'ttb',
    //     //                 heightRatio: 5,
    //     //                 isNavigation: true,
    //     //                 pagination : false,
    //     //                 arrows     : true,
    //     //                 cover      : false,
    //     //                 gap         : '15px',
    //     //                 perPage   : 4,
    //     //                 padding: {
    //     //                     right: '1rem',
    //     //                     left : '1rem',
    //     //                 },
    //     //                 classes: {
    //     //                     arrow  : 'product-thumb-slider-arrow',
    //     //                     prev  : 'product_thumb-slider-arrow--prev',
    //     //                     next  : 'product_thumb-slider-arrow--next',
    //     //                 },
                        
    //     //             } ).mount();
                    
    //     //             // Create the main slider.
    //     //             let primarySlider = new Splide( '.product-temp-main-slider', {
    //     //                 type       : 'fade',
    //     //                 width      : '100%',
    //     //                 pagination : false,
    //     //                 arrows     : false,
    //     //                 cover      : false,
    //     //                 padding: {
    //     //                     right: '1rem',
    //     //                     left : '1rem',
    //     //                 },
    //     //             } );
                    
    //     //             // Set the thumbnails slider as a sync target and then call mount.
    //     //             main_slide_wrap = primarySlider.sync( secondarySlider ).mount();
    //     //             // main_slide_wrap.go('+2');
    //     //             this.imageSwatch(main_slide_wrap);
    //     //         });
                
    //     //     }
    //     //     else{
    //     //         document.addEventListener( 'DOMContentLoaded', () => {
                
    //     //             let slider_length = document.querySelectorAll('.splide_wrap .splide__slide').length;
    //     //             if(slider_length <= 4){
                        
    //     //                 var secondarySlider = new Splide( '.product-temp-slider-else', {
    //     //                     rewind      : true,
    //     //                     direction  : 'ttb',
    //     //                     heightRatio: 5,
    //     //                     isNavigation: true,
    //     //                     pagination : false,
    //     //                     arrows     : false,
    //     //                     cover      : false,
    //     //                     gap         : '15px',
    //     //                     // focus       : 'center',
    //     //                     perPage   : 4,
    //     //                     padding: {
    //     //                         right: '1rem',
    //     //                         left : '1rem',
    //     //                     },
                            
                            
    //     //                 } ).mount();
                        
    //     //                 // Create the main slider.
    //     //                 var primarySlider = new Splide( '.product-temp-main-slider-else', {
    //     //                     type       : 'fade',
    //     //                     width      : '100%',
    //     //                     pagination : false,
    //     //                     arrows     : false,
    //     //                     cover      : false,
    //     //                     padding: {
    //     //                         right: '1rem',
    //     //                         left : '1rem',
    //     //                     },
    //     //                 } );
                        
    //     //                 // Set the thumbnails slider as a sync target and then call mount.
    //     //                 main_slide_wrap = primarySlider.sync( secondarySlider ).mount();
    //     //                 this.imageSwatch(main_slide_wrap);
    //     //             }
    //     //         });
    //     //     }
            
    //     // }
    //     // else{

            
    //     //     let main_slide_wrap_sm;
    //     //     let slider_length_sm = document.querySelectorAll('.main_img_box_sm').length;
    //     //     if (slider_length_sm >= 5){
                
    //     //         document.addEventListener( 'DOMContentLoaded', () => {
                    
    //     //             // Create and mount the thumbnails slider.
    //     //             var secondarySlider = new Splide( '.product-temp-slider-sm', {
    //     //                 rewind      : false,
    //     //                 type        : 'loop',
    //     //                 isNavigation: true,
    //     //                 gap         : 20,
    //     //                 perPage     : 3,
    //     //                 pagination  : false,
    //     //                 // cover       : true,
    //     //                 classes: {
    //     //                     arrow  : 'product-thumb-slider-arrow-sm',
    //     //                     prev  : 'product_thumb-slider-arrow--prev-sm',
    //     //                     next  : 'product_thumb-slider-arrow--next-sm',
    //     //                 },
                        
    //     //         } ).mount();
                
    //     //         // Create the main slider.
    //     //         var primarySlider = new Splide( '.product-temp-main-slide-sm', {
    //     //             type       : 'fade',
    //     //             pagination : false,
    //     //             arrows     : false,
    //     //             cover      : true,
                    
    //     //         } );
                
    //     //         // Set the thumbnails slider as a sync target and then call mount.
    //     //         main_slide_wrap_sm = primarySlider.sync( secondarySlider ).mount();
    //     //         this.imageSwatchSm(main_slide_wrap_sm);
                
    //     //     });
    //     //     }
    //     //     else{
            
    //     //         document.addEventListener( 'DOMContentLoaded', function () {

    //     //             let slider_length = document.querySelectorAll('.splide_wrap .splide__slide').length;
    //     //             if(slider_length < 4){
    //     //                 // Create and mount the thumbnails slider.
    //     //                 var secondarySlider = new Splide( '.product-temp-slider-sm-else', {
    //     //                     rewind      : false,
    //     //                     type        : 'fade',
    //     //                     isNavigation: true,
    //     //                     gap         : 20,
    //     //                     perPage     : 3,
    //     //                     pagination  : false,
    //     //                     cover       : true,
    //     //                     arrows     : false,

    //     //                 } ).mount();

    //     //                 // Create the main slider.
    //     //                 var primarySlider = new Splide( '.product-temp-main-slide-sm-else', {
    //     //                     type       : 'fade',
    //     //                     pagination : false,
    //     //                     arrows     : false,
    //     //                     cover      : true,

    //     //                 } );

    //     //                 // Set the thumbnails slider as a sync target and then call mount.
    //     //                 main_slide_wrap_sm = primarySlider.sync( secondarySlider ).mount();
    //     //                 this.imageSwatchSm(main_slide_wrap_sm);
    //     //             }
    //     //         });
    //     //     }
    //     // }

    //     // if(window.screen.width > 1024){

    //     //     document.addEventListener( 'DOMContentLoaded', function () {
    //     //         let elms = document.getElementsByClassName('product-thum-nav');
    //     //         for ( let i = 0, len = elms.length; i < len; i++ ) {
    //     //             new Flickity(elms[ i ], {
    //     //                 asNavFor: ".product-thum-main",
    //     //                 draggable: false,
    //     //                 percentPosition: false,
    //     //                 groupCells: "100%",
    //     //                 pageDots: false,
    //     //                 cellAlign: 'left'
    //     //             });

    //     //         }
    //     //     }); 
    //     // }
    //     // else{
    //     //     document.addEventListener( 'DOMContentLoaded', function () {
    //     //         let elms = document.getElementsByClassName('product-thum-nav-sm');
    //     //         for ( let i = 0, len = elms.length; i < len; i++ ) {
    //     //             new Flickity(elms[ i ], {
    //     //                 asNavFor: ".product-thum-main", 
    //     //                 percentPosition: false,
    //     //                 groupCells: "100%",
    //     //                 pageDots: false,
                        
    //     //         });
    //     //         }
    //     //     }); 
    //     // }
        
    //     // document.addEventListener( 'DOMContentLoaded', () => {
    //     //     let elms = document.getElementsByClassName('product-thum-main');
    //     //     for ( let i = 0, len = elms.length; i < len; i++ ) {

    //     //         let elem = new Flickity(elms[ i ], {
    //     //             contain: true,
    //     //             pageDots: false,
    //     //             imagesLoaded: true
    //     //         });

    //     //         this.imageSwatch(elem);
    
    //     //     }
    //     // }); 


        

    //     // document.addEventListener( 'DOMContentLoaded', function () {
    //     //     $('.product-recomm-slider').slick({
    //     //         slidesToShow: 4,
    //     //         slidesToScroll: 1,
    //     //         arrows: true,
    //     //         responsive: [
    //     //             {
    //     //                 breakpoint: 1200,
    //     //                 settings: {
    //     //                   slidesToShow: 3,
    //     //                   slidesToScroll: 1,
    //     //                   arrows: false
    //     //                 }
    //     //             },    
    //     //             {
    //     //               breakpoint: 768,
    //     //               settings: {
    //     //                 slidesToShow: 2,
    //     //                 slidesToScroll: 1,
    //     //                 arrows: false
    //     //               }
    //     //             }
    //     //         ]
    //     //     });
    //     //     // let elms = document.getElementsByClassName('product-recomm-slider');
    //     //     // for ( let i = 0, len = elms.length; i < len; i++ ) {

    //     //     //     new Flickity(elms[ i ], {
    //     //     //         pageDots: false,
    //     //     //         initialIndex: 1,
    //     //     //         wrapAround: true,
    //     //     //         cellAlign: 'left'
    //     //     //     });
    //     //     // }
    //     // }); 

    // }
    // openSizeChart = () => {
    //     document.querySelector('.size-chart-main-wrap').classList.add('show-popup');
    //     document.querySelector('body').classList.add('overflow-hidden');
    // }
    // closeSizeChart = () => {
    //     document.querySelector('.size-chart-main-wrap').classList.remove('show-popup');
    //     document.querySelector('body').classList.remove('overflow-hidden');
    // }
    // sizeTypeToggle = (e) => {
    //     let that = e.currentTarget;
    //     document.querySelectorAll('.in-cm-toggle-button .toggle-button').forEach(item=>{
    //         item.classList.remove('selected');
    //     })
    //     that.classList.add('selected');
    //     if(that.classList.contains('cm-button')){
    //         document.querySelector('.size-table.in').classList.add('hide');
    //         document.querySelector('.size-table.cm').classList.remove('hide');
    //     }else{
    //         document.querySelector('.size-table.in').classList.remove('hide');
    //         document.querySelector('.size-table.cm').classList.add('hide');
    //     }
    // }
    // showCustimizeSize = (e) => {
    //     // if(custom.customerLogin){
    //         document.querySelectorAll('.size-table').forEach(item=>{
    //             if(item.querySelector('.custimize-size-input')){
    //                 item.querySelector('.custimize-size-input').classList.remove('hide');
    //             }
    //         });
    //         let cus_submit = document.querySelector('.custimizie-size-submit');
    //         // let cus_submit = document.querySelector('.custimizie-size-submit').classList.remove('hide');
    //         cus_submit.classList.remove('hide');
    //         if( cus_submit.classList.contains('hide')) {
    //             e.target.style.display = "none";
    //         }
    //         else{
    //             e.target.style.display = "none";
    //         }

    //     // }else{
    //     //     window.location.href = '/account/register?checkout_url='+window.location.href;
    //     // }    
    // }
    // setVariantId = () => {
    //     // set variant id in select element
    //     let values = '';
    //     custom.productJson.options.map((option,index)=>{
    //         if(index != 0){
    //             values += '/';
    //         }
    //         let parent = document.querySelector('.product-swatch-wrap.'+option);
    //         let activeEle = parent.querySelector('.swatch-element.active');
    //         if(activeEle){
    //             values += activeEle.getAttribute('data-value');
    //         }else{
    //             values += 'CUSTOMIZE';
    //         }
    //     })  
    //     document.querySelectorAll(`.variants-list option`).forEach(item=>{
    //         item.removeAttribute('selected');
    //     })
    //     document.querySelector(`.variants-list option[data-value="${values}"]`).selected = true;
    //     let variants_list = document.querySelector('.variants-list');
    //     let current_variant_id = document.querySelector('.variants-list').options[variants_list. selectedIndex].getAttribute('data-id');
    //     document.querySelector('.buy-now-id-input').value = current_variant_id;
    // }
    // clickEvents = (main_slide_wrap_else) => {
    //     // Size chart click event
    //     let sizeChartBtn = document.querySelector('.size-chart-button');
    //     if(sizeChartBtn){
    //         sizeChartBtn.addEventListener("click",this.openSizeChart);
    //     }
    //     let customsize_btn = document.querySelector('.custom-size-btn');
    //     if(customsize_btn){
    //         customsize_btn.addEventListener("click",() => {
    //             this.openSizeChart();
    //             document.querySelector(".custimize-your-size-button .cust-btn").click();
    //         });
    //     }
    //     let sizeChartCloseBtn = document.querySelector('.size-chart-inner-wrap .close-button') ;
    //     if(sizeChartCloseBtn){
    //         sizeChartCloseBtn.addEventListener("click",this.closeSizeChart);
    //     }
    //     let custsizeBtn = document.querySelector('.custimize-your-size-button .cust-btn') ;
    //     if(custsizeBtn){
    //         custsizeBtn.addEventListener("click",this.showCustimizeSize);
    //     }
    //     let custSizeSubmitBtn =document.querySelector('.custimizie-size-submit');
    //     if(custSizeSubmitBtn){
    //         custSizeSubmitBtn.addEventListener("click",(e)=>{
    //             let that = e.currentTarget;
    //             let parent = document.querySelectorAll('.size-table');
    //             let error = false;
    //             let type = 'cm';
    //             let buttonAVailable = false;

                

    //             if(that.classList.contains('hide')){
    //                 buttonAVailable = false;
    //             }
    //             else{
    //                 buttonAVailable = true;
    //             }

    //             parent.forEach((ele,index)=>{
    //                 if(!ele.classList.contains('hide')){
    //                     if(ele.classList.contains('in')){
    //                         type = 'in';
    //                     }
    //                 }
    //             })
                
    //             document.querySelectorAll(`.size-table.${type} input`).forEach((item,i)=>{
    //                 if(item.value.length > 0){

    //                     if(type == 'cm'){
    //                     let valueIn = cmToIn(item.value);
    //                     document.querySelectorAll('.size-table.in input').forEach((e,indexNew)=>{
    //                         if(i == indexNew){
    //                             e.value = valueIn
    //                         }
    //                     });
    //                     }else{
    //                     let valueCm =  inToCm(item.value);
    //                     document.querySelectorAll('.size-table.cm input').forEach((e,indexNew)=>{
    //                         if(i == indexNew){
    //                             e.value = valueCm
    //                         }
    //                     });
    //                     }
    //                 }else{
    //                     error = true;
    //                 }
    //             });
    //             if(error){
    //                 document.querySelector(".size-not-fill-error").classList.remove('hide');
    //             }else{
    //                 document.querySelector(".size-not-fill-error").classList.add('hide');
    //                 that.classList.add('hide');
    //                 let custimizeEle = document.querySelector('.customize');
    //                 custimizeEle.classList.remove('hide');
    //                 custimizeEle.classList.add('active');
    //                 document.querySelectorAll('.product-swatch-wrap.Size .swatch-element').forEach(ele=>{
    //                     ele.classList.remove('active');
    //                 })
    //                 document.querySelectorAll('.size-table .size-chart-tr').forEach(ele=>{
    //                     ele.classList.remove('active');
    //                 })
    //                 document.querySelectorAll('.custimize-size-input').forEach(ele=>{
    //                     ele.classList.add('active');
    //                 });
    //                 document.querySelectorAll('.product-add-to-cart').forEach(ele=>{
    //                     ele.classList.remove('hide');
    //                 });
    //                 document.querySelectorAll('.product-sold-out').forEach(ele=>{
    //                     ele.classList.add('hide');
    //                 });
                    
    //                 this.setVariantId();

    //                 let innerParent = document.querySelector('.size-table.in');
    //                 let custiInput  = innerParent.querySelectorAll('.custimize-size-input input');
    //                 // console.log(custiInput);
    //                 let obj = {};
    //                 let form = document.querySelector('.product-right-bottom .ajaxCart');
    //                 innerParent.querySelectorAll('thead th').forEach((ele,index)=>{
    //                     let objName = ele.textContent;
    //                     if(objName != 'Size'){
    //                         let HasField = document.querySelector(`input[name="properties[${objName}]"]`);
    //                         console.log(objName);
    
    //                         if(HasField) {
    //                             HasField.addEventListener('change',(e)=> {
    //                                 console.log('change');
    //                             });
    //                         }
    //                         else{
    //                             obj[objName] = custiInput[index - 1].value;
    //                             let inputField = `<input type="hidden" name="properties[${objName}]" value="${custiInput[index - 1].value}" id="${objName}-${index}">`;
    //                             form.insertAdjacentHTML('afterbegin',inputField);
    //                         }
    //                     }
    //                 })
                    
    //                 // console.log(obj);
    //             }
    //         });
    //     }
    //     document.querySelectorAll('.in-cm-toggle-button button').forEach(item=>{
    //         item.addEventListener('click',(e)=>this.sizeTypeToggle(e));
    //     });
    //     function opentab(evt, tabname) {
    //         var i, tabcontent, tablinks;
    //         tabcontent = document.getElementsByClassName("tab-pane");
    //         for (i = 0; i < tabcontent.length; i++) {
    //           tabcontent[i].style.display = "none";
    //         }
    //         tablinks = document.getElementsByClassName("tablinks");
    //         for (i = 0; i < tablinks.length; i++) {
    //           tablinks[i].className = tablinks[i].className.replace(" active", "");
    //         }
    //         document.getElementById(tabname).style.display = "block";
    //         evt.currentTarget.className += " active";
    //     }

    //     // wishlist 
    //     if(document.querySelector(".wishlist-button-wrap")){

    //         document.querySelector(".wishlist-button-wrap").addEventListener('click', (e) => {
    //             let that = e.currentTarget;
    //             if (that.classList.contains('with-customer')) {
    //                 if (that.classList.contains('view-page')) {
    //                     window.location.href = this.wishlistPageUrl;
    //                 }
    //                 else{
    //                     this.getCategories();
    //                 }
    //             }
    //             else if(that.classList.contains('with-out-customer')){
    //                 if (that.classList.contains('view-page')) {
    //                     window.location.href = this.wishlistPageUrl;
    //                 }
    //                 else{
    //                     this.addToWishlistLocal();
    //                 }
    //             }
    //         })
    //     }

    //     if (document.querySelector(".sizemenu-wishlist-btn")) {
    //         document.querySelector(".sizemenu-wishlist-btn").addEventListener('click', (e) => {
    //             let that = e.currentTarget;
    //             if (that.classList.contains('with-customer')) {
    //                 if (that.classList.contains('view-page')) {
    //                     window.location.href = this.wishlistPageUrl;
    //                 }
    //                 else{
    //                     this.getCategories();
    //                 }
    //             }
    //             else if(that.classList.contains('with-out-customer')){
    //                 if (that.classList.contains('view-page')) {
    //                     window.location.href = this.wishlistPageUrl;
    //                 }
    //                 else{
    //                     this.addToWishlistLocal();
    //                 }
    //             }
    //         })
    //     }

        
    // }

    // qauntityChange = () => {
    //     let plusItem = document.querySelector(".qty-selector-wrap .qty_wrap .qty-plus");
    //     let minusItem = document.querySelector(".qty-selector-wrap .qty_wrap .qty-min");

    //     if(plusItem){
    //         plusItem.addEventListener("click",(e)=>{
    //             // debugger;
    //             // console.log('plus');
    //             let that = e.currentTarget;
    //             let parent = that.closest('.qty-selector-wrap');
    //             let target = document.querySelector('.product_qty_num',parent);
                
    //             let value = parseInt(target.value) + 1;
    //             target.value = value;

    //         });
    //     }

    //     if(minusItem){
    //         minusItem.addEventListener("click",(e)=>{
    //             let that = e.currentTarget;
    //             let parent = that.closest('.qty-selector-wrap');
    //             let target = document.querySelector('.product_qty_num',parent);
    //             if(target.value > 1){
    //                 let value = parseInt(target.value) - 1;
    //                 target.value = value;
    //             }
    //         });
    //     }
    // }

    // imageSwatch = (main_slide_wrap) => {
    //     let var_swatch = document.querySelectorAll('.swatch-element.color');
    //     if(var_swatch.length > 0){
    //         var_swatch.forEach((item,i)=>{
    //             item.addEventListener("click",(e)=>{
    //                 let current_variant_img;
    //                 let variants_list = document.querySelector('.variants-list');
    //                 current_variant_img = variants_list.options[variants_list. selectedIndex].getAttribute('data-img');

    //                 // console.log(main_slide_wrap);    
    //                 let product_imgs = document.querySelectorAll('.main_img_box');
    //                 let current_main_li = document.querySelector('.main_img_box.is-active');
    //                 let current_main_index = Number(current_main_li.getAttribute('data-index'));
                    
    //                 product_imgs.forEach((elem,j) => {
    //                     let product_imgs_url = elem.getAttribute('data-img');
    //                     let current_slide = 0;
                        
    //                     if( product_imgs_url == current_variant_img ){
    //                         let current_main_img = Number(elem.getAttribute('data-index'));
    //                         let splide_index = current_main_img - current_main_index;
    //                         let splide_main_index = "";
    //                         if(splide_index != 0){
    //                             if(splide_index > 0){
    //                                 splide_main_index = ""+ "+"+ splide_index + "";
    //                                 // console.log(splide_main_index);
    //                                 main_slide_wrap.go(splide_main_index);
    //                             }
    //                             else{
    //                                 splide_main_index = "" + splide_index + "";
    //                                 main_slide_wrap.go(splide_main_index);
    //                             }
    //                         }
                            
    //                     }
    //                     else{
                            
    //                     }
                        
    //                 })
    //             });
    //         })
    //     }
    // }

    // imageSwatchSm = (main_slide_wrap_sm) => {
    //     let var_swatch = document.querySelectorAll('.swatch-element.color');
    //     if(var_swatch.length > 0){
    //         var_swatch.forEach((item,i)=>{
    //             item.addEventListener("click",(e)=>{
    //                 let current_variant_img;
    //                 let variants_list = document.querySelector('.variants-list');
    //                 current_variant_img = variants_list.options[variants_list. selectedIndex].getAttribute('data-img');

    //                 // console.log(main_slide_wrap);    
    //                 let product_imgs = document.querySelectorAll('.main_img_box_sm');
    //                 let current_main_li = document.querySelector('.main_img_box_sm.is-active');
    //                 let current_main_index = Number(current_main_li.getAttribute('data-index'));
                    
    //                 product_imgs.forEach((elem,j) => {
    //                     let product_imgs_url = elem.getAttribute('data-img');
    //                     let current_slide = 0;
                        
    //                     if( product_imgs_url == current_variant_img ){
    //                         let current_main_img = Number(elem.getAttribute('data-index'));
    //                         let splide_index = current_main_img - current_main_index;
    //                         let splide_main_index = "";
    //                         if(splide_index != 0){
    //                             if(splide_index > 0){
    //                                 splide_main_index = ""+ "+"+ splide_index + "";
    //                                 // console.log(splide_main_index);
    //                                 main_slide_wrap_sm.go(splide_main_index);
    //                             }
    //                             else{
    //                                 splide_main_index = "" + splide_index + "";
    //                                 // console.log(splide_main_index);
    //                                 main_slide_wrap_sm.go(splide_main_index);
    //                             }
    //                         }
                            
    //                     }
    //                     else{
                            
    //                     }
                        
                        
    //                 })
                        
                

    //             });
    //         })
    //     }
    // }

    // imageSwatch = (elem) => {
    //     let var_swatch = document.querySelectorAll('.swatch-element.color');
    //     if(var_swatch.length > 0){
    //         var_swatch.forEach((item,i)=>{
    //             item.addEventListener("click",(e)=>{
    //                 // let current_variant_img;
    //                 let product_imgs = this.productImgs;
    //                 console.log(product_imgs);
    //                 let variants_list = document.querySelector('.variants-list');
    //                 let current_variant_img = variants_list.options[variants_list. selectedIndex].getAttribute('data-img');
    //                 let slide_index;
    //                 // console.log(current_variant_img);

    //                 for(let i = 0; i < product_imgs.length; i++ ){
    //                     // console.log(product_imgs[i]);
    //                     if(product_imgs[i] == current_variant_img ){
    //                         slide_index = i;
    //                         // console.log(slide_index);
    //                         elem.select(slide_index);
    //                     }
    //                 }

    //             })
    //         });
    //     }
    // }


    // photoSwip = () => {
    //     var initPhotoSwipeFromDOM = function(gallerySelector) {

    //         // parse slide data (url, title, size ...) from DOM elements 
    //         // (children of gallerySelector)
    //         var parseThumbnailElements = function(el) {
    //             var thumbElements = el.childNodes,
    //                 numNodes = thumbElements.length,
    //                 items = [],
    //                 figureEl,
    //                 linkEl,
    //                 size,
    //                 item;
        
    //             for(var i = 0; i < numNodes; i++) {
        
    //                 figureEl = thumbElements[i]; // <figure> element
        
    //                 // include only element nodes 
    //                 if(figureEl.nodeType !== 1) {
    //                     continue;
    //                 }
        
    //                 linkEl = figureEl.children[0]; // <a> element
        
    //                 size = linkEl.getAttribute('data-size').split('x');
        
    //                 // create slide object
    //                 item = {
    //                     src: linkEl.getAttribute('href'),
    //                     w: parseInt(size[0], 10),
    //                     h: parseInt(size[1], 10)
    //                 };
        
        
        
    //                 if(figureEl.children.length > 1) {
    //                     // <figcaption> content
    //                     item.title = figureEl.children[1].innerHTML; 
    //                 }
        
    //                 if(linkEl.children.length > 0) {
    //                     // <img> thumbnail element, retrieving thumbnail url
    //                     item.msrc = linkEl.children[0].getAttribute('src');
    //                 } 
        
    //                 item.el = figureEl; // save link to element for getThumbBoundsFn
    //                 items.push(item);
    //             }
        
    //             return items;
    //         };
        
    //         // find nearest parent element
    //         var closest = function closest(el, fn) {
    //             return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    //         };
        
    //         // triggers when user clicks on thumbnail
    //         var onThumbnailsClick = function(e) {
    //             e = e || window.event;
    //             e.preventDefault ? e.preventDefault() : e.returnValue = false;
        
    //             var eTarget = e.target || e.srcElement;
        
    //             // find root element of slide
    //             var clickedListItem = closest(eTarget, function(el) {
    //                 return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
    //             });
        
    //             if(!clickedListItem) {
    //                 return;
    //             }
        
    //             // find index of clicked item by looping through all child nodes
    //             // alternatively, you may define index via data- attribute
    //             var clickedGallery = clickedListItem.parentNode,
    //                 childNodes = clickedListItem.parentNode.childNodes,
    //                 numChildNodes = childNodes.length,
    //                 nodeIndex = 0,
    //                 index;
        
    //             for (var i = 0; i < numChildNodes; i++) {
    //                 if(childNodes[i].nodeType !== 1) { 
    //                     continue; 
    //                 }
        
    //                 if(childNodes[i] === clickedListItem) {
    //                     index = nodeIndex;
    //                     break;
    //                 }
    //                 nodeIndex++;
    //             }
        
        
        
    //             if(index >= 0) {
    //                 // open PhotoSwipe if valid index found
    //                 openPhotoSwipe( index, clickedGallery );
    //             }
    //             return false;
    //         };
        
    //         // parse picture index and gallery index from URL (#&pid=1&gid=2)
    //         var photoswipeParseHash = function() {
    //             var hash = window.location.hash.substring(1),
    //             params = {};
        
    //             if(hash.length < 5) {
    //                 return params;
    //             }
        
    //             var vars = hash.split('&');
    //             for (var i = 0; i < vars.length; i++) {
    //                 if(!vars[i]) {
    //                     continue;
    //                 }
    //                 var pair = vars[i].split('=');  
    //                 if(pair.length < 2) {
    //                     continue;
    //                 }           
    //                 params[pair[0]] = pair[1];
    //             }
        
    //             if(params.gid) {
    //                 params.gid = parseInt(params.gid, 10);
    //             }
        
    //             return params;
    //         };
        
    //         var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
    //             var pswpElement = document.querySelectorAll('.pswp')[0],
    //                 gallery,
    //                 options,
    //                 items;
        
    //             items = parseThumbnailElements(galleryElement);
        
    //             // define options (if needed)
    //             options = {
        
    //                 // define gallery index (for URL)
    //                 galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        
    //                 getThumbBoundsFn: function(index) {
    //                     // See Options -> getThumbBoundsFn section of documentation for more info
    //                     var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
    //                         pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
    //                         rect = thumbnail.getBoundingClientRect(); 
        
    //                     return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
    //                 }
        
    //             };
        
    //             // PhotoSwipe opened from URL
    //             if(fromURL) {
    //                 if(options.galleryPIDs) {
    //                     // parse real index when custom PIDs are used 
    //                     // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
    //                     for(var j = 0; j < items.length; j++) {
    //                         if(items[j].pid == index) {
    //                             options.index = j;
    //                             break;
    //                         }
    //                     }
    //                 } else {
    //                     // in URL indexes start from 1
    //                     options.index = parseInt(index, 10) - 1;
    //                 }
    //             } else {
    //                 options.index = parseInt(index, 10);
    //             }
        
    //             // exit if index not found
    //             if( isNaN(options.index) ) {
    //                 return;
    //             }
        
    //             if(disableAnimation) {
    //                 options.showAnimationDuration = 0;
    //             }
        
    //             // Pass data to PhotoSwipe and initialize it
    //             gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    //             gallery.init();
    //         };
        
    //         // loop through all gallery elements and bind events
    //         var galleryElements = document.querySelectorAll( gallerySelector );
        
    //         for(var i = 0, l = galleryElements.length; i < l; i++) {
    //             galleryElements[i].setAttribute('data-pswp-uid', i+1);
    //             galleryElements[i].onclick = onThumbnailsClick;
    //         }
        
    //         // Parse URL and open gallery if it contains #&pid=3&gid=1
    //         var hashData = photoswipeParseHash();
    //         if(hashData.pid && hashData.gid) {
    //             openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    //         }
    //     };
        
    //     // execute above function
    //     initPhotoSwipeFromDOM('.my-gallery');
    // }
    // sizeChartInit = () => {
    //     if(custom.productSizeChartIn){
    //         let keys = Object.keys(custom.productSizeChartIn);
    //         let headHtml = '';
    //         let bodyHtml = '';
    //         keys.map(item=>{
    //             headHtml += `<th>${item}</th>`;

    //         })
    //         custom.productSizeChartIn[keys[0]].map((item,index)=>{
    //             let innerHt = '';
    //             keys.map(key=>{
    //                 let content = custom.productSizeChartIn[key][index];
    //                 innerHt += `<td data-value="${content}">${content}</td>`;
    //             })
    //             bodyHtml += `<tr class="swatch-element size-chart-tr">${innerHt}</tr>`;
    //         });
    //         if(document.querySelector('.customize')){
    //             let innerHt = ''
    //             keys.map(key=>{
    //                 if(key != 'Size'){
    //                     innerHt += '<td><input type="number" /></td>';
    //                 }else{
    //                     innerHt += '<td class="cust-size-label">Custimize size</td>';
    //                 }
    //             })
    //             bodyHtml += `<tr class="custimize-size-input hide">${innerHt}</tr>`;
    //         }
    //         document.querySelector('.size-table.in thead tr').innerHTML = headHtml;
    //         document.querySelector('.size-table.in tbody').innerHTML = bodyHtml;
    //     }
    //     if(custom.productSizeChartCm){
    //         let keys = Object.keys(custom.productSizeChartCm);
    //         let headHtml = '';
    //         let bodyHtml = '';
    //         keys.map(item=>{
    //             headHtml += `<th>${item}</th>`;

    //         })
    //         custom.productSizeChartCm[keys[0]].map((item,index)=>{
    //             let innerHt = '';
    //             keys.map(key=>{
    //                 let content = custom.productSizeChartCm[key][index];
    //                 innerHt += `<td data-value="${content}">${content}</td>`;
    //             })
    //             bodyHtml += `<tr class="swatch-element size-chart-tr">${innerHt}</tr>`;
    //         });
    //         if(document.querySelector('.customize')){
    //             let innerHt = '';
    //             keys.map(key=>{
    //                 if(key != 'Size'){
    //                     innerHt += '<td><input type="number" /></td>';
    //                 }else{
    //                     innerHt += '<td class="cust-size-label">Custimize size</td>';
    //                 }
    //             })
    //             bodyHtml += `<tr class="custimize-size-input hide">${innerHt}</tr>`;
    //         }
    //         document.querySelector('.size-table.cm thead tr').innerHTML = headHtml;
    //         document.querySelector('.size-table.cm tbody').innerHTML = bodyHtml;
    //     }
    //     custom.swatchEleClick();
    // }

    // addWishlistButton = (withCustomer,flag) => {
    //     // Append wishlist button base on response 
    //     let buttonHtml = '';
    //     let SizeMenuButton = '';
    //     if(withCustomer){
    //       if(flag == 1){
    //         buttonHtml = `<div class="wishlist-button-wrap with-customer view-page"> <div class="product-wishlist-icon d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none"><path d="M22.1622 2.76815C21.6019 2.20759 20.9367 1.76292 20.2045 1.45954C19.4723 1.15615 18.6875 1 17.895 1C17.1024 1 16.3176 1.15615 15.5854 1.45954C14.8532 1.76292 14.188 2.20759 13.6277 2.76815L12.4649 3.93095L11.3021 2.76815C10.1703 1.6364 8.63536 1.00059 7.03482 1.00059C5.43429 1.00059 3.89931 1.6364 2.76756 2.76815C1.63581 3.89989 1 5.43487 1 7.03541C1 8.63594 1.63581 10.1709 2.76756 11.3027L3.93036 12.4655L12.4649 21L20.9994 12.4655L22.1622 11.3027C22.7228 10.7424 23.1674 10.0771 23.4708 9.34495C23.7742 8.61276 23.9304 7.82796 23.9304 7.03541C23.9304 6.24285 23.7742 5.45806 23.4708 4.72587C23.1674 3.99368 22.7228 3.32844 22.1622 2.76815V2.76815Z" stroke="#939282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style=" fill: rgb(147, 146, 130);"/></svg></div></div>`;
    //         SizeMenuButton = `<button type="button" class="product-wishlist align-items-center justify-content-center with-customer view-page sizemenu-wishlist-btn"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
    //                                 <path d="M22.1622 2.76815C21.6019 2.20759 20.9367 1.76292 20.2045 1.45954C19.4723 1.15615 18.6875 1 17.895 1C17.1024 1 16.3176 1.15615 15.5854 1.45954C14.8532 1.76292 14.188 2.20759 13.6277 2.76815L12.4649 3.93095L11.3021 2.76815C10.1703 1.6364 8.63536 1.00059 7.03482 1.00059C5.43429 1.00059 3.89931 1.6364 2.76756 2.76815C1.63581 3.89989 1 5.43487 1 7.03541C1 8.63594 1.63581 10.1709 2.76756 11.3027L3.93036 12.4655L12.4649 21L20.9994 12.4655L22.1622 11.3027C22.7228 10.7424 23.1674 10.0771 23.4708 9.34495C23.7742 8.61276 23.9304 7.82796 23.9304 7.03541C23.9304 6.24285 23.7742 5.45806 23.4708 4.72587C23.1674 3.99368 22.7228 3.32844 22.1622 2.76815V2.76815Z" stroke="#939282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //                             </svg>Wishlisted
    //                           </button>`
    //       }else{
    //         buttonHtml = `<div class="wishlist-button-wrap with-customer add-wishlist"> <div class="product-wishlist-icon d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none"><path d="M22.1622 2.76815C21.6019 2.20759 20.9367 1.76292 20.2045 1.45954C19.4723 1.15615 18.6875 1 17.895 1C17.1024 1 16.3176 1.15615 15.5854 1.45954C14.8532 1.76292 14.188 2.20759 13.6277 2.76815L12.4649 3.93095L11.3021 2.76815C10.1703 1.6364 8.63536 1.00059 7.03482 1.00059C5.43429 1.00059 3.89931 1.6364 2.76756 2.76815C1.63581 3.89989 1 5.43487 1 7.03541C1 8.63594 1.63581 10.1709 2.76756 11.3027L3.93036 12.4655L12.4649 21L20.9994 12.4655L22.1622 11.3027C22.7228 10.7424 23.1674 10.0771 23.4708 9.34495C23.7742 8.61276 23.9304 7.82796 23.9304 7.03541C23.9304 6.24285 23.7742 5.45806 23.4708 4.72587C23.1674 3.99368 22.7228 3.32844 22.1622 2.76815V2.76815Z" stroke="#939282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="/* fill: rgb(147, 146, 130); */"/></svg></div></div>`;
    //         SizeMenuButton = `<button type="button" class="product-wishlist align-items-center justify-content-center with-customer sizemenu-wishlist-btn"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
    //                                 <path d="M22.1622 2.76815C21.6019 2.20759 20.9367 1.76292 20.2045 1.45954C19.4723 1.15615 18.6875 1 17.895 1C17.1024 1 16.3176 1.15615 15.5854 1.45954C14.8532 1.76292 14.188 2.20759 13.6277 2.76815L12.4649 3.93095L11.3021 2.76815C10.1703 1.6364 8.63536 1.00059 7.03482 1.00059C5.43429 1.00059 3.89931 1.6364 2.76756 2.76815C1.63581 3.89989 1 5.43487 1 7.03541C1 8.63594 1.63581 10.1709 2.76756 11.3027L3.93036 12.4655L12.4649 21L20.9994 12.4655L22.1622 11.3027C22.7228 10.7424 23.1674 10.0771 23.4708 9.34495C23.7742 8.61276 23.9304 7.82796 23.9304 7.03541C23.9304 6.24285 23.7742 5.45806 23.4708 4.72587C23.1674 3.99368 22.7228 3.32844 22.1622 2.76815V2.76815Z" stroke="#939282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //                             </svg>Wishlist
    //                           </button>`
    //       }
    //     }else{
    //       if(flag == 1){
    //         buttonHtml = `<div class="wishlist-button-wrap with-out-customer view-page"> <div class="product-wishlist-icon d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none"><path d="M22.1622 2.76815C21.6019 2.20759 20.9367 1.76292 20.2045 1.45954C19.4723 1.15615 18.6875 1 17.895 1C17.1024 1 16.3176 1.15615 15.5854 1.45954C14.8532 1.76292 14.188 2.20759 13.6277 2.76815L12.4649 3.93095L11.3021 2.76815C10.1703 1.6364 8.63536 1.00059 7.03482 1.00059C5.43429 1.00059 3.89931 1.6364 2.76756 2.76815C1.63581 3.89989 1 5.43487 1 7.03541C1 8.63594 1.63581 10.1709 2.76756 11.3027L3.93036 12.4655L12.4649 21L20.9994 12.4655L22.1622 11.3027C22.7228 10.7424 23.1674 10.0771 23.4708 9.34495C23.7742 8.61276 23.9304 7.82796 23.9304 7.03541C23.9304 6.24285 23.7742 5.45806 23.4708 4.72587C23.1674 3.99368 22.7228 3.32844 22.1622 2.76815V2.76815Z" stroke="#939282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="fill: rgb(147, 146, 130); "/></svg></div></div>`;
    //         SizeMenuButton = `<button type="button" class="product-wishlist align-items-center justify-content-center view-page with-out-customer sizemenu-wishlist-btn"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
    //                                 <path d="M22.1622 2.76815C21.6019 2.20759 20.9367 1.76292 20.2045 1.45954C19.4723 1.15615 18.6875 1 17.895 1C17.1024 1 16.3176 1.15615 15.5854 1.45954C14.8532 1.76292 14.188 2.20759 13.6277 2.76815L12.4649 3.93095L11.3021 2.76815C10.1703 1.6364 8.63536 1.00059 7.03482 1.00059C5.43429 1.00059 3.89931 1.6364 2.76756 2.76815C1.63581 3.89989 1 5.43487 1 7.03541C1 8.63594 1.63581 10.1709 2.76756 11.3027L3.93036 12.4655L12.4649 21L20.9994 12.4655L22.1622 11.3027C22.7228 10.7424 23.1674 10.0771 23.4708 9.34495C23.7742 8.61276 23.9304 7.82796 23.9304 7.03541C23.9304 6.24285 23.7742 5.45806 23.4708 4.72587C23.1674 3.99368 22.7228 3.32844 22.1622 2.76815V2.76815Z" stroke="#939282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //                             </svg>Wishlisted
    //                           </button>`
    //       }else{
    //         buttonHtml = `<div class="wishlist-button-wrap with-out-customer add-wishlist"> <div class="product-wishlist-icon d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none"><path d="M22.1622 2.76815C21.6019 2.20759 20.9367 1.76292 20.2045 1.45954C19.4723 1.15615 18.6875 1 17.895 1C17.1024 1 16.3176 1.15615 15.5854 1.45954C14.8532 1.76292 14.188 2.20759 13.6277 2.76815L12.4649 3.93095L11.3021 2.76815C10.1703 1.6364 8.63536 1.00059 7.03482 1.00059C5.43429 1.00059 3.89931 1.6364 2.76756 2.76815C1.63581 3.89989 1 5.43487 1 7.03541C1 8.63594 1.63581 10.1709 2.76756 11.3027L3.93036 12.4655L12.4649 21L20.9994 12.4655L22.1622 11.3027C22.7228 10.7424 23.1674 10.0771 23.4708 9.34495C23.7742 8.61276 23.9304 7.82796 23.9304 7.03541C23.9304 6.24285 23.7742 5.45806 23.4708 4.72587C23.1674 3.99368 22.7228 3.32844 22.1622 2.76815V2.76815Z" stroke="#939282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="/* fill: rgb(147, 146, 130); */"/></svg></div></div>`;
    //         SizeMenuButton = `<button type="button" class="product-wishlist align-items-center justify-content-center with-out-customer sizemenu-wishlist-btn"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
    //                                 <path d="M22.1622 2.76815C21.6019 2.20759 20.9367 1.76292 20.2045 1.45954C19.4723 1.15615 18.6875 1 17.895 1C17.1024 1 16.3176 1.15615 15.5854 1.45954C14.8532 1.76292 14.188 2.20759 13.6277 2.76815L12.4649 3.93095L11.3021 2.76815C10.1703 1.6364 8.63536 1.00059 7.03482 1.00059C5.43429 1.00059 3.89931 1.6364 2.76756 2.76815C1.63581 3.89989 1 5.43487 1 7.03541C1 8.63594 1.63581 10.1709 2.76756 11.3027L3.93036 12.4655L12.4649 21L20.9994 12.4655L22.1622 11.3027C22.7228 10.7424 23.1674 10.0771 23.4708 9.34495C23.7742 8.61276 23.9304 7.82796 23.9304 7.03541C23.9304 6.24285 23.7742 5.45806 23.4708 4.72587C23.1674 3.99368 22.7228 3.32844 22.1622 2.76815V2.76815Z" stroke="#939282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    //                             </svg>Wishlist
    //                           </button>`
    //       }
    //     }
    //     let wishlist_button_wrap = document.getElementsByClassName('.wishlist-button-wrap');
    //     if( wishlist_button_wrap.length > 0){
    //         wishlist_button_wrap.remove();
    //     }
    //     document.querySelector('.product-wishlist-wrap').innerHTML = buttonHtml;
    //     let size_menu_wishlist_btn = document.getElementsByClassName('.sizemenu-wishlist-btn');
    //     if( size_menu_wishlist_btn.length > 0){
    //         size_menu_wishlist_btn.remove();
    //     }
    //     // console.log(size_menu_wishlist_btn);
    //     document.querySelector('.size-menu-wishlist').innerHTML = SizeMenuButton;
    //     this.clickEvents();
    // }

    // findProductExist = async () => {
    //     // find data from API to current product exist on wishlist or not
    //     let data = {
    //       "store_id": this.storeId,
    //       "p_id": this.productId,
    //       "p_handle": this.productHandle,
    //       "cust_id": this.customerId
    //     };
    //     let findProduct = await fetch(this.wishlistUrl+'/isProductAlreadyWishlist', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     })
    //     findProduct = await findProduct.json();
    //     // console.log(findProduct);   
    //     // response 0 than product is not added on wishlist, 1 is added on wishlist
    //     if(findProduct == 0 || findProduct == 1){
    //       this.addWishlistButton(true,findProduct);
    //     }
    // }

    // getCategories = async () => {
    //     // First get all categories from API.
    //     let url = this.wishlistUrl+'/showAllWishlistProductCategory/'+this.storeId+'/'+this.customerId;
    //     let getCategories = await fetch(url, {
    //       method: 'GET'
    //     })
    //     getCategories = await getCategories.json();
    //     let categoriesList = '';
    //     // Check existing categories
    //     if(getCategories.title.length > 0 && getCategories.title.length == 1 ){
    //         let catid = getCategories.catIdArray[0];
    //         this.addToWishlist(catid);
    //     }
    //     else{
    //        this.createCategory();
    //     }
    // }

    // createCategory = async () => {
    //     // create new category
    //     let val = 'all product';
    //     let data = {
    //       "store_id": this.storeId,
    //       "c_name": val,
    //       "cust_id": this.customerId
    //     };
    //     let createCategory = await fetch(this.wishlistUrl+'/createCategory', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     })
    //     createCategory = await createCategory.json();
    //     if(createCategory != 0){
    //       this.getCategories();
    //     }else{
    //       return false;
    //     }
    // }

    // addToWishlist = async (catid) => {
    //     // add product on wishlist
    //     // console.log()
    //     let id = catid;
    //     let data = {
    //       "store_id": this.storeId,
    //       "p_id":this.productId,
    //       "p_handle":this.productHandle,
    //       "cat_id": id,
    //       "cust_id": this.customerId
    //     };
    //     let addTowish = await fetch(this.wishlistUrl+'/addToWishlist', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     })
    //     addTowish = await addTowish.json();
    //     if(addTowish == 1){
    //       this.addWishlistButton(true,1); 
    //     //   this.showProductWithList();
    //     }
    // }

    // findCurrentProduct = (productsData) => {
    //     let flag = false;
    //     productsData = JSON.parse(productsData);
    //     productsData.map(item=>{
    //       if(item.p_id == this.productId){
    //         flag = true;
    //       }
    //     })
    //     return flag;
    // }

    // fetchProductExistLocal = () => {
    //     let productsData = getCookie('wishlist');
    //     if(productsData != 0){
    //       let productExist = this.findCurrentProduct(productsData);
    //       if(productExist){
    //         this.addWishlistButton(false,1); 
    //       }else{
    //         this.addWishlistButton(false,0); 
    //       }
    //     }else{
    //       this.addWishlistButton(false,0); 
    //     }
    // }

    // addToWishlistLocal = () => {
    //     let productsData = getCookie('wishlist');
    //     if(productsData == 0){
    //       productsData = [];
    //     }else{
    //       productsData = JSON.parse(productsData);
    //     }
    //     let obj = {
    //       'p_id': this.productId,
    //       'p_handle': this.productHandle,
    //     }
    //     productsData.push(obj);
    //     productsData = JSON.stringify(productsData);
    //     setCookie('wishlist',productsData,100);
    //     this.addWishlistButton(false,1); 
    // }

    // reviewBtn = () => {
    //     setTimeout(function() {
    //         let ReviewBtn = document.querySelectorAll('.jdgm-widget-actions-wrapper');
    //         if(ReviewBtn[1]){
    //             ReviewBtn[1].style.display = "none";
    //         }
    //     }, 1000);
        
    // }
    
    init = () => {
        this.slider();
        // this.clickEvents();
        // this.photoSwip();
        // this.sizeChartInit();
        // this.qauntityChange();
        if(this.customerExist){
            // If customer is login then fetch data from API
        //   this.findProductExist();
        }else{
          // If customer is not login then fetch data from local storage
        //   this.fetchProductExistLocal();
        }
        // this.reviewBtn();
    }
}
if(document.querySelector('body').classList.contains('template-product')){
    new ProductPage;
}