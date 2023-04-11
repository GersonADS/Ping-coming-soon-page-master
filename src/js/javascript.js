//inputs 

const $Email = document.querySelector('#_email');
const $Button = document.querySelector('.btn');

let RegExp_ = new RegExp('^[A-Z a-z 0-9]{5,10}[@]+[a-z]{4,}.[a-z]{2,3}$');

$Button.addEventListener('click',()=>{

    let Emails = RegExp_.test($Email.value);
    
    console.log(Emails)

    if(typeof Emails === false ){
        console.log('ta pegando')
        // $Email.style.border= '2px solid black';

    }

});


