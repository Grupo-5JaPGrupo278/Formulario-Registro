function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function CheckFields() {
    let name = document.getElementById('nombre').value.length;
    let lastname = document.getElementById('apellido').value.length;
    let email = document.getElementById('email').value.length;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    let chkbx = document.getElementById('terminos');
    if(name > 0 && lastname > 0 && email > 0 && password1.length >= 6 && password2.length >= 6 && chkbx.checked && password1 == password2){
        return true;
    }else{
        return false;
    }
}


const button = document.getElementById('regBtn');

button.addEventListener("click", function(e){
    if (CheckFields()){
        showAlertSuccess();
        location.href ='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
    }else{
        showAlertError();
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
    
})