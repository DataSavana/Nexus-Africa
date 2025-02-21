import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebaseConfig";

const AuthButton = ({ text }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Hi there, {user.displayName}</p>
          <p>User Dashboard Coming Soon...</p>
          <button className="primary" onClick={handleLogout}>
            sign out
          </button>
        </div>
      ) : (
        <button className="primary" onClick={handleLogin}>
          {text}
        </button>
      )}
    </div>
  );
};

export default AuthButton;
