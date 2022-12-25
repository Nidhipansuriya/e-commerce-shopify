clickEvent = () =>{
    clickEvent();
    openfilter_loder();
}


openfilter_loder = () => {
    document.querySelector('.filter_loder').classList.add('active');
}


closefilter_loder = ()=>{
    document.querySelector('.filter_loder').classList.remove('active');
}


const formatMoney = (t) => {
    let e = custom.moneyFormat;
        function o(t, e) {
                return void 0 === t ? e : t
        }
        function i(t, e, i, r) {
                if (e = o(e, 2),
                    i = o(i, ","),
                    r = o(r, "."),
                    isNaN(t) || null == t)
                    return 0;
                t = (t / 100).toFixed(e);
                var n = t.split(".");
                return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (n[1] ? r + n[1] : "")
        }
      "string" == typeof t && (t = t.replace(".", ""));
        var r = ""
            , n = /\{\{\s*(\w+)\s*\}\}/
            , a = e || "${{amount}}";
            switch (a.match(n)[1]) {
            case "amount":
                r = i(t, 2);
                break;
            case "amount_no_decimals":
                r = i(t, 0);
                break;
            case "amount_with_comma_separator":
                r = i(t, 2, ".", ",");
                break;
            case "amount_with_space_separator":
                r = i(t, 2, " ", ",");
                break;
            case "amount_with_period_and_space_separator": 
                r = i(t, 2, " ", ".");
                break;
            case "amount_no_decimals_with_comma_separator":
                r = i(t, 0, ".", ",");
                break;
            case "amount_no_decimals_with_space_separator":
                r = i(t, 0, " ");
                break;
            case "amount_with_apostrophe_separator":
                r = i(t, 2, "'", ".")
        }
        return a.replace(n, r)
}


collectionInput = (thisElem) => {
    let parent = thisElem.parentElement;
    // console.log("parent",parent);
    if(thisElem.checked){
        parent.classList.add("active_filter");
    }
    else {
        parent.classList.remove("active_filter");
    }
    collFilterInit(thisElem);
}


collFilterInit = (thisElem) => {
    // console.log("nidhi123456");
    let active_collection = document.querySelectorAll(".active_filter").firstElementChild; 
    let active_coll_link = thisElem.getAttribute('data-value');
    // console.log(active_coll_link);
    // console.log('thisElem',thisElem);
    let form_url_id = '';
    let coll_all = '/all-category'; 
    let shopurl = document.querySelector('.all_category_section').getAttribute('data-url');
    // console.log(shopurl);
    if(window.location.href.indexOf(coll_all) > -1){
        form_url_id = shopurl + '/' + 'collections/' + active_coll_link;
    }else{
        form_url_id = shopurl + '/' + 'collections/' + active_coll_link;
    }
    // console.log(form_url_id);
    window.history.pushState({form_url_id}, null, form_url_id);
    // let fil_link = document.getElementById('cate_pg');
    // console.log("call");
    filterInit(form_url_id,false);
    // addFilterUrl(form_url_id);
  }


checkinput = (thisElem,flag) => {
    // console.log("inside check input")
    let parent = thisElem.parentElement;
    // console.log(parent);
    if(thisElem.checked){
        parent.classList.add("active_filter");
    }
    else {
        parent.classList.remove("active_filter");
    }
    findActiveFilter(thisElem,true,false);
}


setSelected = () => {
    // console.log("setSelected ");
    let optionSections = document.getElementsByClassName("custom-opion");
// console.log(optionSections);
for( let i = 0; i < optionSections.length; i++ ){
    let sliders = optionSections[i].getAttribute("value");
// console.log(sliders)
let url = window.location.href;
let active_sort_add = url.split('sort_by=');
active_sort_add[1];

// console.log(url)
// console.log(active_sort_add)

if ( sliders == active_sort_add[1] ) {
    document.getElementById('sort-by').getElementsByTagName('option')[i].selected = 'selected';
    // console.log('sort_true');
}
else{
    // console.log('sort_active_false');
}
}
}



