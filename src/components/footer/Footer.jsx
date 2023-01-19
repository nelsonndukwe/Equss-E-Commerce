import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Equss from '../../assets/images/Equss.png'
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';
import {FiMapPin} from 'react-icons/fi'
import {BsTelephoneInbound} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { motion } from 'framer-motion';

// Socail Links

import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'


const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg={4}>
            <div className='logo'>
              <img className='item__logo' src={Equss} alt='logo' />
            </div>

            {/* <p className='footer__text mt-3 text-white fs-2 fw-800'>
              Equss
  
            </p> */}

          </Col>

          <Col lg={3} md={6} sm={12}>
          <div className='footer__quick__links'>
          <h4 className='quick__links__title'>Top Categories</h4>
          <ListGroup className='listgroup__conatiner'>
          <ListGroupItem className='list__group ps-0 border-0'><article>Mobile Phones</article></ListGroupItem>
          

          </ListGroup>

          <ListGroup >
          <ListGroupItem className='list__group ps-0 border-0'><article>Smart Accescories</article></ListGroupItem>
          

          </ListGroup>

          <ListGroup>
          <ListGroupItem className=' list__group ps-0 border-0'><article>MP3 Speakers</article></ListGroupItem>
          

          </ListGroup>
          <ListGroup>
          <ListGroupItem className='list__group ps-0 border-0'><article>Sneakers</article></ListGroupItem>
          

          </ListGroup>

          </div>


          </Col>


          <Col lg={2} md={12} sm={12}>
          <div className='footer__quick__links'>
          <h4 className='quick__links__title'>Social Links</h4>
          <ListGroup>
          <ListGroupItem className=' list__group ps-0 border-0'><span><BsInstagram/></span>
          <p>Instagram</p>
          </ListGroupItem>
          

          </ListGroup>

          <ListGroup >
          <ListGroupItem className='list__group ps-0 border-0'><span><FiFacebook/></span>
          <p>Facebook</p>
          </ListGroupItem>
          

          </ListGroup>

          <ListGroup>
          <ListGroupItem className='list__group ps-0 border-0'><span><FiTwitter/></span>
          <p>Twitter</p>
          
          </ListGroupItem>
          

          </ListGroup>
          

          </div>

          </Col>

          <Col lg={3} sm={12}>
          <div className='footer__quick__links'>
          <h4 className='quick__links__title'>Contact</h4>
          <ListGroup>
          <ListGroupItem className='list__group ps-0 border-0'><span><FiMapPin/></span>
          <p>67, Hopsital Road, Aba, Abia State,Nigeria</p>

          </ListGroupItem>
          </ListGroup>

          <ListGroup >
          <ListGroupItem className='list__group ps-0 border-0'>
          <span><BsTelephoneInbound/></span>
          <p>+2349064035138</p>
          </ListGroupItem>
          

          </ListGroup>

          <ListGroup>
          <ListGroupItem className='list__group ps-0 border-0'>
          <span><AiOutlineMail/></span>
          <p>Nelsonndukwe8000@gmal.com</p>
          </ListGroupItem>
          

          </ListGroup>
          <ListGroup>
          <ListGroupItem className='list__group ps-0 border-0'>
          <span><BsWhatsapp/></span>
          <p></p>
          </ListGroupItem>
          

          </ListGroup>

          </div>

          </Col>

          <Col lg={12} sm={12}>
            <p className='footer__copyright text-center text-white fs-6 fw-700'>Copyright {year} Developend By Equss Dev Team. All Rights Resevred

            </p>
          </Col>


        </Row>

      </Container>
    </footer>

  )
}

export default Footer