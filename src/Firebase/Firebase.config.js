// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDARsGERHz1vuy95d2AhZkvap8VeZErCms",
  authDomain: "consultation-project-c288d.firebaseapp.com",
  projectId: "consultation-project-c288d",
  storageBucket: "consultation-project-c288d.appspot.com",
  messagingSenderId: "1039773317125",
  appId: "1:1039773317125:web:6ab97e03bde0ecf919046c",
  measurementId: "G-YJL7EFF1J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;