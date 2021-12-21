import * as React from 'react'
import {container} from './footer.module.css'

const Footer = () => {
  return (  
      <footer className={container}>        
        <p>Cedric Van Roost</p>
        <p>AP Hogeschool</p>
        <p style={{textAlign:'center'}}>CMS Development <br/>21-22</p>
      </footer>   
  )
}

export default Footer