import { Fragment, useState } from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Services from "../components/Services/Services";

import { services } from "../global/data";

const HomePage = () => {
  const [searchedServices, setSearchedServices] = useState(services);

  const searchHandler = (restaurantName) => {
    const newSearchedRestaurants = services.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(restaurantName.toLowerCase())
    );

    setSearchedServices(newSearchedRestaurants);
  };

  return (
    <Fragment>
      <HomeBanner onSearch={searchHandler} />
      <Services services={searchedServices} />
    </Fragment>
  );
};

export default HomePage; 
