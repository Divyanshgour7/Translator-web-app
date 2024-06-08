"use client"
import { useTranslation } from 'react-i18next';
function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <p>{t('Footer')}</p>
        </footer>
    );
}

export default Footer;
