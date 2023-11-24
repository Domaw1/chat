import { initializeApp } from "firebase/app";
import { ref, onUnmounted } from "vue";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  getDoc,
  setDoc,
  arrayUnion,
  updateDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

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

const d = getFirestore(app);

export async function getFirestoreData() {
  const users = [];

  const querySnapshot = await getDocs(collection(d, "users"));
  if (querySnapshot.docs.length > 0) {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } else {
    return;
  }
  return users;
}

export function unsub() {
  const users = ref([]);
  const aa = ref([]);

  const q = query(collection(d, "messages"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    users.value = snapshot.docs
      .map((doc) => ({ ...doc.data().messages }))
      .reverse();
    aa.value = [];
    Object.keys(users.value).forEach((key) => {
      Object.keys(users.value[key]).forEach((value) => {
        aa.value.push(users.value[key][value]);
      });
    });
  });
  onUnmounted(unsubscribe);
  return { aa };
}

export async function firebaseTest(user) {
  const d = getFirestore(app);
  const usersRef = doc(d, "messages", "usersMessages");
  const docSnap = await getDoc(usersRef);
  const currentMessage = {
    username: user.username,
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
