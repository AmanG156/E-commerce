import React, { useState, useContext, useReducer, useEffect } from "react";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [login, setLogin] = useState(false);
  const [user,setUser] = useState()

  console.log(cart);
  useEffect(() => {
    const value = localStorage.getItem("token");
    setUser(value)
  }, [login]);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        setLogin,
        login,
        user
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
