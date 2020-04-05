import {initializeApp} from 'firebase'
const app = initializeApp({
    apiKey: "AIzaSyCBdDx--rFNsUEYc-Yh5kqtp3wTY4PSDpk",
    authDomain: "vue-todo-12823.firebaseapp.com",
    databaseURL: "https://vue-todo-12823.firebaseio.com",
    projectId: "vue-todo-12823",
    storageBucket: "vue-todo-12823.appspot.com",
	messagingSenderId: "902532741796"
})

export const db = app.database() 