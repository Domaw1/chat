import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
} from "firebase/database";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA009Q03D0MhpRts_9vdIc-vUFucaXJXpU",
  authDomain: "chat-da855.firebaseapp.com",
  databaseURL: "https://chat-da855-default-rtdb.firebaseio.com",
  projectId: "chat-da855",
  storageBucket: "chat-da855.appspot.com",
  messagingSenderId: "994658204491",
  appId: "1:994658204491:web:776253afe7bb71e07e06ce",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export function writeUserData(username, messages) {
  const db = getDatabase();
  set(ref(db, "users/"), {
    usernames: {
      [username]: [...messages],
    },
  });
}

export function updateUserData(username, messages) {
  const db = getDatabase();

  const postData = [...messages];

  const updates = {};
  updates["users/" + username] = postData;

  return update(ref(db), updates);
}

export function readUserData() {
  const db = getDatabase();
  const users = {};
  const starCountRef = ref(db, "users/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      Object.keys(data).forEach((key) => {
        const currentKey = key;
        users[currentKey] = data[currentKey];
      });
    }
  });
  return users;
}

export default db;