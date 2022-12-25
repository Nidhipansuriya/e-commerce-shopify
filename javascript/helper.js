export const formatMoney = (t) => {
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
export const getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const addItems = (data, item) => {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === 422) {
        alert(data.description);
        return;
      }
      theme.openCartDrawer = true;
      new theme.CartDrawer();
      item.classList.remove('btn--loading');
    })
    .catch((error) => {
      alert("Something went wrong");
      console.log(error);
    });
}

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const toggleEle = (el, value) => {
  var display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;
  if (display == 'none') el.style.display = value;
  else el.style.display = 'none';
}
export const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
export const  blankBgOpen = () => {
  document.querySelector('.black-bg').classList.add('active');
  document.querySelector('body').classList.add('overflow-hidden');
};
export const blankBgClose = () => {
  document.querySelector('.black-bg').classList.remove('active');
  document.querySelector('body').classList.remove('overflow-hidden');
};
export const openSideCartLoader = (parent) => {
  document.querySelector('.side_cart_wrapper_fixed').classList.add('active');
  parent.querySelector('.side-cart-loader').classList.add('active');
}
export const closeSideCartLoader = ()=>{
  document.querySelector('.side_cart_wrapper_fixed').classList.remove('active');
  let loader = document.querySelectorAll('.side-cart-loader');
  if(loader.length > 0){
    loader.forEach((item,i)=>{
      item.classList.remove('active');
    })
  }
}
export const openCartLoader = (parent) => {
  document.querySelector('.cart_form_wrapper_fixed').classList.add('active');
  document.querySelector('.cart-loader',parent).classList.add('active');
}
export const closeCartLoader = ()=>{
  document.querySelector('.cart_form_wrapper_fixed').classList.remove('active');
  let loader = document.querySelectorAll('.cart-loader');
  if(loader.length > 0){
    loader.forEach((item,i)=>{
      item.classList.remove('active');
    })
  }
}
export const inToCm = (value) =>{
  let cm = parseFloat(value);
  cm = cm * 2.54;
  return cm.toFixed(2);
}
export const cmToIn = (value) =>{
  let inch = parseFloat(value);
  inch = inch / 2.54;
  return inch.toFixed(2);
}
export const showToast = (value) => {
  let toastEle = document.querySelector('.toast-msg');
  toastEle.innerHTML = value;
  toastEle.classList.remove('hide');
  setTimeout(()=>{
    toastEle.classList.add('hide');
  },5000);
}
export const generateUniqueId = function () {
  return "b_" + new Date().valueOf() + Math.random().toFixed(2).substring(2);
};

export const showPopup = (html,flag) => {
  const div = document.createElement('div');
  div.innerHTML = 
  `<div class="popup-custom-overlay${flag ? ' product-section' : ' categories-section'}">
  <div class="categories-title-wrap"><span>Add to list</span><span class="close-btn button">X</span></div>
    <div class="popup-custom-wrap">
      <div class="popup-inner-wrap">
        ${html}
      </div>
    </div>
  </div>`;
  document.querySelector('body').appendChild(div);
  blankBgOpen();
}