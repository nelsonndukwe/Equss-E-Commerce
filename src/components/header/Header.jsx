import React from 'react'

import { Link } from "react-router-dom";

import './Header.css'

import { motion } from "framer-motion"


import Equss from '../../assets/images/Equss.png'
import Avater from '../../assets/images/user-icon.png'


import { Container, Row } from 'reactstrap'


import { BsBag } from 'react-icons/bs'

import { FiHeart } from 'react-icons/fi'

import { HiMenuAlt2 } from 'react-icons/hi'

const nav__link = [
  {
    Path: 'home',
    display: 'Home'
  },

  {
    Path: 'shop',
    display: 'Shop'
  },

  {
    Path: 'cart',
    display: 'Cart'
  }



]


const Header = () => {
  return (


    <header className='header'>

     
          <div className='nav__wrapper'>
            <div className='logo'>
              <img className='item__logo' src={Equss} alt='logo' />


            </div>

            <div className='navigation'>

              <ul className='menu'>
                <li className='nav__item'>
                  Home
                </li>

                <li className='nav__item'>
                  Shop
                </li>

                <li className='nav__item'>
                  Cart
                </li>

                

              </ul>

            </div>

            <div className='nav__icons'>
              <span className='fav__icon'><FiHeart />
                <span className='badge'>1</span>
              </span>

              <span className='cart__icon'><BsBag />
                <span className='badge'>1</span>
              </span>

              <span><motion.img whileTap={{ scale: 1.2 }} src={Avater} /></span>
            </div>

            <div className='mobile__menu'>
              <span>
                <HiMenuAlt2 />
              </span>





            </div>

          </div>



        




    </header>



  )
}

export default Header