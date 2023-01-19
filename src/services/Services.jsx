import React from 'react'
import { Container, Row, Col } from 'reactstrap'


import './services.css'

import { BsTruck } from 'react-icons/bs'

import serviceData from '../assets/data/serviceData'


const Services = () => {
  return (
    <section className='services' >

      <div className='myservice__conatiner'>
        {serviceData.map((item, index) => (

          <div className='service_conatiner' key={index}>

            <div className='service__item' style={{background:`${item.bg}` }}>
              <span className='item__icon'>{item.icon}</span>
              <div >
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>


            </div>

          </div>




        ))}








      </div>








    </section>
  )
}

export default Services