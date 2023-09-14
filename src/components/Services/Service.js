import { useNavigate } from "react-router-dom";
import styles from "./Service.module.scss";

const Service = (props) => {
  const naviagte = useNavigate();
  const clickHandler = () => {
    naviagte(`/profile/${props.createdUser.id}`)
  }
  return (
    <>
      <div className={styles["service-card"]}>
        <img src={props.thumbnail} alt={props.name} />
        <hr />
        <h2>{props.name}</h2>
        <h4 onClick={clickHandler}>{props?.createdUser?.fullName}</h4>
        <p>{props.price} ден</p>
      </div>
    </>
  );
};

export default Service;