import React from 'react';
import { getFirebaseConfig } from '../../firebase/firebase-config';

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const LogIn = () => {
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  return (
    <button onClick={googleSignIn} className="log__in">
      Log In
    </button>
  );
};

export default LogIn;
