class ProductSwatch{
    constructor(){
        this.swatchJson = {};
        this.init();
    }
    clickEvents = () => {
        // swatch click event
        let swatchItem = document.querySelectorAll(".swatch-element");
        swatchItem.forEach(item=>{
            item.addEventListener('click',(e)=>{
                // debugger
                let variant_err = document.querySelector(".variant_err");
                variant_err.style.display = "none";
                this.swatchesInit();
                let that = e.currentTarget;
                let selectedValue = '';
                let type = 'Size';
                if(that.classList.contains('size-chart-tr')){
                    selectedValue = that.querySelector('td').getAttribute('data-value');
                }else{
                    selectedValue = that.getAttribute('data-value');
                    type = that.closest('.product-swatch-wrap')
                    if(type){
                        type = type.getAttribute("data-type"); 
                    }else{
                        type = that.closest('.size-chart-swatch-wrap.Color').getAttribute("data-type");
                    }
                }
                if(type == 'Size'){
                    document.querySelectorAll('.custimize-size-input').forEach(ele=>{
                        ele.classList.remove('active');
                    });
                    if(document.querySelector('.customize-swatch')){
                        document.querySelector('.customize-swatch').classList.remove('active');
                    }
                }
                this.swatchChange(selectedValue,type);
            })
        })
        let custSizeBtn = document.querySelector('.custimize-size-input td');
        if(custSizeBtn){
            custSizeBtn.addEventListener('click',(e)=>{
                let that = e.currentTarget;
                let error = false;
                // document.querySelectorAll('.size-chart-tr').forEach(ele=>{
                //     ele.classList.remove('active');
                // })
                // document.querySelectorAll('.product-swatch-wrap.Size .swatch-element').forEach(ele=>{
                //     ele.classList.remove('active');
                // })
                // if(document.querySelector('.customize-swatch')){
                //     document.querySelector('.customize-swatch').classList.add('active');
                // }
                let size_input = that.parentElement.querySelectorAll('td input');
                size_input.forEach((item,i) => {
                    if(item.value.length > 0){
                        document.querySelectorAll('.size-chart-tr').forEach(ele=>{
                            ele.classList.remove('active');
                        })
                        if(document.querySelector('.customize-swatch')){
                            document.querySelector('.customize-swatch').classList.add('active');
                        }
                        // let innerParent = document.querySelector('.size-table.in');
                        // let custiInput  = innerParent.querySelectorAll('.custimize-size-input input');
                        // // console.log(custiInput);
                        // let obj = {};
                        // let form = document.querySelector('.product-right-bottom .ajaxCart');
                        // innerParent.querySelectorAll('thead th').forEach((ele,index)=>{
                        //     let objName = ele.textContent;
                        //     if(objName != 'Size'){
                        //         // obj[objName] = custiInput[index - 1].value;
                        //         let inputField = `<input type="hidden" name="properties[${objName}]" value="${custiInput[index - 1].value}">`;
                        //         // console.log(inputField);
                        //         form.insertAdjacentHTML('afterend',inputField);
                        //     }
                        // })
                    }else{
                        error = true;
                        document.querySelectorAll('.size-chart-tr').forEach(ele=>{
                            ele.classList.remove('active');
                        })
                        document.querySelectorAll('.product-swatch-wrap.Size .swatch-element').forEach(ele=>{
                            ele.classList.remove('active');
                        })
                    }
                })
                if(error){
                    document.querySelector(".size-not-fill-error").classList.remove('hide');
                }
                else{
                    document.querySelector(".size-not-fill-error").classList.add('hide');
                    that.parentElement.classList.add('active');
                } 
                this.setVariantCustId();
            });
        }

        let custSizeMainBtn = document.querySelector('.customize-swatch');
        if(custSizeMainBtn){
            custSizeMainBtn.addEventListener('click',(e)=>{
                let that = e.currentTarget;
                document.querySelectorAll('.size-chart-tr').forEach(ele=>{
                    ele.classList.remove('active');
                })
                document.querySelectorAll('.product-swatch-wrap.Size .swatch-element').forEach(ele=>{
                    ele.classList.remove('active');
                })
                document.querySelector('.custimize-size-input').classList.add('active');
                that.classList.add('active');
                this.setVariantCustId();
            });
        }
    }
    setVariantCustId = () => {
        // set variant id in select element
        let values = '';
        custom.productJson.options.map((option,index)=>{
            if(index != 0){
                values += '/';
            }
            let parent = document.querySelector('.product-swatch-wrap.'+option);
            let activeEle = parent.querySelector('.swatch-element.active');
            if(activeEle){
                values += activeEle.getAttribute('data-value');
            }else{
                values += 'CUSTOMIZE';
            }
        })  
        document.querySelectorAll(`.variants-list option`).forEach(item=>{
            item.removeAttribute('selected');
        })
        document.querySelector(`.variants-list option[data-value="${values}"]`).selected = true;
        let variants_list = document.querySelector('.variants-list');
        let current_variant_id = document.querySelector('.variants-list').options[variants_list. selectedIndex].getAttribute('data-id');
        document.querySelector('.buy-now-id-input').value = current_variant_id;
    }
    swatchChange = (value,type) => {
        let isSoldOut = false;
        if(type == 'Size'){
            let chartParent = document.querySelector('.size-chart-child-wrap .size-section');
            chartParent.querySelectorAll('.swatch-element').forEach(i=>{
                i.classList.remove('active');
            })
            chartParent.querySelectorAll(`.swatch-element td[data-value="${value}"]`).forEach(ele=>{
                ele.parentElement.classList.add('active');
            });
            let parent = document.querySelector('.product-swatch-wrap.Size');
            parent.querySelectorAll('.swatch-element').forEach(i=>{
                i.classList.remove('active');
            });
            let currentEle = parent.querySelector(`.swatch-element[data-value="${value}"]`);
            currentEle.classList.add('active');
            if(currentEle.classList.contains('soldout')){
                isSoldOut = true;
            }
        }
        else if(type == 'Gender'){

        }else{
            debugger;
            let chartParent = document.querySelector('.size-chart-child-wrap .color-section');
            chartParent.querySelectorAll('.swatch-element').forEach(i=>{
                i.classList.remove('active');
            })
            chartParent.querySelector(`.swatch-element[data-value="${value}"]`).classList.add('active');
            let parent = document.querySelector('.product-swatch-wrap.Color');
            parent.querySelectorAll('.swatch-element').forEach(i=>{
                i.classList.remove('active');
            });
            let currentEle = parent.querySelector(`.swatch-element[data-value="${value}"]`);
            currentEle.classList.add('active');
            if(currentEle.classList.contains('soldout')){
                isSoldOut = true;
            }
        }
        document.querySelectorAll('.product-swatch-wrap').forEach(item=>{
            let selectedValue = item.querySelector(".swatch-element.active")
            if(selectedValue){
                selectedValue = selectedValue.getAttribute('data-value');
            }else{
                selectedValue = 'customize';
            }
            item.querySelector('.selected-value').textContent = selectedValue;
        })
        let selectedElement = document.querySelector('.size-chart-inner-wrap .color-section .swatch-element.active');
        if(selectedElement){
            document.querySelector('.size-chart-inner-wrap .color-section .selected-value').textContent = selectedElement.getAttribute('data-value');
        }
        this.setVariantId();
        if(isSoldOut){
            document.querySelectorAll('.product-sold-out').forEach(ele=>{
                ele.classList.remove('hide');;
            });
            document.querySelectorAll('.product-add-to-cart').forEach(ele=>{
                ele.classList.add('hide');
            });
        }else{
            document.querySelectorAll('.product-add-to-cart').forEach(ele=>{
                ele.classList.remove('hide');
            });
            document.querySelectorAll('.product-sold-out').forEach(ele=>{
                ele.classList.add('hide');
            });
        }
    }
    setVariantId = () => {
        // set variant id in select element
        let values = '';
        custom.productJson.options.map((option,index)=>{
            if(index != 0){
                values += '/';
            }
            let parent = document.querySelector('.product-swatch-wrap.'+option);
            values += parent.querySelector('.swatch-element.active').getAttribute('data-value');
            // console.log(parent);
        })  
        document.querySelectorAll(`.variants-list option`).forEach(item=>{
            item.removeAttribute('selected');
        })
        document.querySelector(`.variants-list option[data-value="${values}"]`).selected = true;
        let variants_list = document.querySelector('.variants-list');
        let current_variant_id = document.querySelector('.variants-list').options[variants_list. selectedIndex].getAttribute('data-id');
        document.querySelector('.buy-now-id-input').value = current_variant_id;
    }
    swatchesJson = () => {
        // Find soldout option 2 response to option 1
        if(custom.productJson.options.length > 1){
            // console.log(custom.productJson);
            this.swatchJson[custom.productJson.options[0]] = {};
            let swatchJs = this.swatchJson[custom.productJson.options[0]];
            custom.productJson.variants.map(item=>{
                if(!item.available){
                    if(!swatchJs[item.option1]){
                        swatchJs[item.option1] = [];
                    }
                    swatchJs[item.option1].push(item.option2);
                }
            });
        }else{
            document.querySelectorAll('.swatch-element').forEach(i=>{
                i.classList.remove('soldout');
            });
            custom.productJson.variants.map(item=>{
                if(item.available || item.option1 == "Default Title"){
                    console.log('object');
                }else{
                    document.querySelector(`.swatch-element[data-value=${item.option1}]`).classList.add('soldout');
                }
            });
        }
        // console.log('hello',this.swatchJson);
    }
    swatchesInit = () => {
        // Add sold out class 
        let key = Object.keys(this.swatchJson)[0];
        if(key){
            let parent = document.querySelector('.product-swatch-wrap.'+key);
            if(parent){
                let activeFirst = parent.querySelector('.swatch-element.active')
                if(activeFirst){
                    activeFirst = activeFirst.getAttribute('data-value');
                }else if(key == 'Size'){
                    activeFirst = 'customize';
                }
                document.querySelectorAll('.swatch-element').forEach(i=>{
                    i.classList.remove('soldout');
                });
                if(this.swatchJson[key][activeFirst]){
                    let soldoutValue = this.swatchJson[key][activeFirst]
                    soldoutValue.map(item=>{
                        document.querySelectorAll(`.swatch-element[data-value=${item}]`).forEach(item=>{
                            item.classList.add('soldout');
                        });
                    })
                }
            }
        }
    }
    setDefualtVariant = () => {
        // show selected swatch value for first time
        if(custom.productJson.variants.length > 1){
            document.querySelectorAll('.product-swatch-wrap').forEach(item=>{
                let value = item.querySelector(".swatch-element.active").getAttribute('data-value');
                item.querySelector('.selected-value').textContent = value;
            })
            let element = document.querySelector('.size-chart-inner-wrap .color-section .swatch-element.active');
            if(element){
                document.querySelector('.size-chart-inner-wrap .color-section .selected-value').textContent = element.getAttribute('data-value');
            }
        }
    }
    init = () => {
        this.swatchesJson();
        this.swatchesInit();
        this.setDefualtVariant();
        this.clickEvents();
        if(!custom.productSizeChartIn){
            document.querySelector('.custimize-your-size-button').classList.add('hide');
        }
    }
}
if(document.querySelector('body').classList.contains('template-product')){
    let productSwatchObj = new ProductSwatch;
    custom.swatchEleClick = () => {
        productSwatchObj.clickEvents();
    }
}