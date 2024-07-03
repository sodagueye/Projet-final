// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbCdjIuIwTtnfy10bj2_UN-7GY2KbF6-M",
  authDomain: "tache-21-a450a.firebaseapp.com",
  projectId: "tache-21-a450a",
  storageBucket: "tache-21-a450a.appspot.com",
  messagingSenderId: "224333194203",
  appId: "1:224333194203:web:1f1ee09515ee48d6173dfe",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

// src/firebase.js
// import firebase from "firebase/app";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDbCdjIuIwTtnfy10bj2_UN-7GY2KbF6-M",
//   authDomain: "tache-21-a450a.firebaseapp.com",
//   projectId: "tache-21-a450a",
//   storageBucket: "tache-21-a450a.appspot.com",
//   messagingSenderId: "224333194203",
//   appId: "1:224333194203:web:1f1ee09515ee48d6173dfe",
// };

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// export { storage, firebase as default };
