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
  setPersistence,
  browserLocalPersistence,
  updateEmail,
  updatePhoneNumber,
} from "firebase/auth";

import { getStorage, uploadBytes, getDownloadURL, } from "firebase/storage";
import { ref as ref_ } from "firebase/storage";

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

export function createUserImage(file, username) {
  const storage = getStorage();
  const storageRef = ref_(storage, `${username}.jpg`);

  const metadata = {
    contentType: file.type,
  }

  uploadBytes(storageRef, file, metadata).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });

}

export async function getUserImage(username) {
  const storage = getStorage();
  const starsRef = ref_(storage, `${username}.jpg`);

  return await getDownloadURL(starsRef);
}

export async function createNewUser(email, password, username) {
  const auth = getAuth();
  const create = await createUserWithEmailAndPassword(auth, email, password);
  updateProfile(auth.currentUser, {
    displayName: username,
    photoURL:
      "https://i.pinimg.com/736x/cb/45/72/cb4572f19ab7505d552206ed5dfb3739.jpg",
  })
    .then(() => {
      console.log("updated!");
    })
    .catch((error) => {
      console.log(error.message);
    });

  return create;
}

export async function signInUser(email, password) {
  const auth = getAuth();
  const getSignIn = setPersistence(auth, browserLocalPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
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
        resolve(user);
      } else {
        reject(new Error("User is signed out"));
      }
    });
  });
}

export function signOutUser() {
  const auth = getAuth();
  auth.signOut();
}

export function updateUser(user, name, email, phone) {
  const auth = getAuth();
  if (name) {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("updated name!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  if (email) {
    updateEmail(user, email)
      .then(() => {
        console.log("updated email");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
