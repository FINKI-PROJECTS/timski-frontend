import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import classes from "./AddService.module.scss";
import Editor from "../UI/Editor";
import { Container } from "../layout/Container";

const AddService = () => {
  const foodNameInputRef = useRef();
  const foodPriceInputRef = useRef();
  const foodImageInputRef = useRef();
  const foodCategoryInputRef = useRef();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const { t } = useTranslation();

  //   const fetchAllCategories = async () => {
  //     const res = await fetch('https://retaurant.azurewebsites.net/api/Category');
  //     const data = await res.json();
  //     setCategories(data);
  //   }

  //   useEffect(() => {
  //     fetchAllCategories();
  //   }, []);

  //   const submitHandler = (event) => {
  //     event.preventDefault();

  //     console.log(foodNameInputRef.current.value);
  //     console.log(foodPriceInputRef.current.value);
  //     console.log(foodImageInputRef.current.value);
  //     console.log(foodCategoryInputRef.current.value);

  //     fetch('https://retaurant.azurewebsites.net/api/Food', {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name: foodNameInputRef.current.value,
  //         price: foodPriceInputRef.current.value,
  //         // image: foodImageInputRef.current.value,
  //         // restaurantId: authCtx.restaurantId,
  //         categoryId: foodCategoryInputRef.current.value,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         // "Authorization": 'Bearer ' + authCtx.token,
  //       },
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           navigate('/admin');
  //         } else {
  //           return res.json().then((data) => {
  //             throw new Error(data.error.message);
  //           });
  //         }
  //       })
  //       .catch((err) => alert(err.message));
  //   };

  return (
    <Container>
      <section className={classes.auth}>
        <h1>{t("Add_Service")}</h1>

        <form onSubmit={() => {}}>
          <div className={classes.control}>
            <label htmlFor="foodName">{t("Service_Name")}</label>
            <input type="text" id="foodName" required ref={foodNameInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="foodPrice">{t("Service_Price")}</label>
            <input
              type="number"
              id="foodPrice"
              required
              ref={foodPriceInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="foodImage">{t("Service_Thumbnail")}</label>
            <input
              type="text"
              id="foodImage"
              required
              ref={foodImageInputRef}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="foodCategory">{t("Category")}</label>
            <select id="foodCategory" required ref={foodCategoryInputRef}>
              {categories.map((cat) => (
                <option value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className={classes.control}>
            <label>{t("Description")}</label>
            <Editor placeholder={"Write something..."} />
          </div>

          <div className={classes.actions}>
            <button>{t("Add_Service")}</button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default AddService;
