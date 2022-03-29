import React from "react"
import "./Header.css"
import headerLogo from "../../images/tomates-podridos-logo.png"

const Header = () => {
  return(
    <header>
      <img className="header-logo" src={headerLogo} alt="Home button tomates podridos logo" />
    </header>

  )
}
export default Header
