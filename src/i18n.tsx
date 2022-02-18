import i18n from "i18next";
import translationEN from './locales/en/translationEN.json';
import translationKR from './locales/kr/translationKR.json';
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: translationEN
    },
    ko: {
        translation: translationKR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ko',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;