import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCD4II_TuO_d3OCVrMuTzmClaZtktpn2Js",
    authDomain: "netflix-clone-faca8.firebaseapp.com",
    projectId: "netflix-clone-faca8",
    storageBucket: "netflix-clone-faca8.appspot.com",
    messagingSenderId: "229406567877",
    appId: "1:229406567877:web:2e1c847781acd40f5c6fac"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);