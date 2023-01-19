import React from 'react'
import { BsPlus } from 'react-icons/bs'
import '../../Css/Product-Card.css'

import Col from 'react-bootstrap/Col';
import { TbCurrencyNaira } from 'react-icons/tb'

import { motion } from 'framer-motion'

import { NavLink } from 'react-router-dom';


const ProductCard = ({item}) => {
    return (


        <Col lg={3} md={4} className='mb-2'>
            <div className='product__item'>

                <div className='product__image'>
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt='' />
                </div>

                <div className='p-2 product__information' ><h3 className='product__name'>

                    <NavLink to={`/shop/${item.id}`}> {item.productName }</NavLink>

                </h3>
                    <span className='text-center d-block'>{item.category}</span>
                </div>

                <span className='product_card_bottom d-flex align-items-center justify-content-between p-2'>
                    <span className='product__price'><TbCurrencyNaira className='Naira__icon' />{item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} className='add_icon'><BsPlus /></motion.span>
            </span>

        </div>

                </Col>
           

    )

}

export default ProductCard