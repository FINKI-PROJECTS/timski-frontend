import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';  // import the default styles

import classes from "./AddService.module.scss";
import Editor from "../UI/Editor";
import { Container } from "../layout/Container";
import { categories } from "../../global/data";
import AuthContext from "../../context/auth-context";

const AddService = () => {
  const authCtx = useContext(AuthContext);
  const foodNameInputRef = useRef();
  const foodPriceInputRef = useRef();
  const foodImageInputRef = useRef();
  const foodCategoryInputRef = useRef();
  const [editorContent, setEditorContent] = useState('');

  const navigate = useNavigate();

  const { t } = useTranslation();

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(foodNameInputRef.current.value);
    console.log(foodPriceInputRef.current.value);
    console.log(foodImageInputRef.current.value);
    console.log(foodCategoryInputRef.current.value);

    fetch(`${process.env.REACT_APP_API_URL}posts/createOrUpdate`, {
      method: "POST",
      body: JSON.stringify({
        name: foodNameInputRef.current.value,
        price: foodPriceInputRef.current.value,
        thumbnail: foodImageInputRef.current.value,
        category: foodCategoryInputRef.current.value,
        description: editorContent
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + authCtx.token.access,
      },
    })
      .then((res) => {
        if (res.ok) {
          navigate('/');
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Container>
      <section className={classes.auth}>
        <h1>{t("Add_Service")}</h1>

        <form onSubmit={() => { }}>
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
                <option value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className={classes.control}>
            <label>{t("Description")}</label>
            <Editor placeholder={"Write something..."} value={editorContent}
              onChange={setEditorContent}
            />
          </div>

          <div className={classes.actions}>
            <button onClick={submitHandler}>{t("Add_Service")}</button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default AddService;
