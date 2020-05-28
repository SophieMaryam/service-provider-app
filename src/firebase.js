import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import { firebaseConfig } from "./common/config.js";

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export async function getAllJobPostings() {
  const querySnapshot = await db.collection("JobPostings").get();
  return querySnapshot.docs.map(doc => doc.data());
}
