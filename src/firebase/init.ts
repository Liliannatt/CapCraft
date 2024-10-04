import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAuth, updateProfile } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAyUl4ipl4t3BVL-nHLbdd8qSmfg2Pk9oM',
  authDomain: 'vt24-project-group27.firebaseapp.com',
  projectId: 'vt24-project-group27',
  storageBucket: 'vt24-project-group27.appspot.com',
  messagingSenderId: '604935162341',
  appId: '1:604935162341:web:3737761c40ff0fe86ac70c',
  measurementId: 'G-JCNQNJZ1DT',
  databaseURL: 'https://vt24-project-group27-default-rtdb.europe-west1.firebasedatabase.app'
}

// Initialize Firebase
const firebaseAPP = initializeApp(firebaseConfig)

export default firebaseAPP
export const auth = getAuth()
export const storage = getStorage(firebaseAPP)
export const database = getDatabase(firebaseAPP)

export const getUser = () => {
  const user = auth.currentUser
  return user
}
export const updateUserInfo = async (displayName: string) => {
  if (!auth.currentUser) {
    return
  }
  return updateProfile(auth.currentUser, {
    displayName
  })
}

export const updateUserImg = async (photoURL: string) => {
  if (!auth.currentUser) {
    return
  }
  return updateProfile(auth.currentUser, {
    photoURL
  })
}

// export const updateUserEmail = async (email: string) => {
//   if (!auth.currentUser) {
//     return
//   }
//   return updateEmail(auth.currentUser, email)
// }

// export const sendEmail = () => {
//   if (!auth.currentUser) {
//     return
//   }
//   return sendEmailVerification(auth.currentUser)
// }
