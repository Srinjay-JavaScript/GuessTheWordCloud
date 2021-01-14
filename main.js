function addUser(){
    var username = document.getElementById("player_ID_input").value;
    localStorage.setItem("username", username);
    sessionStorage.setItem("username", username);
    window.location = "game.html";
}