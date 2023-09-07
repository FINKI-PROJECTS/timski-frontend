import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MobileHeader.module.scss";

const MobileHeader = (props) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguageHandler = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const logoutHandler = () => {
    // Logout logic
    navigate("/");
    props.onClose();
  };

  return (
    <ul className={styles["mobile-header"]}>
      <li onClick={props.onClose}>
        <Link to="/">{t("Home")}</Link>
      </li>
      <li onClick={props.onClose}>
        <Link to="/auth">{t("Login")}</Link>
      </li>
      <li onClick={props.onClose}>
        <Link to="/admin">{t("Profile")}</Link>
      </li>
      <li style={{ cursor: "pointer" }} onClick={logoutHandler}>
        <Link>{t("Logout")}</Link>
      </li>
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
  );
};

export default MobileHeader;
