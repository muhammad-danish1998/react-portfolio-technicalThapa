import React from 'react'
import { NavLink } from 'react-router-dom'
const Common = (props) => {
  return (
    <>
      <section id='header' className = 'd-flex align-items-center'>
        <div className='container-fluid' >
          <div className='row' >
            <div className='col-10 mx-auto'   >
              <div className='row' >
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                  <h1> {props.name} <strong className='brand-name'>Muhammad Danish</strong></h1>
                  <h2 className='my-3'>
                  I'm full stack developer in creating websites and interfaces and having 5+ years of experience. I'm energetic, self paced and detail oriented
                  engineer with strong knowledge of HTML / HTML5, CSS / CSS3, JavaScript, Bootstrap, Reactjs and Gatsby.
                </h2>
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn-get-started'>{props.btn}</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img' >
                  <img src={props.imgsrc} className='img-fluid animated ' alt='image not found' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
