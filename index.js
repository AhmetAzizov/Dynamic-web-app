const db = firebase.firestore();
const auth = firebase.auth();

let dbRef = db.collection("users");

// const admin = require('firebase-admin');
// console.log(admin);

// require(['firebase-admin'], function (admin) {

// });

// import admin from 'firebase-admin';

// const functions = require('firebase-functions');


// // Initialize the app with admin credentials
// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: 'web-application-4a5e0.firebaseapp.com'
// });

// const getAuth = admin.auth();

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });



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

    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("details")[0].value = "";
    document.getElementsByName("time")[0].value = "";

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

    // auth.createUserWithEmailAndPassword(name, details)
    // .then((userCredential) => {
        // console.log('Signed Up Successfully !');
    //})
    // .catch(error => {
        // firebase.auth().fetchSignInMethodsForEmail(name)
        // .then((signInMethods) => {
        //     if (signInMethods.length > 0) {
        //     // Email is associated with an existing user, retrieve their display name
        //     const signInMethod = signInMethods[0]; // Use the first sign-in method in the array
        //     firebase.auth().signInWithEmailAndPassword(name, details)
        //         .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(`User display name: ${user.displayName}`);
        //         })
        //         .catch((error) => {
        //         console.log(`Error signing in: ${error}`);
        //         });
        //     } else {
        //     // Email is not associated with an existing user, show an error message
        //     console.log('No user found with this email address');
        //     }
        // })
        // .catch((error) => {
        //     console.log(`Error fetching sign-in methods: ${error}`);
        // });

        // getAuth
        // .getUserByEmail("ahmet.azizov@hotmail.com")
        // .then((userRecord) => {
        //     // See the UserRecord reference doc for the contents of userRecord.
        //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
        // })
        // .catch((error) => {
        //     console.log('Error fetching user data:', error);
        // });
    // })

    // const googleProvider = new firebase.auth.GoogleAuthProvider();


    // auth.signInWithPopup(googleProvider)
    // .then(() => {
    //     // window.location.assign('list.html');
    //     const user = firebase.auth().currentUser;

    //     console.log(user.uid)
    // })
    // .catch(error => {
    //     console.error(error);
    // })






//     var provider = new firebase.auth.OAuthProvider('microsoft.com');

//     auth.signInWithPopup(provider)
//     .then((result) => {
//         // IdP data available in result.additionalUserInfo.profile.
//         // ...

//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         console.log(credential)

//         // OAuth access and id tokens can also be retrieved:
//         var accessToken = credential.accessToken;
//         var idToken = credential.idToken;
//     })
//     .catch((error) => {
        
//   });

  }

  document.getElementById("registerbtn").addEventListener("click", registerButton);