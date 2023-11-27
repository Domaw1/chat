import { initializeApp } from "firebase/app";
import { ref, onUnmounted } from "vue";

import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  query,
  getDoc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  browserSessionPersistence,
  setPersistence,
  inMemoryPersistence,
  onAuthStateChanged,
  browserLocalPersistence,
} from "firebase/auth";

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

const d = getFirestore(app);
const auth = getAuth(app);

export async function createNewUser(email, password, username) {
  const auth = getAuth();
  const create = await createUserWithEmailAndPassword(auth, email, password);
  updateProfile(auth.currentUser, {
    displayName: username,
    photoURL:
      "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg",
  })
    .then(() => {
      // Profile updated!
      // ...
      console.log("updated!");
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  return create;
}

export async function signInUser(email, password) {
  const auth = getAuth();
  // const getSignIn = await signInWithEmailAndPassword(auth, email, password);
  const getSignIn = setPersistence(auth, browserLocalPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return getSignIn;
}

export function getMessages() {
  const users = ref([]);
  const usersName = ref([]);

  const q = query(collection(d, "messages"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    users.value = snapshot.docs
      .map((doc) => ({ ...doc.data().messages }))
      .reverse();
    usersName.value = [];
    Object.keys(users.value).forEach((key) => {
      Object.keys(users.value[key]).forEach((value) => {
        usersName.value.push(users.value[key][value]);
      });
    });
  });
  onUnmounted(unsubscribe);

  return { usersName };
}

export async function sendMessageToFirestore(user) {
  const d = getFirestore(app);
  const usersRef = doc(d, "messages", "usersMessages");
  const docSnap = await getDoc(usersRef);
  const currentMessage = {
    displayName: user.displayName,
    content: user.content,
    time: user.time,
  };

  if (docSnap.exists()) {
    await updateDoc(usersRef, {
      messages: arrayUnion(currentMessage),
    });
  } else {
    await setDoc(usersRef, {
      messages: arrayUnion(currentMessage),
    });
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        resolve(user);
      } else {
        // User is signed out
        reject(new Error('User is signed out'));
      }
    });
  });
}

export function signOutUser() {
  const auth = getAuth();
  auth.signOut();
}
