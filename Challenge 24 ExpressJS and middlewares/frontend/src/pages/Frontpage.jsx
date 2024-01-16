import { useEffect, useState } from "react";
import "./Frontpage.css";
export const Frontpage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setLoggedIn(!!accessToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");

    setLoggedIn(false);
  };
  return (
    <div className="topnav">
      <a className="active" href="/home">
        Home
      </a>
      <a href="/Mygames/1">Mygames</a>
      <a href="/Browse/">Browse</a>
      <a href="/Admin">Admin Page</a>
      <a href="/Login">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button>You are logged out.</button>
        )}
      </a>
    </div>
  );
};
