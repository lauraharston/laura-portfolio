import React from "react"
import Layout from "../components/layout"
import '../styles/index.css'
import {FaMediumM} from '@react-icons/all-files/fa/FaMediumM'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'



function Home () {
  return (
    <Layout>
      <div className='test'>
        <h1 style={{marginTop: 100}}>I'm Laura Harston.</h1>
        <h2>Design lover frontend developer.</h2>
       <div className='links'> 
         <FaGithub size={50} style={{ marginRight: '1rem' }}/> 
         <FaLinkedin size={50} style={{ marginRight: '1rem' }}/> 
         <FaMediumM size={50} style={{ marginRight: '1rem' }}/>
         <FaTwitter size={50} /> 
         </div>
      </div>
      
    </Layout>
  )
}
  

export default Home
