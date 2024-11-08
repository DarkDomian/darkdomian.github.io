import './index.css'
import ThemeSwitcher from './components/ThemeSwitcher';
import AnimatedLink from './components/AnimatedLink'
import { useTranslation } from "react-i18next";
import LanguageSwitcher from './components/LanguageSwitcher';


function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-light dark:bg-dark text-dark dark:text-light min-h-screen flex flex-col items-center justify-center transition-all duration-200">
        <ThemeSwitcher />
        <h1 className="text-3xl font-bold mb-4 text-accent">{t('welcome')}</h1>
        <p className="text-lg">{t('description')}</p>
        <AnimatedLink icon='link' children='random link' href='' />
        <AnimatedLink />
      </div>
      <div className='absolute top-4 right-4'>
        <LanguageSwitcher />
      </div>
    </>
  )
}

export default App
