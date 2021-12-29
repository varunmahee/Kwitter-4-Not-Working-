// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX2NB_DU6nsTOL29zfqOXDQW5VsmLXU58",
  authDomain: "kwitter2-d7c0d.firebaseapp.com",
  databaseURL: "https://kwitter2-d7c0d-default-rtdb.firebaseio.com",
  projectId: "kwitter2-d7c0d",
  storageBucket: "kwitter2-d7c0d.appspot.com",
  messagingSenderId: "97589231116",
  appId: "1:97589231116:web:e763fee1bb13b86e817829"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
  // firebase.initializeApp(firebaseConfig);
  
  var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    // firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    firebase.database().ref("/" + room_name).set({purpose:"adding room name"});
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html"
}   

   
  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='room_name' id="+ Room_names + "onclick = 'redirecttoroomname(this.id)'>#"+ Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;

});});}
getData();


function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_room.html";
 }
 function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
 }

