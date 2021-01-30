import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './cssComponents/Search.css'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/productslist')
        }
    }
    const expandSearch = () => {
        const searchBtn = document.querySelector(".searchForm")
        searchBtn.classList.toggle("showSearch")
    }
    const removeSearch = () => {
        const searchBtn = document.querySelector(".searchForm")
        searchBtn.classList.remove("showSearch")
    }
    return (
        <div className="searchTop">
            <Form onSubmit={submitHandler} inline className='searchForm'>
                <i className='fa fa-times mr-0 p-2' onClick={removeSearch}></i>
                <Form.Control
                    type='text'
                    name='q'
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder='Search products ...'
                    className='ml-sm-5 searchInput'
                >
                </Form.Control>
                <Button
                    id='searchForm' 
                    type='submit'
                    variant='outline-success' 
                    className='p-2 searchBtn'
                >
                    <i className="fa fa-search mr-0 p-2"></i> 
                </Button>
            </Form>
            <i className='fa fa-search' onClick={expandSearch}></i>
        </div>
    )
}

export default SearchBox