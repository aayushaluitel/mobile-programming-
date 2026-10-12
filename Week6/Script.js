
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBetIVPjNCUBSJMK-XcUoBKtOEppOYNrUY",
  authDomain: "mobile-programming-bdd5a.firebaseapp.com",
  databaseURL: "https://mobile-programming-bdd5a-default-rtdb.firebaseio.com",
  projectId: "mobile-programming-bdd5a",
  storageBucket: "mobile-programming-bdd5a.firebasestorage.app",
  messagingSenderId: "241635433280",
  appId: "1:241635433280:web:a6627ef4287bf304f4f8a5",
  measurementId: "G-SZ7LB4ZHQ3"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  console.log("Firebase connected");

function writeUserData(
    userId,
    firstname,
    lastname,
    email,
    phone,
    age,
    gender,
    address,
    city,
    course,
    semester
) {
    set(ref(db, 'users/' + userId), {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        age: age,
        gender: gender,
        address: address,
        city: city,
        course: course,
        semester: semester
    })
    .then(() => {
        console.log( "User" + userId + "User added successfully!");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

// User 1
writeUserData(
    1,
    "Aayusha",
    "Luitel",
    "aayusha@example.com",
    "9765415888",
    22,
    "Female",
    "Baneshwor",
    "Kathmandu",
    "BSIT",
    "7th"
);

// User 2
writeUserData(
    2,
    "Sanjay",
    "Shrestha",
    "sanjay@example.com",
    "9801234567",
    23,
    "Male",
    "Koteshwor",
    "Kathmandu",
    "BSIT",
    "6th"
);


// User 3
writeUserData(
    3,
    "Priya",
    "Sharma",
    "priya@example.com",
    "9812345678",
    21,
    "Female",
    "Patan",
    "Lalitpur",
    "BCA",
    "5th"
);


// User 4
writeUserData(
    4,
    "Rohan",
    "Thapa",
    "rohan@example.com",
    "9823456789",
    24,
    "Male",
    "Suryabinayak",
    "Bhaktapur",
    "BSc CSIT",
    "8th"
);


// User 5
writeUserData(
    5,
    "Nisha",
    "Gurung",
    "nisha@example.com",
    "9845678901",
    22,
    "Female",
    "Kalanki",
    "Kathmandu",
    "BIT",
    "7th"
);

window.writeUserData=writeUserData;
