import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "../i18n";

function Navbar() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <nav>
      <div>
        
      </div>
      <div>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
