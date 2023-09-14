import { Link, useNavigate, useParams } from "react-router-dom";

import styles from "./Profile.module.scss";
import Services from "../Services/Services";
import { categories } from "../../global/data";
import { useEffect, useState } from "react";

const Profile = () => {
  const [services, setServices] = useState([]);
  const [user, setUser] = useState({});
  const [filteredServices, setFilteredServices] = useState(services);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { userId } = useParams()
  const navigate = useNavigate();


  useEffect(() => {
    if (!userId) {
      alert("User doesn't exist.");
      navigate("/");
      return;
    }
    const url = process.env.REACT_APP_API_URL + "posts/" + userId;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data?.message);
          });
        }
      })
      .then((data) => {
        setServices(data.posts);
        setUser(data.user);
      })
      .catch((err) => {
        navigate("/");
        alert(err.message)
      });
  }, [])

  const filterServicesHandler = (categoryName) => {
    const newFilteredFoods = categoryName ? services.filter(
      (service) => service.category === categoryName
    ) : services;
    setFilteredServices(newFilteredFoods);
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    filterServicesHandler('');
  }, [services])

  return (
    <div className={styles.service}>
      <div className={styles["service-banner"]}>
        <h2>{user?.fullName}</h2>
      </div>

      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            onClick={() => filterServicesHandler(category.name)}
            key={category.id}
          >
            {category?.name ? category.name : "All"}
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
