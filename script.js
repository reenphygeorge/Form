// Alerts //

let name_alert = document.getElementById("name-alert");
let email_alert = document.getElementById("email-alert");
let phone_alert = document.getElementById("phone-alert");

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

function validate() {
    var name = document.forms["MyEventForm"]["Name"].value;
    var email = document.forms["MyEventForm"]["Email"].value;
    var phone = document.forms["MyEventForm"]["Phone"].value;

    if (name == "") {
        dispenamealert();
        return false;
    }

    if (email == "") {
        dispemailalert();
        return false;
    }

    if (phone == "") {
        dispphonealert();
        return false;
    }

    return true;
}

// dispenamealert();
// dispemailalert();
// dispphonealert();

// Validation //
