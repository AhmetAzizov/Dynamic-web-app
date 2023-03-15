console.log(firebase);

const db = firebase.firestore();

let dbRef = db.collection("users");

const listContainer = document.getElementById("list-container");

dbRef.orderBy("Time").onSnapshot((querySnapshot) => {
  const items = querySnapshot.docs.map((doc) => {
    return `<div class="list-item" id="${doc.id}">
                <div class="item-content">
                    <div class="field"><p class="field-name">Name:</p><p class="field-content"> ${
                      doc.data().Name
                    }</p></div>
                    <div class="field"><p class="field-name">Details:</p><p class="field-content"> ${
                      doc.data().Details
                    }</p></div>
                    <div class="field"><p class="field-name">Time:</p><p class="field-content"> ${
                      doc.data().Time
                    }</p></div>
                </div>

                <button class="delete-button" onclick="deleteButtonOnclick()">X</button>
            </div>`;
  });

  listContainer.innerHTML = items.join("");
});

function deleteButtonOnclick() {
  const parentId = event.target.parentNode.id;

  console.log(parentId);

  document.getElementById(`${parentId}`).classList.add("item-removed");

  document
    .getElementById(`${parentId}`)
    .addEventListener("transitionend", function () {
      dbRef
        .doc(`${parentId}`)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.log("Error removing document: ", error);
        });
    });
}


