import React from 'react'
import './app.css'
import {Route, Switch, Router} from 'react-router-dom'
import Spinner from '../spinner'
import withBookstoreService from '../hoc'
import { HomePage, CartPage } from '../pages'
import ShopHeader from '../shop-header'

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/cart/' component={CartPage}/>
            </Switch>
        </main>
    )
}

export default App