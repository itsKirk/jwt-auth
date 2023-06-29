import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);


  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
