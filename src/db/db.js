import { initializeApp } from "firebase/app";
import { ref, onUnmounted } from "vue";
import Swal from "sweetalert2";

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
  where,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  updateEmail,
} from "firebase/auth";

import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
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
  const auth = getAuth();
  const storageRef = ref_(storage, `${username}.jpg`);

  const metadata = {
    contentType: file.type,
  };

  uploadBytes(storageRef, file, metadata).then((snapshot) => {
    console.log("Uploaded a blob or file!");
    const newImage = ref("");
    getUserImage(username)
      .then((url) => {
        newImage.value = url;
        updateProfile(auth.currentUser, {
          photoURL: newImage.value,
        })
          .then(() => {
            console.log("updated!");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
}

export async function getUserImage(username) {
  const storage = getStorage();
  const starsRef = ref_(storage, `${username}.jpg`);

  return await getDownloadURL(starsRef);
}

export async function createNewUser(newUser) {
  const auth = getAuth();
  const create = await createUserWithEmailAndPassword(
    auth,
    newUser.email,
    newUser.password
  );
  updateProfile(auth.currentUser, {
    displayName: newUser.username,
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
      Swal.fire({
        title: "Ошибка!",
        text: error.message,
        icon: "error",
      });
    });

  return getSignIn;
}

export function getUserMessages() {
  const unsub = onSnapshot(doc(d, "messages", "Aruut"), (doc) => {
    console.log("Current data: ", doc.data());
  });
}

export function getMessages() {
  const messagesCollection = collection(d, "messages"); // Предполагается, что у вас есть коллекция "messages" в Firestore

  const usersName = ref([]);
  const unsubscribe = onSnapshot(messagesCollection, (querySnapshot) => {
    usersName.value = querySnapshot.docs.map((doc) => doc.data());
  });
  onUnmounted(unsubscribe);

  return { usersName };

  // const unsub = onSnapshot(doc(d, "messages", "Aruut"), (doc) => {
  //   usersName.value.push(doc.data());
  // });
  // const unsub = onSnapshot(collection(d, "messages"), (snapshot) => {
  //   usersName.value = []; // Очищаем текущий массив перед добавлением новых данных
  //   snapshot.forEach((doc) => {
  //     usersName.value.push(doc.data());
  //   });
  // });

  return { usersName };
}

export async function sendMessageToFirestore(user, toUser) {
  const usersRef = doc(d, "messages", user.displayName);
  const docSnap = await getDoc(usersRef);
  const currentMessage = {
    displayName: user.displayName,
    content: user.content,
    time: user.time,
  };

  if (docSnap.exists()) {
    await updateDoc(usersRef, {
      [toUser]: arrayUnion(currentMessage),
    });
  } else {
    await setDoc(usersRef, {
      [toUser]: arrayUnion(currentMessage),
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
