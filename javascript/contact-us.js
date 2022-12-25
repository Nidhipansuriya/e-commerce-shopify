// class contactusPage{
//     constructor(){
//         this.init();
//     }
//     formSubmit = () => {
//         let select_que = document.querySelector("#select-queries");
//         let select_que_val = select_que.value;
//         let form_select_input = document.querySelector("#input-que");
//         form_select_input.value = select_que_val;
        
//         select_que.addEventListener("change", (e) => {
//             let that = e.currentTarget;
//             let val = that.value;
//             form_select_input.value = val;

//         });
        
//         // console.log('form');
//         const scriptURL = 'https://script.google.com/macros/s/AKfycbzKrA0i-IlADrp6IcENJKMISjVk6w83amZj-Y8tELO0fzf5N7jwxovLehQ9KfwS7TSa/exec'
//         const form = document.forms['contact-form']
          
//         form.addEventListener('submit', e => {
//           e.preventDefault()
//           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//             .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//             .catch(error => console.error('Error!', error.message))
//         })
//     }
//     init = () => {
//         this.formSubmit();
//     }
// }
// if(document.querySelector('.contact-section-content')){
//     new contactusPage;
// }