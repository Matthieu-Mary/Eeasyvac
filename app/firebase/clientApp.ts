import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.EASYVAC_FIREBASE_API_KEY,
//   authDomain: process.env.EASYVAC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.EASYVAC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.EASYVAC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.EASYVAC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.EASYVAC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA6PVDzoLhzjWIkrKNvCQnkXPx_hpptOBg",
  authDomain: "easyvac-99598.firebaseapp.com",
  projectId: "easyvac-99598",
  storageBucket: "easyvac-99598.appspot.com",
  messagingSenderId: "184531859815",
  appId: "1:184531859815:web:f370eab292e718bbe917c2",
  measurementId: "G-0PMNHJHF6Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

