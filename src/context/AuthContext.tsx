import { createContext, useState, useEffect, ReactNode } from "react";
import { auth, provider, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  User
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  async function register(email: string, password: string) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", res.user.uid), {
      email: res.user.email,
      uid: res.user.uid,
      role: 'user'
    });
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleLogin() {
    return signInWithPopup(auth, provider);
  }

  return (
    <AuthContext.Provider value={{ user, register, login, googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
