var attempt = 3; 
let fals = 'false';
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "bonsoir" && password == "bonjour"){
        alert   ("Login successfully");
        window.location = "monprofil.html"; 
    }

    else{
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        fals = 'true';
        }
    }
}