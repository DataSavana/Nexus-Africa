import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import GetStartedButton from "./Navbar/accessibility";

const AuthButton = ({ text }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook for navigation


  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
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
        <GetStartedButton className="primary" onClick={handleLogin}>
          {text}
        </GetStartedButton>
      )}
    </div>
  );
};

export default AuthButton;
