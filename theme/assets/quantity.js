qauntityChange = () => {
    let plusItem = document.getElementById("qty-plus");
    let minusItem = document.getElementById("qty-minus");

    if (plusItem) {
        plusItem.addEventListener("click", (e) => {
            let target = document.getElementById("product_qty_num");

            let value = parseInt(target.value) + 1;
            target.value = value;

        });
    }

    if (minusItem) {
        minusItem.addEventListener("click", (e) => {
            let target = document.getElementById("product_qty_num");

            if (target.value > 1) {
                let value = parseInt(target.value) - 1;
                target.value = value;
            }
        });
    }
}
qauntityChange();




sideqauntityChange = () => {
    let sideplusItem = document.getElementById("sideqty-plus");
    let sideminusItem = document.getElementById("sideqty-minus");

    if (sideplusItem) {
        sideplusItem.addEventListener("click", (e) => {
            let target = document.getElementById("sideproduct_qty_num");

            let value = parseInt(target.value) + 1;
            target.value = value;
            console.log('gbhhbn')

        });
    }

    if (sideminusItem) {
        sideminusItem.addEventListener("click", (e) => {
            let target = document.getElementById("sideproduct_qty_num");
            console.log('gbhhb  vfvrfn')

            if (target.value > 1) {
                let value = parseInt(target.value) - 1;
                target.value = value;
            }
        });
    }
}
sideqauntityChange();