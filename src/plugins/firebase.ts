import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

const config = {
  apiKey: 'AIzaSyDYxtW4luDTsrilA5dYE91xh5ERey1Fofk',
  authDomain: 'loft-208723.firebaseapp.com',
  databaseURL: 'https://loft-208723.firebaseio.com',
  projectId: 'loft-208723',
  storageBucket: 'loft-208723.appspot.com',
  messagingSenderId: '1041929286010',
  appId: '1:1041929286010:web:d3abbdbbc1649f8c8826c3',
  measurementId: 'G-4NHRTHQXTM'
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
  if (process.browser) {
    firebase.analytics()
  }
}

export default firebase
