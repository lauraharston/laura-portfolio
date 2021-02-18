import React from 'react'
import logo from '../images/laura-logo.png'
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'gatsby';
import '../styles/layout.css'

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )


function Layout ({children}) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
            <Row>
                <header>
                    
                    <ul style={{ listStyle: `none`, float: `right` }}>
                        <ListLink to="/">Projects</ListLink>
                        <ListLink to="/">About</ListLink>
                        <ListLink to="/">Contact</ListLink>
        </ul>
                </header>
            </Row>
            <Row>
                {children}
            </Row> 
      </div>
    )
}

export default Layout