filterInit = async (form_url_id,flag) => {
    let url = '';
  
      if(flag == true){
          url = `${form_url_id}`;
      }
      else {
          url = `${form_url_id}?view=filter`;
      }
    let currentFilter = await fetch(url);
  //   console.log(currentFilter)
    if(currentFilter.ok){
      currentFilter = await currentFilter.text();
      //   console.log(currentFilter);
      if (document.querySelector(".all_category_section")){
          document.querySelector(".all_category_section").innerHTML = "";
          let divContent = document.createElement("div");
          let parser = new DOMParser();
      //   console.log(parser);
      let filterPage = parser.parseFromString(currentFilter, 'text/html');
      filterPage = filterPage.body.innerHTML;
      divContent.innerHTML = filterPage;
  
      //   console.log(divContent.innerHTML);
      let innerHt = divContent.querySelector('.all_category_section').innerHTML;
      //   console.log(innerHt);
      document.querySelector(".all_category_section").innerHTML = innerHt;
      setSelected();
      }
  }
  addFilterUrl();
  clickEvent();
  changeEvent();
  inputEvent();
  
}


findActiveFilter =  (thisElem,flag,flag2) => {
    // console.log("inside findActiveFilter");
    let shopurl = document.querySelector('.all_category_section').getAttribute('data-url');
    let collurl = document.querySelector('.category-section-wrap').getAttribute('data-collurl');
    let coll_all = '/all';  
    let activeFilter = [];
    let form_url_id = '';
    let active_tag_url = ''; 
    let sortFilters = [];

  let fil_link = document.getElementById('cate_pg');
//   console.log(fil_link);
  let URL_links = fil_link.getAttribute("data-sort"); 
//   console.log(URL_links);
  let filter_data = fil_link.getAttribute("data-filter");

  let active_filters_temp = document.querySelectorAll(".active_sort_filter");
//   console.log(active_filters_temp);

  if(active_filters_temp.length > 0){
      active_filters_temp.forEach((elem,i)=>{
          let filter_link = elem.getAttribute('data-link');
          // console.log(filter_link);
          // sortFilters = [filter_link];
          sortFilters= [filter_link];
          // console.log("sortFilters_active",sortFilters);
    // console.log(elem)
      })
  }

  if(flag2 != true){

    if(flag != true){
        activeFilter.push(thisElem);
        // console.log("thisElem",thisElem);
        // console.log("true not");
    }
    else{
        let current_filter = thisElem.getAttribute('data-val');
        // console.log(current_filter,"flag2");`
        // console.log("true");
    }
}
else {
    active_tag_url = thisElem;
    // console.log("active_tag_url",active_tag_url);
}


let active_filters = document.querySelectorAll(".active_filter");
// console.log(active_filters);
if(active_filters.length > 0){
// console.log("active_filters");
    active_filters.forEach((elem,i)=>{
        // console.log(elem);
        
        let filter_param_name = elem.children[0];
        // console.log(filter_param_name);
        let filter_link = filter_param_name.getAttribute('data-link');
        // console.log(filter_link);
        activeFilter.push(filter_link);
    })
}

if(flag2 == true) {
    if(window.location.href.indexOf(coll_all) > -1){
        form_url_id = collurl + '/' + active_tag_url +'?' + activeFilter.join('&');
        // console.log(form_url_id,"sort url1");
    }else{
        form_url_id = collurl + '/' + active_tag_url + '/?'+ activeFilter.join('&');
        // console.log(form_url_id,"sort url2");
    }
}
else{
    if(window.location.href.indexOf(coll_all) > -1){

        form_url_id = collurl+ '/?'+ activeFilter.join('&') +'&'+ URL_links;
        // console.log(form_url_id)

    }else{
        form_url_id = collurl+ '/?'+ activeFilter.join('&') +'&'+ URL_links;
        // form_url_id = collurl+ '/?'+ activeFilter.join('&') +'&'+ URL_link;
    }   
}

window.history.pushState({form_url_id}, null, form_url_id);
fil_link.getAttributeNode("data-filter").value = activeFilter;
//   console.log(fil_link);
  filterInit(form_url_id,true);
  addFilterUrl(form_url_id);

}


