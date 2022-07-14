console.log("from home.js");

var xmlHttp = new XMLHttpRequest();

xmlHttp.open("GET", "/home", false); // false for synchronous request
xmlHttp.setRequestHeader("authorization", "Bearer " + localStorage.getItem("access_token"));
xmlHttp.send();
