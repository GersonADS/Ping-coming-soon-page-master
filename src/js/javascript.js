//inputs 

const $Email = document.querySelector('#_email');
const $Button = document.querySelector('.btn');



let RegExp_ = new RegExp('^[A-Z a-z 0-9]{5,10}[@]+[a-z]{4,}.[a-z]{2,3}$');

$Button.addEventListener('click',()=>{
    
    let $Alert = document.getElementById("alert");
    $Alert.style.color = '';
    $Alert.innerText =''

    let Emails = RegExp_.test($Email.value);
    
    if(Emails === false){
    $Email.style.border = '1px solid hsl(354, 100%, 66%) '
    $Alert.innerText  = "Please provide a valid email address";
    $Alert.style.color = 'hsl(354, 100%, 66%)';
    }
    else
    {
        $Email.style.border = '1px solid hsl(0, 0%, 78%)'
    }

});


