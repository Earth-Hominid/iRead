import React from 'react';
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';

const LogOut = () => {
  const googleSignOut = () => {
    // Sign out of Firebase.
    signOut(getAuth());
  };

  return (
    <button onClick={googleSignOut} className="log__in">
      Log Out
    </button>
  );
};

export default LogOut;
