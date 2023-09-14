import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  user: {},
  isLoggedIn: false,
  login: (token) => { },
  logout: () => { },
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : {};
  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState({});

  const userIsLoggedIn = !!token?.access;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };
  const url = process.env.REACT_APP_API_URL + "user/data";
  useEffect(() => {
    if (token?.access) {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token.access}`
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              throw new Error(data?.error?.message);
            });
          }
        })
        .then((data) => {
          setUser(data);
        })
        .catch((err) => alert(err.message));
    }
  }, [token])

  const contextValue = {
    token: token,
    user: user,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;