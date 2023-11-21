import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
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

export function listsUserData() {
  const db = getDatabase();
  const postListRef = ref(db, "users");
  const newPostRef = push(postListRef);
  set(newPostRef, {
    // ...
  });
}

export function updateUserData(username, user) {
  const db = getDatabase();

  const postData = [{
    username: user.username,
    content: user.content,
    time: user.time,
  }];

  const updates = {};
  updates["users/" + username] = postData;

  return update(ref(db), updates);
}

export function readUserData() {
  const db = getDatabase();
  const users = { usersC: [] };
  const starCountRef = ref(db, "users/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      Object.keys(data).forEach((key) => {
        const currentKey = key;
        for (let i = 0; i < data[currentKey].length; i++) {
          users.usersC.push({
            username: currentKey,
            content: data[currentKey][i],
          });
        }
      });
      console.log(users.usersC);
    }
  });
  return users;
}

export default db;
