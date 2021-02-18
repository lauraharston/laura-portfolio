import React from "react"
import Layout from "../components/layout"
import '../styles/index.css'
import {FaMediumM} from '@react-icons/all-files/fa/FaMediumM'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home (props) {
  return (
    <Layout>
      <div className='test'>
        <h1 style={{marginTop: 100}}>I'm <span style={{color:'#1ca086', opacity:'0.8'}}>Laura Harston.</span></h1>
        <h2>Design lover <span style={{color:'#1ca086',opacity:'0.6'}}>frontend developer.</span></h2>
       <div className='links'> 
         <a href='https://github.com/lauraharston' target='blank'> <FaGithub size={50} style={{ marginRight: '1rem' }}/> </a>
         <a href='https://www.linkedin.com/in/laura-harston-9a586a95/' target='blank'><FaLinkedin  size={50} style={{ marginRight: '1rem' }}/> </a>
         <a href='https://lauraharston.medium.com/' target='blank'><FaMediumM size={50} style={{ marginRight: '1rem' }}/></a>
         <a href='https://twitter.com/lauraharston' target='blank'><FaTwitter size={50} /> </a>
      </div>
      <div className='button'>
        <Button style={{ marginRight: '1rem' }} size='lg'>Email Me</Button>
        <Button outline color="warning" size='lg'>Resume</Button>
      </div>
         
      </div>
      
    </Layout>
  )
}
  

export default Home
