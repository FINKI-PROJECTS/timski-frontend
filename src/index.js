import React from 'react';
import ReactDOM from 'react-dom/client';
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
        }
      },
      mk: {
        translation: {
          "Hello": "Здраво",
        }
      },
      sq: {
        translation: {
          "Hello": "Përshëndetje",
        }
      }
    },
    lng: "mk",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);