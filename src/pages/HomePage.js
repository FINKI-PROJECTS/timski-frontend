import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return <div>{t("Hello")}</div>;
};

export default HomePage;
