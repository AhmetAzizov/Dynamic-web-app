const db = firebase.firestore();

let dbRef = db.collection("users");

const listContainer = document.getElementById("list-container");

var itemsIDs = [];
var items = [];

// dbRef.orderBy("Time").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       itemsIDs.push(doc.id);
//       items.push(`<div class="list-item new-item" id="${doc.id}">
//                 <div class="item-content">
//                     <div class="field"><p class="field-name">Name:</p><p class="field-content"> ${
//                       doc.data().Name
//                     }</p></div>
//                     <div class="field"><p class="field-name">Details:</p><p class="field-content"> ${
//                       doc.data().Details
//                     }</p></div>
//                     <div class="field"><p class="field-name">Time:</p><p class="field-content"> ${
//                       doc.data().Time
//                     }</p></div>
//                 </div>
//                 <button class="delete-button" onclick="deleteButtonOnclick()">X</button>
//             </div>`)
//   });

//   listContainer.innerHTML = items.join("");

//     itemsIDs.forEach(element => {
//       setTimeout(() => {
//         document.getElementById(`${element}`).classList.remove("new-item");
//         document.getElementById(`${element}`).classList.add("list-item-visible");
//       }, 10);
//     });

//   itemsIDs = [];
// });



  dbRef.orderBy("Time").onSnapshot((querySnapshot) => {
    var newItem = "";
    var newItemId = [];

    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
          newItem +=  `<div class="list-item new-item" id="${change.doc.id}">
            <div class="item-content">
                <div class="field"><p class="field-name">Name:</p><p class="field-content"> ${
                  change.doc.data().Name
                }</p></div>
                <div class="field"><p class="field-name">Details:</p><p class="field-content"> ${
                  change.doc.data().Details
                }</p></div>
                <div class="field"><p class="field-name">Time:</p><p class="field-content"> ${
                  change.doc.data().Time
                }</p></div>
            </div>
            <button class="delete-button" onclick="deleteButtonOnclick()">X</button>
          </div>`;

          newItemId.push(change.doc.id);
      }
    });
    listContainer.innerHTML += newItem;

    newItemId.forEach(element => {
      setTimeout(() => {
        document.getElementById(`${element}`).classList.remove("new-item");
        document.getElementById(`${element}`).classList.add("list-item-visible");
      }, 10);
    });
  });

  


function toggleVisibility(array) {
  array.forEach(element => {
    document.getElementById(`${element}`).classList.remove("new-item");
  });
}

function deleteButtonOnclick() {
  const parentId = event.target.parentNode.id;

  dbRef
  .doc(`${parentId}`)
  .delete()
  .then(function () {
      console.log("Document successfully deleted!");
  })
  .catch(function (error) {
      console.log("Error removing document: ", error);
  });



  setTimeout(() => {
    document.getElementById(`${parentId}`).classList.add("item-removed");
    setTimeout(() => {
      document.getElementById(`${parentId}`).style.display = "none";
    }, 700);
  }, 10);

  
}


