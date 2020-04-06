import {initializeApp} from 'firebase'
const app = initializeApp({
  apiKey: "AIzaSyBFPs4tNxs-AyrG_2AEv90GFRT-p7imwIk",
  authDomain: "eloquent-anthem-238617.firebaseapp.com",
  databaseURL: "https://eloquent-anthem-238617.firebaseio.com",
  projectId: "eloquent-anthem-238617",
  storageBucket: "eloquent-anthem-238617.appspot.com",
  messagingSenderId: "693290027904",
  appId: "1:693290027904:web:c30ad24120b0451525cf65"
})

export const db = app.firestore() 
