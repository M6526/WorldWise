import { createContext, useReducer, useContext } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenicated: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenicated: true,
        user: action.payload,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenicated: false,
      };
    case "cities/rejected":
      return {
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function AuthProvider({ children }) {
  const [{ user, isAuthenicated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(emial, password) {
    if (emial === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      dispatch({
        type: "cities/rejected",
        payload: "❌Invalid credentials!Provide Correct Credentials❌⛔",
      });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenicated, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
