import { Fragment, useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Services from "../components/Services/Services";


const HomePage = () => {
  const [services, setServices] = useState([]);
  const [searchedServices, setSearchedServices] = useState(services);


  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "posts/";
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
        setServices(data);
      })
      .catch((err) => alert(err.message));
  }, [])

  const searchHandler = (serviceName) => {
    const newSearchedRestaurants = services.filter((service) =>
      service.name.toLowerCase().includes(serviceName.toLowerCase())
    );

    setSearchedServices(newSearchedRestaurants);
  };

  return (
    <Fragment>
      <HomeBanner onSearch={searchHandler} services={services} />
      <Services services={searchedServices} />
    </Fragment>
  );
};

export default HomePage; 
