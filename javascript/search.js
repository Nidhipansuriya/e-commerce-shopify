blankBgOpen = () => {
  // console.log('bgopen');
  document.querySelector(".black-bg").classList.toggle("active");
  document.querySelector("body").classList.toggle("overflow-hidden");
};

blankBgClose = () => {
  document.querySelector(".black-bg").classList.remove("active");
  document.querySelector("body").classList.remove("overflow-hidden");
};

closeAll = () => {
  let search_form_result = document.querySelector(".search-form ");
  search_form_result.classList.remove("top-75px");
  // document.querySelector("#side_cart").classList.remove("active");
  searchClose();
  blankBgClose();
};

searchOpen = () => {
  document.querySelector(".quick-search").classList.toggle("search_popup_open");
};

searchClose = () => {
  document.querySelector(".quick-search").classList.remove("search_popup_open");
};

toggleDropdown = () => {
  document.querySelector(".search-icon-btn").addEventListener("click", (e) => {
    // console.log("search")
    searchOpen();
    blankBgOpen();
  });
  document.querySelector(".close-form").addEventListener("click", (e) => {
    document.querySelector(".quick-search-form").reset();
    document.querySelector(".search-result").style.display = "none";
    searchClose();
    blankBgClose();
  });
};

clearEvent = () => {
  document.querySelector(".search__input").addEventListener("input", (e) => {
    if (e.target.value === "") {
      document.querySelector(".search-result").style.display = "none";
    } else if (e.target.value !== "") {
      document.querySelector(".search-result").style.display = "block";
    } else {
      searchProduct(e);
    }
  });
};

inputEvents = () => {
  //   console.log("inputEvents");
  document.querySelector(".search__input").addEventListener("input", (e) => {
    // console.log(e.target.value, "great");
    if (e.target.value === "") {
      let search_data = document.querySelector(".search-data");
      //   console.log(search_data, "great");
      search_data.innerHTML = "";
      document.querySelector(".search-bottom").style.display = "none";
    } else {
      //   console.log("not great");
      searchProduct(e);
    }
  });
};

searchProduct = async (e) => {
  //   console.log("searchProduct");
  let query = "";
  query = e.target.value;
  await fetch(
    `/search/suggest.json?q=${query}&resources[type]=product&resources[limit]=10&resources[options][unavailable_products]=last`
  )
    .then((response) => response.json())
    .then((suggestions) => {
      const productSuggestions = suggestions.resources.results.products;
      console.log(productSuggestions, "productSuggestions");

      if (productSuggestions.length === 0) {
        // var firstProductSuggestion = productSuggestions[0];
        resultNotFound(query);
      } else {
        let search_form_result = document.querySelector(".search-form ");
        search_form_result.classList.add("top-75px");
        resultFound(productSuggestions);
      }
    });
  //   console.log(query, "query");
};

resultNotFound = (query) => {
  console.log("not found");
  let search_data = document.querySelector(".search-data");
  search_data.innerHTML = "";
  let search_bottom_html = `<span class="result-count">No Result Found</span>`;
  let search_bottom = document.querySelector(".search-bottom");
  search_bottom.innerHTML = search_bottom_html;
};

resultFound = (productSuggestions) => {
  console.log(" found");

  let search_data = document.querySelector(".search-data");
  search_data.innerHTML = "";
  let str = "";
  productSuggestions.forEach((item, index) => {
    let itemImage = item.image;
    let itemName = item.title;
    let itemPrice = item.price;
    let itemUrl = item.url;

    // console.log(itemImage, "    itemImage");
    // console.log(itemName, "    itemName");
    // console.log(itemPrice, "    itemPrice");
    // console.log(itemUrl, "    itemUrl");

    str = `<div class="row search-product d-flex " style="width: 100%;">
                <div class="col-lg-2 col-md-3 col-sm-6 col-12">
                    <div class="search_product_img">
                        <a href="${itemUrl}" class="pre-search-url" >
                            <img src="${itemImage}" alt="item-img" class="search-image img-fluid" >
                        </a>
                    </div>
                 </div>
                <div class="col-lg-10 col-md-9 col-sm-6 col-12">
                    <div class="search_product_details">
                        <a href="${itemUrl}" style="text-decoration: none;">
                            <p style="color: black;">${itemName}</p>
                        </a>
                        <p class="price">$ ${itemPrice}</p>
                    </div>
                </div>
                <hr>
            </div>`;
    search_data.innerHTML += str;
  });

  let result_length = productSuggestions.length;
  let search_bottom_html = `<span class="result-msg" style="cursor: default;">View All Result</span>`;
  let search_bottom = document.querySelector(".search-bottom");
  search_bottom.style.display = "block";
  search_bottom.innerHTML = search_bottom_html;

  document.querySelector(".result-msg").addEventListener("click", (e) => {
    document.querySelector(".quick-search-form").submit();
  });
  clickEvents();

  //   console.log(result_length);
};

clickEvents = () => {
  document.querySelector(".black-bg").addEventListener("click", () => {
    // console.log("nkjienfjeknd");
    closeAll();
  });
  let element = document.querySelectorAll(".search-product");
  //   console.log(element, "element");
  element.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      //   console.log(item, "item");
      let that = e.currentTarget;
      // console.log(that);
      searchFormEvent(that);
    });
  });
};

searchForm = () => {
  if (document.querySelector("body").classList.contains("template-search")) {
    console.log("search page is not working");

    console.log("hi");
    let search_terms = document.querySelector(".search-form-control").value;

    if (search_terms.length > 0) {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxGXY7RcGnxo6ONucbM5fOoItqaRDtVGtLqHVmu7V9dov-Ej2SLrF-i3wjm0DigmkC8/exec";
      const form = document.forms["search-page-form"];

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then()
        .catch((error) => console.error("Error!", error.message));
    }
  }
};

searchFormEvent = (that) => {
  let product_url_elem = that.querySelector(".pre-search-url");
  let product_url = product_url_elem.getAttribute("href");
  let pre_search_query = document.querySelector(".search__input").value;
  let pre_search_q = document.querySelector(".pre-search-form-query");
  let pre_search_url = document.querySelector(".pre-search-form-url");
  pre_search_q.value = pre_search_query;
  pre_search_url.value = product_url;

  const scriptLINK =
    "https://script.google.com/macros/s/AKfycbwMvxnG6_SYa8V-adALJRYxNMF21lXgLALquakbZkfJePoNSk_oEnWZkI6FCgCq91MU/exec";
  const pre_form = document.forms["pre-search-form"];

  fetch(scriptLINK, { method: "POST", body: new FormData(pre_form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
};
toggleDropdown();
clickEvents();
inputEvents();
clearEvent();
searchForm();
