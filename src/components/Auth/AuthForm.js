import { useState, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.scss";
import AuthContext from "../../context/auth-context";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL + "auth"
    setIsLoading(true);
    let url = "";
    if (isLogin) {
      url = apiUrl + "/login";
    } else {
      url = apiUrl + "/register";
    }
    fetch(url, {
      method: "POST",
      body: isLogin
        ? JSON.stringify({
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
        })
        : JSON.stringify({
          firstName: firstNameInputRef.current.value,
          lastName: lastNameInputRef.current.value,
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          phoneNumber: phoneNumberInputRef.current.value,
        }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          // Check the content type of the response
          const contentType = res.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            // Handle JSON error response
            return res.json().then((data) => {
              console.log(data);
              if (data.fieldErrors) {
                // Map fieldErrors to a single string
                console.log(data.fieldErrors)
                const errorMessage = data.fieldErrors.map(err => err.message).join('\n');
                throw new Error(errorMessage);
              } else {
                throw new Error(data.message);
              }
            });
          } else {
            // Handle plain text error response
            return res.text().then((text) => {
              console.log(text);
              throw new Error(text);
            });
          }
        }
      })
      .then((data) => {
        authCtx.login(data);
        navigate("/");
      })
      .catch((err) => alert(err.message));

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? t("Login") : t("Sign_Up")}</h1>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="firstName">{t("Your_FirstName")}</label>
            <input
              type="text"
              id="firstName"
              required
              ref={firstNameInputRef}
            />
          </div>
        )}

        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="lastName">{t("Your_LastName")}</label>
            <input type="text" id="lastName" required ref={lastNameInputRef} />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="email">{t("Your_Email")}</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">{t("Your_Password")}</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>

        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="phoneNumber">{t("Your_Phone_Number")}</label>
            <input
              type="text"
              id="phoneNumber"
              required
              ref={phoneNumberInputRef}
            />
          </div>
        )}

        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? t("Login") : t("Create_Account")}</button>
          )}
          {isLoading && <p>Sending request...</p>}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin
              ? t("Create_New_Account")
              : t("Login_With_Existing_Account")}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
