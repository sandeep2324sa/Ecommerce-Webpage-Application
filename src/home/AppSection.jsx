import React from 'react'
import { LightSpeed } from 'react-reveal'
import {Link} from 'react-router-dom'

const btnText ="Sign up for free"
const title ="Shop Anytime,Anywhere"
const desc= "Take shop on your device with our app and learn all time what you want. Just download and start to learn"
const AppSection = () => {
  return (
    <LightSpeed left duration={1500}>
    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to="/sign-up" className="lab-btn mb-4">{btnText}</Link>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
            </div>

            <div className='section-wrapper'>
                <ul className='lab-ul '>
                   <li><a href="https://apps.apple.com/us/genre/ios/id36"><img src="/images/app/01.jpg"/></a></li>
                    <li><a href="https://playstoreforpc.com/"><img src="/images/app/02.jpg"/></a></li>
                </ul>
            </div>
        </div>
    </div>
    </LightSpeed>
  )
}

export default AppSection
