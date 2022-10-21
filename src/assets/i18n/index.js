import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import english from './en.json';
import arabic from './ar.json';

const translations = {
  en: english,
  ar: arabic,
};

const i18n = new I18n(translations);

i18n.locale = Localization.locale;

i18n.enableFallback = true;

export default i18n;
