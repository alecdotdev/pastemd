import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyBJ_or45KD7gsuGcU_d2sC-av791zztmIc',
  authDomain: 'pastemd-71f5d.firebaseapp.com',
  projectId: 'pastemd-71f5d',
  storageBucket: 'pastemd-71f5d.appspot.com',
  messagingSenderId: '801340562045',
  appId: '1:801340562045:web:591c4aef94cd63c0912f14',
  measurementId: 'G-PB62E0D4G9'
});

export function auth() { return getAuth(app); };
export function store() { return getFirestore(app); };
