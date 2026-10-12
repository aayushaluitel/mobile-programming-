
import { initializeApp } from
"https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getDatabase, ref, push, set } from
"https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Firebase configuration

const firebaseConfig = {
  apiKey: "YOUR_MOBILE_PROGRAMMING_API_KEY",
  authDomain: "mobile-programming-bdd5a.firebaseapp.com",
  databaseURL: "https://mobile-programming-bdd5a-default-rtdb.firebaseio.com",
  projectId: "mobile-programming-bdd5a",
  storageBucket: "mobile-programming-bdd5a.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Contact Us form
document.getElementById("contactForm")
.addEventListener("submit", async function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const status = document.getElementById("status");
  const button = this.querySelector("button[type='submit']");

  button.disabled = true;
  status.textContent = "Sending message...";

  try {
    const contactRef = push(ref(db, "contacts"));

    await set(contactRef, {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
      createdAt: Date.now()
    });

    status.textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset();

    console.log("Contact saved:", contactRef.key);

  } catch (error) {
    status.textContent = "Error sending message!";
    console.error(error);
  } finally {
    button.disabled = false;
  }

});

