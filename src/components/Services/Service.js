import styles from "./Service.module.scss";

const Service = (props) => {
  return (
    <>
      <div className={styles["service-card"]}>
        <img src={props.image} alt={props.name} />
        <hr />
        <h2>{props.name}</h2>
        <p>{props.price} ден</p>
      </div>
    </>
  );
};

export default Service;