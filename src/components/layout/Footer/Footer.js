import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {t('Footer_Text_1')} ©{new Date().getFullYear()} {t('Footer_Text_2')}
      </p>
    </footer>
  );
};

export default Footer;
