import firebase from "firebase";
 
  
const  firebaseConfig = {
    apiKey: "AIzaSyC85-rh0N4Wc3NH39pJQr5GT7EJG9SdD8I",
    authDomain: "chat-app-bf632.firebaseapp.com",
    projectId: "chat-app-bf632",
    storageBucket: "chat-app-bf632.appspot.com",
    messagingSenderId: "441979375355",
    appId: "1:441979375355:web:94792e448d326dfa40aa5e",
    measurementId: "G-VK6K28HGSL"
  };
  let app;
  if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  } else {
  app = firebase.app(); 
 
  }
 
  export default app;
 