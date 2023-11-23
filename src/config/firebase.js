import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyCXrFWt7eXKwTY15RzKrbNAyzZvwq0G-Q4",
  authDomain: "projeto-4-bim.firebaseapp.com",
  projectId: "projeto-4-bim",
  storageBucket: "projeto-4-bim.appspot.com",
  messagingSenderId: "54744336562",
  appId: "1:54744336562:web:0cd60c4fbe4a65ee7b21ab"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage }