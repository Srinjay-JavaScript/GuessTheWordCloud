// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNsOAzDhpjY8q1hV0A_62XXq42O9L0rCw",
    authDomain: "guesstheword-a6d29.firebaseapp.com",
    databaseURL: "https://guesstheword-a6d29-default-rtdb.firebaseio.com",
    projectId: "guesstheword-a6d29",
    storageBucket: "guesstheword-a6d29.appspot.com",
    messagingSenderId: "469179886485",
    appId: "1:469179886485:web:5e95edc069727da3fa649c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function check(){
    if (sessionStorage.getItem("username") == null){
      window.location = "index.html";
    }
}

function add_game(){
    var ref = firebase.database().ref("/");
    ref.once("value").then(function(snapshot){
        var user_game = document.getElementById("game_user").value;
         if (snapshot.child(user_game).exists() == true){
            firebase.database().ref("/" + user_game).update({
            PlayerName: localStorage.getItem("username")
            });
            localStorage.setItem("gamename", user_game);
            window.location = "gamepage.html";
         }
         else{
          firebase.database().ref("/").child(user_game).update({
            Creator: localStorage.getItem("username")
        }).then(function() {
            localStorage.setItem("gamename", user_game);
            window.location = "gamepage.html";
        });
         }
    });
}
  
document.getElementById("user_name_display").innerHTML = "Welcome " + localStorage.getItem("username") + " !";
