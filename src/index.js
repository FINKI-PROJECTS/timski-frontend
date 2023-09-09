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