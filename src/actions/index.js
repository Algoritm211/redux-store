

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',

    }
}

const booksError = (error) => {
    return {
        type:'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddedToCart = (bookId) => {
    // console.log(bookId);
    return{
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookRemovedFromCart = (bookId) => {
    return{
        type:'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}

const allBooksRemovedFromCart = (bookId) => {
    return{
        type:'All_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
}

// const fetchBooks = (bookstoreService, dispatch) => () => {
    // dispatch(booksRequested())
    // bookstoreService.getBooks()
    // .then((data) => dispatch(booksLoaded(data)))
    // .catch((error) => dispatch(booksError(error)))
// }

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)))
}

export {
    booksLoaded,
    booksRequested,
    booksError,
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
}