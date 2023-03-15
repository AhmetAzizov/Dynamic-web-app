const db = firebase.firestore();

let dbRef = db.collection("users");


function registerButton() {
    let name = document.getElementById("name").value;
    let details = document.getElementById("details").value;
    let time = document.getElementById("time").value;

    // if(name == "" || details == "" || time == "") return;
  
    dbRef
    .add({
        Name: name,
        Details: details,
        Time: time
    })
    // .then((docRef) => {
    //     alert("Registration made with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //     alert("Error adding document: ", error);
    // });
  }
