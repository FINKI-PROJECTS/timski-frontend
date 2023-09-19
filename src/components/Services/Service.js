import { useNavigate } from "react-router-dom";
import styles from "./Service.module.scss";

const Service = (props) => {
  const naviagte = useNavigate();
  const clickHandler = (e) => {
    e.stopPropagation();
    naviagte(`/profile/${props.createdUser.id}`)
  }
  const serviceClickHandler = () => {
    naviagte(`/service/${props.postId}`)
  }
  return (
    <>
      <div className={styles["service-card"]} onClick={serviceClickHandler} style={{ cursor: 'pointer' }}>
        <img src={props.thumbnail} alt={props.name} />
        <hr />
        <h2>{props.name}</h2>
        <h4 style={{ cursor: 'pointer' }} onClick={clickHandler}>{props?.createdUser?.fullName}</h4>
        <p>{props.price} ден</p>
      </div>
    </>
  );
};

export default Service;