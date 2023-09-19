import { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../Container/index";
import MobileHeader from "./MobileHeader";

import styles from "./Header.module.scss";
import "./hamburger-menu.css";
import { useTranslation } from "react-i18next";
import AuthContext from "../../../context/auth-context";

const Header = () => {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleMenuHandler = (event) => {
    setIsOpen(event.target.checked);
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  const changeLanguageHandler = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <Fragment>
      <header>
        <Container>
          <div className={styles.header}>
            <Link to="/">
              <h2>Workers</h2>
            </Link>

            <nav className={styles.nav}>
              <div className={styles.hamburger}>
                <label htmlFor="check">
                  <input
                    type="checkbox"
                    id="check"
                    checked={isOpen}
                    onChange={toggleMenuHandler}
                  />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>

              <ul>
                <li>
                  <Link to="/">{t("Home")}</Link>
                </li>
                {!isLoggedIn && <li>
                  <Link to="/auth">{t("Login")}</Link>
                </li>}
                {isLoggedIn && <li>
                  <Link to={`/profile/${user.id}`}>{t("Profile")}</Link>
                </li>}
                {isLoggedIn && <li style={{ cursor: "pointer" }} onClick={logoutHandler}>
                  <Link>{t("Logout")}</Link>
                </li>}
                <li>
                  <select
                    className={styles.changeLanguage}
                    id="language"
                    onChange={changeLanguageHandler}
                  >
                    <option value="en">ENG</option>
                    <option value="mk">MKD</option>
                    <option value="sq">SQ</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>

      {isOpen && <MobileHeader onClose={closeMenuHandler} />}
    </Fragment >
  );
};

export default Header;
