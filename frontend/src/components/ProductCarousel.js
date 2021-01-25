import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import "./cssComponents/ProductCarousel.css";


const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector((state) => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    const settings = {
        draggable: false,
            slideToShow: 3,
            autoplay: false,
            dots: true,
            lazyLoad: 'ondemand',
            arrows: true,
    }
    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
        : (
       
          <div>
              <div class="homeTitle"><p>the best cars</p><h1>Masinile noastre</h1><div></div></div>
                <Carousel pause='hover' className='homeCarousel' {...settings}>
                {products.map(product => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name} fluid />
                                <Carousel.Caption className='carousel-caption'>
                                    <h2>
                                        {product.name} 
                                    </h2>
                                    <p>{product.price} <span>$</span></p>
                                    <div>{product.description}</div>
                                </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
          </div>
        )
}

export default ProductCarousel
