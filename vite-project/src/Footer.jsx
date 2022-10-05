import { useState } from 'react'
import gitHub from './assets/GitHub Icon.png'
import facebook from './assets/Facebook Icon.png'
import twitter from './assets/Twitter Icon.png'
import instagram from './assets/Instagram Icon.png'
import './Footer.css'

function Footer(){
    const [count, setCount] = useState(0)

return(
    
    <>
         <footer> 
      <form action='https://github.com/'><button><img src={gitHub} alt='github'/></button></form>
       <form action='https://www.facebook.com/'><button><img src={facebook} alt='fb'/></button></form>
      <form action='https://www.instagram.com/'><button><img src={instagram} alt='insta'/> </button></form>
      <form action='https://twitter.com/i/flow/login'><button><img  src={twitter} alt='tweet'/></button></form>
      
         </footer>
    </>

)
}

export default Footer