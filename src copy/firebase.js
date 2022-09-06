import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const API_FIREBASE_API_KEY = 'AIzaSyCp3Noaf9kdkn1lOX_Ei3N449UObZcUyHA'
const API_FIREBASE_AUTH_DOMAIN = 'ideasderecetas-81e7a.firebaseapp.com'
const API_FIREBASE_PROJECT_ID = 'ideasderecetas-81e7a'
const API_FIREBASE_STORAGE_BUCKET = 'ideasderecetas-81e7a.appspot.com'
const API_FIREBASE_MESSAGING_SENDER_ID = '852559274868'
const API_FIREBASE_FIREBASE_APP_ID = '1:852559274868:web:ce265ec6b32410fbc1c221'
const API_FIREBASE_MEASUREMENT_ID = 'G-54G2GSL66P'

const firebaseConfig = {
  apiKey: API_FIREBASE_API_KEY,
  authDomain: API_FIREBASE_AUTH_DOMAIN,
  projectId: API_FIREBASE_PROJECT_ID,
  storageBucket: API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: API_FIREBASE_MESSAGING_SENDER_ID,
  appId: API_FIREBASE_FIREBASE_APP_ID,
}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

// export const auth = app.auth()
export const db = app.firestore()
export const storage = app.storage()
export default app
