
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQad4AAqQCJw-94J5M_CvsUAkU5AuMKMc",
  authDomain: "entrega-final-2b2ee.firebaseapp.com",
  projectId: "entrega-final-2b2ee",
  storageBucket: "entrega-final-2b2ee.appspot.com",
  messagingSenderId: "638795886651",
  appId: "1:638795886651:web:8fe1003a3ef12207416c1e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
