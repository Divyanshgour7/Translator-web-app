"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import "../i18n"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const change_language = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => change_language('en')}>English</button>
      <br/>
      <button onClick={() => change_language('fr')}>Franch</button>
    </div>
  );
};

export default LanguageSwitcher;
