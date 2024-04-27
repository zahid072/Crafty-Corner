import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [navLoader, setNavLoader] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [loader, setLoader] = useState(true);

  const signUpUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  useEffect(() => {
    setNavLoader(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setNavLoader(false)
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, signUpUsers, navLoader, loader };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
