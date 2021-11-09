var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

document.getElementById("email");
document.getElementById("pwd");

function noempty() {
        if (email.value=="")
        {
            alert("Enter your email");
            return false;
        }

        else if (pwd.value==""){
            alert("please enter your password");
            return false;
        }

        else if(pwd.value.length<=8){
            alert("password is too short");
            return false;
           
        }
        else{
            alert("Succesfully Logged in");
            return true;
        }
}




// Email Validation

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


// password

 var password = document.getElementById("psw"),
 confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(psw.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
{
psw.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

}

//                         var check = function() {
//   if (document.getElementById('psw').value == document.getElementById('confirm_password').value) 
  
//   {
//     document.getElementById("message1").style.color ="green";
//     document.getElementById("message1").innerHTML = 'Password is Matching';
//   } else {
//     document.getElementById("message1").style.color = 'red';
//     document.getElementById("message1").innerHTML = 'Password does not Match';
//   }
// }
                  