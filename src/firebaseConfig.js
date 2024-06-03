import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_hJ_qFnz7bUYuY7ei81UE8quxjlcOYEk",
    authDomain: "my-login-f2e5c.firebaseapp.com",
    projectId: "my-login-f2e5c",
    storageBucket: "my-login-f2e5c.appspot.com",
    messagingSenderId: "310214421611",
    appId: "1:310214421611:web:67affba2f50a5bdac4952e",
    measurementId: "G-N79VHTY1HH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
