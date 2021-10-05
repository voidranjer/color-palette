import {
  collection,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import db from "./firebase";

export const handleNew = async () => {
  const name = prompt("Enter color name");
  const value = prompt("Enter color value");

  const collectionRef = collection(db, "colors");
  const payload = { name, value };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new ID is: " + docRef.id);
};

export const handleEdit = async (id) => {
  const name = prompt("Enter color name");
  const value = prompt("Enter color value");

  const docRef = doc(db, "colors", id);
  const payload = { name, value };

  setDoc(docRef, payload);
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "colors", id);
  await deleteDoc(docRef);
};

export const handleQueryDelete = async () => {
  const userInputName = prompt("Enter color name");

  const collectionRef = collection(db, "colors");
  const q = query(collectionRef, where("name", "==", userInputName));
  const snapshot = await getDocs(q);

  const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  results.forEach(async (result) => {
    const docRef = doc(db, "colors", result.id);
    await deleteDoc(docRef);
  });
};
