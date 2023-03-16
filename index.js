const db = firebase.firestore();

let dbRef = db.collection("users");


function registerButton() {
    // let name = document.getElementById("name").value;
    // let details = document.getElementById("details").value;
    // let time = document.getElementById("time").value;

    const name = document.getElementsByName("name")[0].value;
    const details = document.getElementsByName("details")[0].value;
    const time = document.getElementsByName("time")[0].value;

    // name.setAttribute('value', name.value);
    // details.setAttribute('value', details.value);
    // time.setAttribute('value', time.value);


    if(name == "" || details == "" || time == "") {
        alert("Empty input")
        return;
    }

    dbRef
    .add({
        Name: name,
        Details: details,
        Time: time
    })
    .then((docRef) => {
        console.log("Registration made with ID: ", docRef.id);
        window.location.href = "list.html";
    })
    .catch((error) => {
        console.log("Error adding document: ", error);
    });

  }


