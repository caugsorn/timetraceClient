import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        getAccessToken();
      } catch (err) {
        removeAccessToken();
        navigate("login");
      }
    };
    fetchMe();
  }, []);

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export { AuthContext };
