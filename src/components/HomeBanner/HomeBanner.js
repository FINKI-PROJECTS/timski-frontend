import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./HomeBanner.module.scss";

const HomeBanner = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const { t } = useTranslation();

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(searchInput);
    setSearchInput("");
  };

  return (
    <div className={styles["home-banner"]}>
      <div className={styles.search}>
        <h1>{t('Home_Banner_Text')}</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder={t('Search_Service')}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default HomeBanner;