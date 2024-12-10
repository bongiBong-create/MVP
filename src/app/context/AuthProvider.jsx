import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [dataUser, setDataUser] = useState("");

  const handleIsAdmin = () => {
    setIsAdmin(true);
  };

  return (
    <AuthContext.Provider
      value={{ isAdmin, setIsAdmin, handleIsAdmin, setDataUser, dataUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
