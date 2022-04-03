import React from "react"
import "./Header.css"
import headerLogo from "../../images/tomates-podridos-logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <Link to="/">
        <img className="header-logo" src={headerLogo} alt="Home button tomates podridos logo" />
      </Link>
    </header>

  )
}
export default Header
