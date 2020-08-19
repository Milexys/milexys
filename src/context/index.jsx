import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

const LanguageProvider = props => {
  const [language, setLanguage] = useState('es')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
