const myForm = document.getElementById("form");

var myUsername = myForm.querySelector("div #username");
var myPassword = myForm.querySelector("div #password");


myForm.addEventListener("submit", formHandler);

function formHandler(e) {

    e.preventDefault();

    var userInfo = {
        "username": myUsername.value,
        "password": myPassword.value
    }

    var options = {
        method: 'POST',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8',
        },
        body: JSON.stringify(userInfo)
    }

    var fetchRes = fetch(
        "/userLogin", options);

    fetchRes.then(response => response.json())
        .then(data => {
            console.log(data.message);
            localStorage.setItem("access_token", data.access_token);

        });

    myForm.querySelector("div #reset").click();
}
