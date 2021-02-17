import React from 'react'
import logo from '../images/laura-logo.png'
import { Container, Row, Col } from 'reactstrap';



function Layout ({children}) {
    return (
        <Container>
            <Row>
                <header>
                    <img src={logo}/>
                </header>
                {children}
            </Row>
            
      </Container>
    )
}

export default Layout