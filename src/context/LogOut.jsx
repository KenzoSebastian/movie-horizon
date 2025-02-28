import { createContext, useState } from "react";

const LogOutContext = createContext();

const LogOutContextProvider = ({ children }) => {
  const [logOut, setLogOut] = useState({
    status: false,
    message: "",
    imgSrc: "",
  });

  return (
    <LogOutContext.Provider value={{ logOut, setLogOut }}>
      {children}
    </LogOutContext.Provider>
  );
};

export const LogOut = LogOutContext;
export default LogOutContextProvider;
