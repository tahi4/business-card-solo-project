import { useState } from 'react'
import profilePic from './assets/Rectangle 90.png'
import email from './assets/Button (1).png'
import linkedin from './assets/Button.png'
import './App.css'

function Main() {
  const [count, setCount] = useState(0)

  return (
    <div className="Main">
    
    <img src={profilePic} className="profilePic" alt='profile'/>

    <h2 className='name'>Laura Smith</h2>
    <h4 className='job'>Frontend Developer</h4>
    <p className='website'>laurasmith.website</p>

    <div className='btns'>
    <form action='https://mail.google.com/'><button><img src={email} alt='email' /> </button></form>
    <form action='https://www.linkedin.com/'><button><img src={linkedin} alt='linkedin' /></button></form>
    
    </div>

    <div className='section'>
       <p className='category'>About</p>
       <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    
       <p className='category'>Interests</p>
       <p className='description'>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    
    </div>

</div>
 )
}

export default Main
