import { Link } from "react-router-dom";

import styles from "./Profile.module.scss";
import Services from "../Services/Services";
import { categories, services } from "../../global/data";
import { useState } from "react";

const Profile = () => {
  const [filteredServices, setFilteredServices] = useState(services);

  const filterServicesHandler = (categoryId) => {
    const newFilteredFoods = services.filter(
      (service) => service.categoryId === categoryId
    );
    setFilteredServices(newFilteredFoods);
  };

  return (
    <div className={styles.service}>
      <div className={styles["service-banner"]}>
        <h2>Flamur Bakiu</h2>
      </div>

      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            onClick={() => filterServicesHandler(category.id)}
            key={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>

      <Link to="/profile/add-service" className={styles.addService}>
        Add Service
      </Link>
      
      <Services services={filteredServices} />
    </div>
  );
};

export default Profile;
