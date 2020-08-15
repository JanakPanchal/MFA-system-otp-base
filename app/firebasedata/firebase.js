
const firebase = require("firebase")
const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyD4jo_7ZKLBHCYESDXLF2EyNeuztvrN2aU",
    authDomain: "testprojectotp.firebaseapp.com",
    databaseURL: "https://testprojectotp.firebaseio.com",
    projectId: "testprojectotp",
    storageBucket: "testprojectotp.appspot.com",
    messagingSenderId: "376550984488",
    appId: "1:376550984488:web:ec832f119dbfc05a5b9e1d"
  });

  const db = firebaseConfig.firestore();

  exports = db; 