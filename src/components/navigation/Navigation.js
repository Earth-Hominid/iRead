import React from 'react';
import logo from '../../assets/images/book.png';
import { auth } from '../../firebase/firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Navigation = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <nav>
      <img src={logo} alt="iRead logo" id="logo" />
      <ul className="nav-bar">
        <button className="menu-one" onClick={googleSignIn}>
          Log In
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
