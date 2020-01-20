// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCKDcachb6ml-mURyMAIfQP_06RMM2Yy1I",
    authDomain: "rps-multiplayer-b7980.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-b7980.firebaseio.com",
    projectId: "rps-multiplayer-b7980",
    storageBucket: "rps-multiplayer-b7980.appspot.com",
    messagingSenderId: "825174842638",
    appId: "1:825174842638:web:100d478dc9e6b448b6cb5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Determine whether user is player one or player two
$("#playerCheck").on("click", function(){
    var playerNum = $("input[name='playerNum']:checked").val();
    console.log(playerNum)
});
$("#playerCheck2").on("click", function(){
    var playerNum = $("input[name='playerNum']:checked").val();
    console.log(playerNum)
});

$(".btn").on("click", function(){
    console.log($(".btn").val());
});

chatbox = $("#chatInput");
chatbox.keydown(function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        // Create a new p tag

        // If player one or two is checked, add to player one or two
        p = $("<p>");
        p.html(chatbox.val())
        $(".chatarea").prepend(p);
    }
})

database.ref().on("value", function(snapshot) {

});