changeEvent = () => {
    let collBtn = document.querySelectorAll(".collection-filter");
    let last;
  if(collBtn.length > 0){
    collBtn.forEach((item,i)=>{
        let that = e.currentTarget;
        collectionInput(that);
        if(last){
            last.checked=false;
        }
        e.target.checked=true;
        last=e.target;
    });
  }

  let addBtns = document.querySelectorAll(".custom-checkbox-input");
//   console.log(addBtns);
  if(addBtns.length > 0){
    // console.log("nidhi123456");
      addBtns.forEach((item,i)=>{
          item.addEventListener("change",(e)=>{
              let that = e.currentTarget;
              checkinput(that);
              getVals();
              openfilter_loder();
            //   console.log(that);
          });
      })
  }

  let tagBtns = document.querySelectorAll(".tag-input");
  if(tagBtns.length > 0){
    tagBtns.forEach((item,i)=>{
        item.addEventListener("change",(e)=>{
            let thisItem = e.currentTarget;
            checkTag(thisItem);
            getVals();
        });
    })
}

  let sliderSections = document.getElementsByClassName("range-slider");
            //   console.log(sliderSections);
              for( let i = 0; i < sliderSections.length; i++ ){
                  let sliders = sliderSections[i].getElementsByTagName("input");
                //   console.log(sliders);          

                for( let j = 0; j < sliders.length; j++ ){
                    if( sliders[j].type ==="range" ){
                        sliders[j].onchange = getVals;
                    }
                }
               }
}


inputEvent = () => {
    document.querySelector("#price-range-min")?.addEventListener('input', (e) => {
    // console.log("min");
        rangeInputListen();
    })

    document.querySelector("#price-range-max")?.addEventListener('input', (e) => {
    // console.log("max");
        rangeInputListen();
    })
    // console.log("inputEvent");
    
}


rangeInputListen = () => {
    let slides = document.querySelectorAll(".pricerange");
    let slide1_val = parseFloat( slides[0].value);
    let slide2_val = parseFloat( slides[1].value );
    // console.log(slide1_val);
    // console.log(slide2_val);
    let slide1 = ( slides[0]);
    let slide2 = ( slides[1]);
    // console.log(slide1);
    // console.log(slide2);
    if( slide1 > slide2 ){ 
        let tmp = slide2; slide2 = slide1; slide1 = tmp; 
    }

        if( slide1_val > slide2_val ){
            // console.log(slide1_val);
            // console.log(slide2_val);
        let tmp = slide2_val; 
        slide2_val = slide1_val; 
        slide1_val = tmp; 
        // console.log(slide1_val);
        // console.log(slide2_val);
    }
    // console.log( slide1_val + "-" + slide2_val);
    let rangeValues = document.querySelector('.rangeValues');
    // console.log(rangeValues);
    let current_value = formatMoney(slide1_val*100) + "-" + formatMoney(slide2_val*100);
        rangeValues.textContent = current_value;
        // console.log(current_value);


}


getVals = () => {
    let slides = document.querySelectorAll(".pricerange");
    let slide1_val = parseFloat( slides[0].value);
    let slide2_val = parseFloat( slides[1].value);
    let slide1 = ( slides[0]);
    let slide2 = ( slides[1]);
    // console.log(slide1);
    // console.log(slide2);
    if( slide1 > slide2 ){ 
        let tmp = slide2; slide2 = slide1; slide1 = tmp; 
    // console.log(slide1,"1");
    // console.log(slide2,"2");
    }
    if( slide1_val > slide2_val ){
        let tmp = slide2_val; 
        slide2_val = slide1_val; 
        slide1_val = tmp; 
    //     console.log(slide1_val,"1");
    // console.log(slide2_val,"2");
    }
    let parent = slides.parentElement;
    // console.log(parent);
    if(slide1?.value || slide2?.value){
    // console.log( slide2.value);
        slide1.value=slide1_val;
        slide2.value=slide2_val;
    // console.log( slide2.value);
    }
    
    let slide1Gte = slide1.getAttribute('data-link');
    let slide2Lte = slide2.getAttribute('data-link');

    let slide1Url = slide1Gte+'='+slide1_val;
    let slide2Url = slide2Lte+'='+slide2_val;

    let finalUrl = `${slide1Url}&${slide2Url}`;
    findActiveFilter(finalUrl,false,false);
    // console.log(finalUrl);
   
}


