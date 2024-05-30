import React from 'react'
import { Bounce } from 'react-reveal';

const subTitle ="Save The Day";
const title=(
    <h2 className='title'>Join On Day Long Workshop <b>Advance <span className='text-warning'>Mastering</span></b> On Sales</h2>
)

 const desc ="Limited Time Offer! Hurry Up"
const Register = () => {
  return (
    <Bounce left duration={1500}>
  <section className='register-section padding-tb pb-0'>
     <div className='container'>
        <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
            <div className='col'>
                <div className='section-header'>
                    <span className='subtitle'>{subTitle}</span>
                     {title}
                     <p>{desc}</p>
                </div>
            </div>
               <div className='col'>
                <div className='section-wrapper'>
                    <h4>Register Now</h4>
                    <form className='register-form'>
                        <input type="text" name="name" placeholder='username' className='reg-input'/>
                        <input type="email" name="email" placeholder='email' className='reg-input'/>
                        <input type="number" name="number" placeholder='number' className='reg-input'/>
                        <button type='submit' className='lab-btn'>Register Now</button>
                        
                    </form>
                </div>
               </div>
        </div>
     </div>
    

  </section>
  </Bounce>
  )
}

export default Register
