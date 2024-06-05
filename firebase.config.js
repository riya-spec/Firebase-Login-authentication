import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase project configuration details here
  apiKey: "wjhdskjdhkjsjhdhskhsh", // Replace with your actual API key
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN.firebaseapp.com", // Replace with your auth domain
  projectId: "login234.firebaseapp.com", // Replace with your project ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
