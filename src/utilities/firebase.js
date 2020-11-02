import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyD2K3_NlY-XEn3oEdQ2JMZ3N6KO7NRatuQ",
    authDomain: "vue-full-tutorial.firebaseapp.com",
    databaseURL: "https://vue-full-tutorial.firebaseio.com",
    projectId: "vue-full-tutorial",
    storageBucket: "vue-full-tutorial.appspot.com",
    messagingSenderId: "27317188584",
    appId: "1:27317188584:web:0ee626b2cef70b0dba965d"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  export const chatsRef = db.ref("chats");

export default firebase;
