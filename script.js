// Alerts //
let name_alert = document.getElementById("name-alert");
let email_alert = document.getElementById("email-alert");
let phone_alert = document.getElementById("phone-alert");
let success_alert = document.getElementById("success-alert");
var flag = 0;

function dispenamealert() {
    name_alert.classList.remove("d-none");
    setTimeout(namealertclose, 3000);

    function namealertclose() {
        name_alert.classList.add("d-none");
    }
}

function dispemailalert() {
    email_alert.classList.remove("d-none");
    setTimeout(emailalertclose, 3000);

    function emailalertclose() {
        email_alert.classList.add("d-none");
    }
}

function dispphonealert() {
    phone_alert.classList.remove("d-none");
    setTimeout(phonealertclose, 3000);

    function phonealertclose() {
        phone_alert.classList.add("d-none");
    }
}

function dispsuccessalert() {
    success_alert.classList.remove("d-none");
    setTimeout(successalertclose, 2000);

    function successalertclose() {
        success_alert.classList.add("d-none");
    }
}

// Validation //
function validate() {
    var name = document.forms["MyEventForm"]["Name"].value;
    var email = document.forms["MyEventForm"]["Email"].value;
    var phone = document.forms["MyEventForm"]["Phone"].value;
    let regex = /([a-zA-Z])$/;
    if (regex.test(name) == false) { 
        dispenamealert();
        return false;
    }

    regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (regex.test(email) == false) {
        dispemailalert();
        return false;
    }
    
    regex = /^[\+]?([0-9]){10,15}$/;
    if (!regex.test(phone)) {
        dispphonealert();
        return false;
    }

    if(flag == 1) {
        return true;
    }
    dispsuccessalert();
    flag = 1;
    setTimeout(returntrue, 1000);
    function returntrue() {
        document.MyEventForm.submit();
    }
    return false;
}