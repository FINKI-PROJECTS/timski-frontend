import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import './index.css';
import App from './App';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Hello": "Hello",
          "Home": "Home",
          "Login": "Login",
          "Logout": "Logout",
          "Profile": "Profile",
          "Sign_Up": "Sign Up",
          "Footer_Text_1": "Copyright",
          "Footer_Text_2": "Restaurants. All Rights Reserved.",
          "Your_FirstName": "Your First Name",
          "Your_LastName": "Your Last Name",
          "Your_Phone_Number": "Your Phone Number",
          "Your_Email": "Your Email",
          "Your_Password": "Your Password",
          "Create_Account": "Create Account",
          "Create_New_Account": "Create new account",
          "Login_With_Existing_Account": "Login with existing account",
          "Home_Banner_Text": "Home Banner Text",
          "Search_Service": "Search Service",
          "No_Records_Found": "No Records Found",
        }
      },
      mk: {
        translation: {
          "Hello": "Здраво",
          "Home": "Дома",
          "Login": "Логирај се",
          "Logout": "Одјави се",
          "Sign_Up": "Пријавете се",
          "Profile": "Профил",
          "Footer_Text_1": "Авторски права",
          "Footer_Text_2": "Мајстори. Сите права се задржани.",
          "Your_FirstName": "Вашето име",
          "Your_LastName": "Вашето презиме",
          "Your_Phone_Number": "Вашиот телефонски број",
          "Your_Email": "Вашата електронска пошта",
          "Your_Password": "Вашата лозинка",
          "Create_Account": "Креирај сметка",
          "Create_New_Account": "Креирај нова сметка",
          "Login_With_Existing_Account": "Најавете се со постоечка сметка",
          "Home_Banner_Text": "Home Banner Text",
          "Search_Service": "Search Service",
          "No_Records_Found": "No Records Found",
        }
      },
      sq: {
        translation: {
          "Hello": "Përshëndetje",
          "Home": "Shtëpi",
          "Login": "Identifikohu",
          "Logout": "Shkyçu",
          "Profile": "Profili",
          "Sign_Up": "Regjistrohu",
          "Footer_Text_1": "E drejta e autorit",
          "Footer_Text_2": "Majstori. Të gjitha të drejtat e rezervuara.",
          "Your_FirstName": "Emri juaj",
          "Your_LastName": "Mbiemri juaj",
          "Your_Phone_Number": "Numri juaj i telefonit",
          "Your_Email": "Email-i juaj",
          "Your_Password": "Fjalëkalimi juaj",
          "Create_Account": "Krijo llogari",
          "Create_New_Account": "Hapni një llogari të re",
          "Login_With_Existing_Account": "Hyni me llogarinë ekzistuese",
          "Home_Banner_Text": "Home Banner Text",
          "Search_Service": "Search Service",
          "No_Records_Found": "No Records Found",
        }
      }
    },
    lng: "en",
    fallbackLng: "mk",

    interpolation: {
      escapeValue: false
    }
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);