console.log("connect");

var wrongCount = 0;

function collectData(){

const Email = document.getElementById("Email").value;
const Password = document.getElementById("Password").value;

var valid = true;



if(!Email){
document.getElementById("EmailErr").innerHTML="Email is required";
valid = false;
}
else if(!Email.includes("@")){
document.getElementById("EmailErr").innerHTML="Email must contain @";
valid = false;
}
else{
document.getElementById("EmailErr").innerHTML="";
}



if(!Password){
document.getElementById("PasswordErr").innerHTML="Password is required";
valid = false;
}
else if(Password.length < 6){
document.getElementById("PasswordErr").innerHTML="Password must be at least 6 characters";
valid = false;
}
else if(!Password.includes("#")){
document.getElementById("PasswordErr").innerHTML="Password must contain #";
valid = false;
}
else{
document.getElementById("PasswordErr").innerHTML="";
}



if(!valid){
wrongCount++;
document.getElementById("count").innerHTML = wrongCount;
return false;
}

alert("Login Successful");

return false;
}



function checkEmail(){

var email = document.getElementById("Email").value;

if(email == ""){
document.getElementById("EmailErr").innerHTML="Email is required";
}
else if(!email.includes("@")){
document.getElementById("EmailErr").innerHTML="Email must contain @";
}
else{
document.getElementById("EmailErr").innerHTML="";
}

}



function checkPassword(){

var password = document.getElementById("Password").value;

if(password == ""){
document.getElementById("PasswordErr").innerHTML="Password is required";
}
else if(password.length < 6){
document.getElementById("PasswordErr").innerHTML="Password must be at least 6 characters";
}
else if(!password.includes("#")){
document.getElementById("PasswordErr").innerHTML="Password must contain #";
}
else{
document.getElementById("PasswordErr").innerHTML="";
}

}