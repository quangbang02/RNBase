/**
 *
 * @flow
 * @format
 *
 */
import React from 'react';
import numeral from 'numeral';
import moment from 'moment';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import locales from './locales';
import 'numeral/locales/vi';
import 'moment/locale/vi';

moment.locale('vi');

numeral.locale('vi');

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('vi-VN'),
  init: () => {},
  cacheUserLanguage: () => {},
};

const resources = {
  'en-US': {
    ...locales.en_US,
  },
  'vi-VN': {
    ...locales.vi_VN,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      format: function(value, format, lng) {
        if (format === 'intlDate') {
          return value.toUpperCase();
        }
        if (value instanceof Date) {
          return moment(value).format(format);
        }
        return value;
      },
    },
    fallbackLng: 'vi-VN',
    lng: 'vi-VN',
    resources,
  })
  .done();

export default i18n;
