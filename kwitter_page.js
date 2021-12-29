function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
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
  const app = initializeApp(firebaseConfig);
  //firebase.initializeApp(firebaseConfig);
  

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name, 
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
    like_button = "<button class='btn btn-warning' id ="+firebase_message_id +"value = "+like+" onclick='updateLike(this.id)'>"; 
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button> <hr>";
    row = name_with_tag + message_with-tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML +=row;
//End code
    } });  }); }
getData();
function updateLike(message_id) { console.log("clicked on like button - " + message_id); button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; console.log(updated_likes); firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); } function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location.replace("index.html"); }
  
  