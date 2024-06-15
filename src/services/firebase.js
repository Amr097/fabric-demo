// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA9FExGG1s8Ao33bh8W4DFibCIac1sS6zU',
  authDomain: 'sic-card.firebaseapp.com',
  projectId: 'sic-card',
  storageBucket: 'sic-card.appspot.com',
  messagingSenderId: '587029949985',
  appId: '1:587029949985:web:36dec3186d3beca24dbd60',
  measurementId: 'G-QPJK58LSDE'
}

const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp)

export { storage }
