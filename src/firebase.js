import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import { firebaseConfig } from "./common/config.js";
import store from "./store/index"

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export async function getAllJobPostings() {
  const querySnapshot = await db.collection("JobPostings").get();
  return querySnapshot.docs.map((doc) => doc.data());
}

export async function uploadImage(image) {
  const fileName = image.name
  const storageRef = firebase.storage().ref('images/'+fileName)

  await storageRef.put(image)
    .then((snapshot) => {
      return snapshot.ref.getDownloadURL()
    }).then((imageUrl) => {
      store.commit('UPLOAD_IMAGE', imageUrl)
    }).catch((error) => {
      console.log(error)
    })
}
