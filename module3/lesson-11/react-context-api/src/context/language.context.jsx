import { createContext, useState } from "react"; // <== UPDATE
 
const LanguageContext = createContext();
 
function LanguageProviderWrapper(props) {
  const [language, setLanguage] = useState("en-US"); // <== ADD
 
  const toggleLanguage = () => {    // <== ADD
    if (language === "en-US") {
      setLanguage("fr-FR");
    }
     else {
      setLanguage("en-US");
    }
  };
 
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>   {/* <== UPDATE  */}
      {props.children}
    </LanguageContext.Provider>
  );
}
 
export { LanguageContext, LanguageProviderWrapper };