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

