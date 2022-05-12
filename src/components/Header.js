import React from 'react'

function Header({ handleDarkModeClick, isDarkMode }) {
  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
  )
}

export default Header