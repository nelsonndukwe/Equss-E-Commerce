import React from 'react'


import Helment from '../../src/components/helment/Helment'
import '../Css/Home.css'
import products from '../../src/assets/data/products'

import { Link } from "react-router-dom";


import Heroimg from '../../src/assets/images/herowatch.jpg'

import Clock from '../components/UI/Clock'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react'

import Counterimg from '../../src/assets/images/counter-timer-img.png'

const Home = () => {

  const [trendingproducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])




  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'chair');

    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');

    const filteredMobileProducts = products.filter(item => item.category === 'mobile');

    const filteredWirelessProducts = products.filter(item => item.category === 'wireless');

    const filteredPopularProducts = products.filter(item => item.category === 'watch');







    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts)

  }, []);

  return (

    <Helment title={'Home'}>

      <section className='hero__section'>
      

        <div className='home_conatineer'>

          <div className='hero__container'>

            <p className='hero_subtitle'>Trending Products in {year}</p>
            <h2 className='hero__h2'>Shop From Equss From Your Convinence</h2>
            <p className='hero_subtitle2'>Buy your favourite Items from our store and have them delieveed to you at your Convinece, Buy Now to Get startwed in our store
            </p>
            <button className='buy__btn'><Link to='/shop'>SHOP NOW</Link></button>

          </div>

          <div className='hero__image'>

            <img className='hero'
              src={Heroimg} alt='hero image' />

          </div>



        </div>
      </section>


      <Services />

      <section>

        <div className='trending__products'>
          <Container>
            <Row>
              <Col lg={12} className='text-center mb-5'>
                <h2 className='section__title'>Trending Products</h2>

              </Col>

              <ProductList data={trendingproducts} />


            </Row>

          </Container>


        </div>
      </section>

      <section className='best__sales'>

        <Container>
          <Row>
            <Col lg={12} className='text-center mb-5'>
              <h2 className='section__title'>Best Sales</h2>

            </Col>

            <ProductList data={bestSalesProducts} />

          </Row>
        </Container>
      </section>

      <section className='timer__countdown'>

        <Container>
          <Row>
            <Col lg={6} md={6}>

              <div className='clock__top__content'>
                <h4 className='text-white fs-6 mb-3'>Limited Offer lasts</h4>
                <h3 className='text-white fs-5 mb-2' >Quality Armchair</h3>

              </div>
              <Clock />

              <button className='buy__btn store__btn'><Link to='/shop'>Visit Store</Link></button>

            </Col>

            <Col lg={6} md={6} className='text-end'>
              <img src={Counterimg} alt='' />

            </Col>



          </Row>
        </Container>


      </section>

      <section className='new__arrivals'>
      <Container>
      <Row>
        <Col lg={12} className='text-center mb-5'>
        <h2 className='section__title'>New Arrivals</h2>



        </Col>

        <ProductList data={mobileProducts} />
        <ProductList data={wirelessProducts} />



      </Row>

      </Container>


      </section>

      <section className='popular__category'>
      <Container>
        <Row>
        <Col lg={12} className='text-center mb-5'>
        <h2 className='section__title'>Popular Products</h2>
        </Col>
        <ProductList data={popularProducts} />
        </Row>
      </Container>





      </section>




    </Helment>
  )
}

export default Home