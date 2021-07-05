//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB3APD97lnMEHksKaRrxPWbVQ05lkY3h9A",
      authDomain: "shanmukha-kwitter.firebaseapp.com",
      databaseURL: "https://shanmukha-kwitter-default-rtdb.firebaseio.com",
      projectId: "shanmukha-kwitter",
      storageBucket: "shanmukha-kwitter.appspot.com",
      messagingSenderId: "529892639134",
      appId: "1:529892639134:web:aa7491dc3d9f2f7d29968f",
      measurementId: "G-XCGH6XJ5HD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}



    
    