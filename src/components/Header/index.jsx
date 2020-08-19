import React, { useContext } from 'react'
import { LanguageContext } from '../../context/index'

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <header>
      <div></div>
    </header>
  )
}

export default Header
