import { auth,
    createUserWithEmailAndPassword,
    collection,
    addDoc,
    db,
 } from "./firebase.js"

let password = document.querySelector("#password")
let email = document.querySelector("#email")
let userName = document.querySelector("#userName")
let btn = document.querySelector(".signupBtn")
let messagePageBtn = document.querySelector(".message")
let signupPageBtn = document.querySelector(".signup")

messagePageBtn.addEventListener("click", ()=> {
signupPageBtn.classList.remove("active")
messagePageBtn.classList.add("active")
})

let signup = async ()=> {
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => { 
    alert ("user Registered Successfully")
  })
  .catch((error) => {
    alert (error.code)
  });
  try {
    const docRef = await addDoc(collection(db, "users"), {
      fullName: userName.value,
      email: email.value,
      password: password.value
    });
    console.log(userName.value + " aap ka data store hoo gya");
  } catch (error) {
    alert (error)
  }
  userName.value = ""
  password.value = ""
  email.value = ""
}

btn.addEventListener("click", signup)


