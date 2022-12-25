class account{
    constructor(){
        this.init();
    }
    clickEvents = () => {
        document.querySelector("#RecoverPassword").addEventListener("click",(e)=>{
            document.querySelector("#login-form").classList.add('d-none');
            document.querySelector("#recover-form").classList.remove('d-none');
        });   
        document.querySelector("#HideRecoverPasswordLink").addEventListener("click",(e)=>{
            document.querySelector("#recover-form").classList.add('d-none');
            document.querySelector("#login-form").classList.remove('d-none');
        });             
    }
    init = () => {
        this.clickEvents();
    }
}

if(document.querySelector('.account-page')){
    // new CollectionPage;
    new account;
}