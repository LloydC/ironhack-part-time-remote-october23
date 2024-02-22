const profileImg = 'https://i.imgur.com/i1gsj0v.png';
import { useContext } from "react"; // <== ADD
import { ThemeContext } from "./../context/theme.context";
import { LanguageContext } from "../context/language.context";

import englishContent from '../en-US.json';
import frenchContent from '../fr-FR.json';

function HomePage() {
  const { theme } = useContext(ThemeContext);
  const {language } = useContext(LanguageContext)
  
  const generateContent = (activeLanguage) => {
    if(activeLanguage === "en-US"){
      return englishContent.homePageTitle
    }
    else if (activeLanguage === "fr-FR") {
      return frenchContent.homePageTitle;
    }
    else if (activeLanguage === "es-SP"){
      return "Me llamo..."
    }
  }
  return (
    <div className={`HomePage ${theme}`}>
      <h1>{generateContent(language)}</h1>
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}
 
export default HomePage;