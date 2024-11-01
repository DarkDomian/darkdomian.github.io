import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
//   const history = useHistory();

//   const handleGoBack = () => {
//     history.goBack();
//   };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">{t('404.title', { defaultValue: '404 - Page Not Found' })}</h1>
      <p className="text-lg mb-6">{t('404.description', { defaultValue: 'Sorry, the page you are looking for does not exist.' })}</p>
      <button 
        // onClick={handleGoBack}
        className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition duration-300"
      >
        {t('404.goBack', { defaultValue: 'Go Back' })}
      </button>
    </div>
  );
};

export default NotFound;
