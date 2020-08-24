import React, { useEffect } from 'react'

import './book-list.css'
import BookListItem from '../book-list-item'
import { connect } from 'react-redux'
import withBookstoreService from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions'
import { bindActionCreators, compose } from 'redux'
import ErrorIndicator from '../error-indicator'
import ShoppingCartTable from '../shopping-card-table/shopping-cart-table'
import Spinner from '../spinner'

const BookList = ({ books, onAddedToCart }) => {
    const items = books.map(book => {
        return(
            <li key={book.id}>
                <BookListItem 
                    book={book} 
                    onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
        )
    })

    return (
        <ul className='book-list'>
            {items}
        </ul>
    )
}


const BookListContainer = (props) => {

    useEffect(() => {
        props.fetchBooks()

    }, [])

    const { books, loading, error, onAddedToCart} = props

    if (loading) {
        return(
            <Spinner />
        )
    }

    if (error) {
        return(
            <ErrorIndicator />
        )
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
}


function mapStateToProps(state) {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer)