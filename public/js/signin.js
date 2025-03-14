"use strict";

// Modal windows
const loginWindow = new BSN.Modal("#login-window")
const registerWindow = new BSN.Modal("#register-window")
const resetWindow = new BSN.Modal("#reset-window")

document.querySelector(".forgotPassword").addEventListener("click", ()=>{
    console.log("clicked")
    loginWindow.hide()
    resetWindow.show()
    console.log("CLicked")
})

document.querySelector("#registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
	showAlert("Processing...", "info", "#register-alert");
    var form = document.querySelector("#registerForm")
    var formData = new FormData(form)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/register", true);
	xhr.send(formData);
    xhr.onreadystatechange = function() {
         if (xhr.readyState != 4){return}
         if (xhr.status === 200) {
            window.location.reload(true)
            showAlert("Registration successful</br> Get started by taking a test", "success", "#register-alert");
        } else{
			showAlert(xhr.response, "danger", "#register-alert")
        }
    }
})