setDefaultValue = () => {
    let slides = document.querySelectorAll(".pricerange ");
    let slide1 = ( slides[0]);
    let slide2 = ( slides[1]);
    
    // console.log(slide1?.value || slide2?.value);
    if(slide1?.value || slide2?.value){
        slide1.value = 0;
        slide2.value = slide2.max;
        // console.log(slide1.value);
        // console.log(slide2.value);
    }
}   


checkTag = (thisItem) => {
    // console.log(thisItem);
    let parent = thisItem.parentElement;
    if(thisItem.checked){
        parent.classList.add("active_tag");
    }
    else {
        parent.classList.remove("active_tag");
    }

    let active_content = [];
    let tag_link = '';
    
    // console.log(active_tag);
    let active_tag = document.querySelectorAll('.active_tag');
    if(active_tag.length > 0){
        active_tag.forEach((elem,i)=>{
            
            let tag_content = elem.children[0];
            let tag_link = tag_content.getAttribute('data-link');
            active_content.push(tag_link);

        })

    }
    tag_link = active_content.join('+');
    findActiveFilter(tag_link,false,true);
}


clickEvent = () => {
    let filter_sm_btn = document.querySelector(".open_btn_filter");;
    filter_sm_btn.addEventListener("click",(e) => {
        e.preventDefault();
        openFilterBox();
        // console.log("open")
    })

    let filter_sm_close_btn = document.querySelector(".close_btn_filter");
    filter_sm_close_btn?.addEventListener("click",() => {
        closeFilterBox();
        // console.log("close")
    })
}


openFilterBox = () => {
    let filter_box = document.querySelector('.filter-box');
    filter_box.style.left = "0";
    filter_box.style.display = "block";
    let filter_button = document.querySelector('.open_btn_filter');
    filter_button.style.display = "none";
}


closeFilterBox = () => {
    let filter_box = document.querySelector('.filter-box');
    filter_box.style.left = "-450px";
    let filter_button = document.querySelector('.open_btn_filter');
    filter_button.style.display = "block";
}


sortFilterInit = (thisElem) => {
// console.log("IT IS WORKING")
    let active_sort_collection = document.querySelectorAll(".active_sort_filter").firstElementChild; 
    // let active_sort_link = thisElem.getAttribute('data-value');
    // console.log(active_sort_link);
    let sort_url_id = '';
    let sort_all = '/all-category'; 
    let sorturl = document.querySelector('.all_category_section').getAttribute('data-url');
    // console.log(sorturl);
    if(window.location.href.indexOf(sort_all) > -1){
        sort_url_id = sorturl + '/' + 'collections/' + active_sort_link;
    }else{                                                                        
        sort_url_id = sorturl + '/' + 'collections/' + active_sort_link;
    }

    // console.log(sort_url_id);

    window.history.pushState({sort_url_id}, null, sort_url_id);

    sortInit(sort_url_id,false);
}



sortInit = async (sort_url_id,flag) => {
    let url_sort = '';
    if(flag == true){
        
        url_sort = `${sort_url_id}`;
        // console.log(url_sort);
    }
    else {
        url_sort = `${sort_url_id}?view=filter`;
    }

    let currentSortFilter = await fetch(url_sort);
    // console.log(currentSortFilter);
    if(currentSortFilter.ok){
        currentSortFilter = await currentSortFilter.text();
        // console.log(currentSortFilter);
        if (document.querySelector(".collection-products")){
            document.querySelector(".collection-products").innerHTML = "";
            let divSortContent = document.createElement("div");
            let sortParser = new DOMParser();
            let filterSortPage = sortParser.parseFromString(currentSortFilter, 'text/html');
            // console.log(filterSortPage);
            filterSortPage = filterSortPage.body.innerHTML;
            divSortContent.innerHTML = filterSortPage;
            // console.log(divSortContent);
            let innerSort = divSortContent.querySelector('.collection-products').innerHTML;
            document.querySelector(".collection-products").innerHTML = innerSort;
            closefilter_loder();
            setSelected();

        }
    }

    changeEvent();

}


