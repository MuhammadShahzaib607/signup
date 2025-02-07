import {
    collection,
    addDoc,
    db,
    auth,
} from "./firebase.js"

let sendBtn = document.querySelector(".sendMessageBtn")
let messageInput = document.querySelector(".messageInput")

let storeMessage = async ()=> {
 
    try {
        const user = auth.currentUser;
        if (!user) {
            alert("User not logged in!");
            return;
        }
    
        const docRef = await addDoc(collection(db, "messages"), {
            email: user.email,
            userId: user.uid,
            time: new Date(),
            message: messageInput.value,
        });
        alert ("Message stored Successfully");
      } catch (error) {
        console.log (error.code)
      }
}

sendBtn.addEventListener("click", storeMessage)