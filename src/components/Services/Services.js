import { useTranslation } from "react-i18next";
import { Container } from "../layout/Container/index";
import Service from "./Service";
import styles from "./Services.module.scss";


const Services = ({ services }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={styles.services}>
        {services.map((service) => (
          <Service key={service.postId} {...service} />
        ))}

        {!services.length && <p>{t('No_Records_Found')}...</p>}
      </div>
    </Container>
  );
};

export default Services;