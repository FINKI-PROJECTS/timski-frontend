import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

import styles from "./ServiceDetails.module.scss";
import Services from "../Services/Services";
import image from "../../assets/home-banner-bg.jpg";
import { Container } from "../layout/Container";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth-context";

const fourLastServices = [
  {
    postId: 1,
    name: "Updated Post Name",
    price: "55.00",
    thumbnail: "https://example.com/newimage.jpg",
    description: "<p>This is an updated HTML description.</p>",
    category: "Updated Category",
    createdUser: {
      id: 2,
      fullName: "Jeton 1 R",
    },
  },
  {
    postId: 1,
    name: "Updated Post Name",
    price: "55.00",
    thumbnail: "https://example.com/newimage.jpg",
    description: "<p>This is an updated HTML description.</p>",
    category: "Updated Category",
    createdUser: {
      id: 2,
      fullName: "Jeton 1 R",
    },
  },
  {
    postId: 1,
    name: "Updated Post Name",
    price: "55.00",
    thumbnail: "https://example.com/newimage.jpg",
    description: "<p>This is an updated HTML description.</p>",
    category: "Updated Category",
    createdUser: {
      id: 2,
      fullName: "Jeton 1 R",
    },
  },
  {
    postId: 1,
    name: "Updated Post Name",
    price: "55.00",
    thumbnail: "https://example.com/newimage.jpg",
    description: "<p>This is an updated HTML description.</p>",
    category: "Updated Category",
    createdUser: {
      id: 2,
      fullName: "Jeton 1 R",
    },
  },
];

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const authCtx = useContext(AuthContext);
  const [service, setService] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!serviceId) {
      alert("Service doesn't exist.");
      navigate("/");
      return;
    }
    if (location.search?.includes("success=true")) {
      alert("Payment successfull.");
      navigate("/service/" + serviceId);
      return;
    }

    const url = process.env.REACT_APP_API_URL + "posts/getById/" + serviceId;
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
        // setServices(data.posts);
        setService(data);
      })
      .catch((err) => {
        navigate("/");
        alert(err.message)
      });

  }, [])

  const getPaymentLink = async () => {
    await fetch(process.env.REACT_APP_API_URL + `payment/get-link?serviceId=${serviceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + authCtx.token.access,
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
      .then(data => {
        window.location = data.paymentURL;
      })
      .catch((err) => {
        navigate("/");
        alert(err.message)
      });

  }
  return (
    <div className={styles.serviceDetails}>
      <div className={styles["service-details-banner"]}>
        <img src={service.thumbnail ?? image} alt='Test' className={styles.thumbnail} />
      </div>
      <Container>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2>{service.name}</h2>
            <div>
              <span style={{ backgroundColor: 'rgb(217, 237, 86)' }}>{service.category}</span>
              <span style={{ backgroundColor: '#81c6db' }}>User: {service?.createdUser?.fullName}</span>
              <span>Price: {service.price} den</span>
              <button className={styles["button-ripple"]} onClick={getPaymentLink}>Pay</button>
            </div>
          </div>
          <div className={styles.description}>
            <article className={styles.display_content} dangerouslySetInnerHTML={
              { __html: service.description ?? "" }
            }></article>

          </div>
        </div>

        <div className={styles.bottom}>
          <h3>Check more services</h3>
          <Services services={fourLastServices} />
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
