import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase project configuration details here
  apiKey: "AIzaSyCe8LIVCjVrc8nXR5_5myCpUkgR7fBo3q0", // Replace with your actual API key
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN.firebaseapp.com", // Replace with your auth domain
  projectId: "login-e8f02.firebaseapp.com", // Replace with your project ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
