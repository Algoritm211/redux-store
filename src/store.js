import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'


// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args)
//     const originalDispatch = store.dispatch

//     store.dispatch = (action) => {
//         console.log(action.type);
//         return originalDispatch(action)
//     }
//     return store
// }

// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args)
//     const originalDispatch = store.dispatch

//     store.dispatch = (action) => {
        // if (typeof action === 'string') {
        //     return originalDispatch({
        //         type: action
        //     })
        // }
        // return originalDispatch(action)
//     }
//     return store
// }

const logMiddleware = (store) => (dispatch) => (action) => {
    console.log(action.type, store.getState());
    return dispatch(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware))


// const stringMiddleware = () => (dispatch) => (action) => {
//     if (typeof action === 'string') {
//         return dispatch({
//             type: action
//         })
//     }
//     return dispatch(action)
// }



const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
}


store.dispatch(delayedActionCreator(3000))

// store.dispatch('HELLO')

export default store