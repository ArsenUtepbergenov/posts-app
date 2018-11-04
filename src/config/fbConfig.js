import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAk-Lspcw4C7RIKncIqfeFkhQHzmub--nc",
  authDomain: "posts-app-id.firebaseapp.com",
  databaseURL: "https://posts-app-id.firebaseio.com",
  projectId: "posts-app-id",
  storageBucket: "posts-app-id.appspot.com",
  messagingSenderId: "285578949177"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