addFilterUrl = (form_url_id,flag) => {
// console.log("inside the addfilter");
let hello_sort_select = document.querySelectorAll("#sort-by");
// console.log(hello_sort_select);
let add_shopurl = document.querySelector('.all_category_section')?.getAttribute('data-url');
// console.log(add_shopurl);
let add_collurl = document.querySelector('.category-section-wrap')?.getAttribute('data-collurl');
let hello_SortFilters = [];
let hello_sort_url_id = '';

let full_url_link = '';
if(flag == true){
    full_url_link = `${form_url_id}`;
}
else {
    full_url_link = `${form_url_id}?view=filter`;
}

if(hello_sort_select.length > 0){
    hello_sort_select.forEach((item,i)=>{
        item.addEventListener("change",(e)=>{
            let that = e.currentTarget;
            let target = that.value;
            // console.log(target);
            openfilter_loder();
            let selected_opt = that.options[that.selectedIndex];
            // console.log(selected_opt);
            let fil_link_old = document.getElementById('cate_pg').getAttribute('data-filter');
            var fil_link = fil_link_old.replace(',','&')
            // console.log(fil_link);


            for ( let i = 0, len = that.options.length; i < len; i++ ) {
                opt = that.options[i];
                if ( opt.selected === true ) {
                    opt.classList.add("active_sort_filter");
                    // console.log(opt);
                }
                else {
                    opt.classList.remove("active_sort_filter");
                }
            }
            let hello_active_filters = document.querySelectorAll(".active_sort_filter");
            // console.log(hello_active_filters);
            if(hello_active_filters.length > 0){
                hello_active_filters.forEach((elem,i)=>{
                    
                    let hello_filter_link = elem.getAttribute('data-link');
                    // console.log(elem);
                    // console.log(hello_filter_link);
                    hello_SortFilters= [hello_filter_link]; 
                    // console.log(hello_SortFilters);
                })
            }
            

            if(fil_link != ""){
                // form_url_id = collurl+ '/?'+ activeFilter.join('&') +'&'+ sortFilters;
                hello_sort_url_id = add_shopurl + add_collurl +'/?' + fil_link + '&' + hello_SortFilters;
                // console.log(hello_sort_url_id)
            // console.log("call");

            }
            else {
                hello_sort_url_id = add_shopurl + add_collurl +'/?' + hello_SortFilters;
                // console.log(hello_sort_url_id)
            }

            window.history.pushState({hello_sort_url_id}, null, hello_sort_url_id);
            let sort_link = document.getElementById('cate_pg');
            sort_link.getAttributeNode("data-sort").value = hello_SortFilters;
            // console.log(hello_SortFilters)
                    // console.log("hello",hello_sort_url_id)

                    sortInit(hello_sort_url_id,true);
                    // sortFilterInit(hello_sort_url_id);

        });
    })
}
}


selectedFilter = () =>{
    selectedValue = [];

    if (that.classList.contains('filter-label')) {
        selectedValue = that.getAttribute('data-value');
        console.log("selectedValue",selectedValue)
    } else {
        selectedValue = that.getAttribute('data-value');
        type = that.closest('.product-swatch-wrap')
        if (type) {
            type = type.getAttribute("data-type");
        } else {
            type = that.closest('.size-chart-swatch-wrap.Color').getAttribute("data-type");
        }
    }
}


addFilterUrl();
setSelected();
changeEvent();
clickEvent();
inputEvent();
setDefaultValue();