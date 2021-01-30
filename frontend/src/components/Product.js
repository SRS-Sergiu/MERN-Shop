import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image} from 'react-bootstrap'
import  './cssComponents/ProductCard.css' 
// import Rating  from './Rating'

const Product = ({ product }) => {
    return (
      <Card className="my-3 p-3 rounded productInList">
        <div className='productCardImg'>
            <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image} variant='top' />
            </Link>
        </div>
        
            <Card.Title as='div' className='name'>
                 <Link to={`/product/${product._id}`}>
                   <strong>{product.name}</strong> 
                </Link>
            </Card.Title>
        <Card.Text as='p' className='categ mb-0'>
        {product.category}
        </Card.Text>
        <hr />
        <Card.Text as='div' className='description'>
            <span>{product.brand}</span>
            <span>{product.description}</span>
        </Card.Text>
        <Card.Footer className="d-flex align-items-center justify-content-between">
        <Card.Text as='h4' className='price mb-0'>
            {product.price}
            <span>euro</span>
        </Card.Text>
       
                <Link to={`/product/${product._id}`} className='btnSimple'>
                  <span className='mr-1'>Detalii</span>
                  <i class="fas fa-chevron-right"></i>
                </Link>
        </Card.Footer>
      </Card>
    )
}

export default Product
