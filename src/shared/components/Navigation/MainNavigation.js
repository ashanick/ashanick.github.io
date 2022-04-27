import React from 'react'
import './MainNavigation.css'

import Card from '../UIElements/Card'
import ashaImage from '../../../images-src/AshaSundararajan.JPG'
import Avatar from '../UIElements/Avatar'

const MainNavigation = () => {
  return (
    <header className="header-style">
        <div className="header-content">
          <div>
            <h1>
                Asha Sundararajan 
            </h1>
            <h2>
                Educator, Environmentalist, and Entrepreneur
            </h2>
            </div>
            <Card className='header__image'>
              {/* <div className='homepage-image__image'> */}
                <Avatar image={ashaImage} alt='asha' />
                {/* </div> */}
          </Card>
        </div>

    </header>
  )
}

export default MainNavigation