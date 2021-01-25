import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import HeroSection from '../components/HeroSection'
import { SliderData } from '../components/elements/SliderData'
import ImageSlider from '../components/elements/ImageSlider'
import Meta from '../components/Meta'
import Cards from '../components/elements/Cards'
import { listProducts } from '../actions/productActions'
import SimpleSlider from '../components/Banner'



const HomeScreen = ({ match }) => {

    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])


    return (
        <>
            <Meta />
            <SimpleSlider />
            {loading ? <Loader /> : <ImageSlider slides={SliderData} />}
            
            <Cards />
            {/* <HeroSection /> */}
            {/* {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Go Back</Link>} */}
       
        </>
    )
}

export default HomeScreen