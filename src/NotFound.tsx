import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  if (localStorage.theme !== "light") {
    document.documentElement.classList.add("dark");
  }

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-light dark:bg-dark text-dark dark:text-light min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">{t("404.title")}</h1>
      <p className="text-lg mb-6">{t("404.description")}</p>
      <button
        onClick={handleGoBack}
        className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition duration-300"
      >
        {t("404.goBack")}
      </button>
    </div>
  );
};

export default NotFound;
