import React from 'react'
import logo from '../images/laura-logo.png'



function Layout ({children}) {
    return (
        <div style={{ margin: `1rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <header>
                <img src={logo}/>
            </header>
        {children}
      </div>
    )
}

export default Layout