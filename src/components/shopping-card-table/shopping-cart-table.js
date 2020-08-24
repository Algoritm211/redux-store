import React from 'react'
import './shopping-cart-table.css'
import { connect } from 'react-redux'

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, index) =>{
        const { id, name, count, total } = item
        return (
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button className='btn btn-outline-danger btn-sm'
                        onClick={() => onDelete(id)}>
                        <i className='fa fa-trash-o'/>
                    </button>
                    <button className='btn btn-outline-success btn-sm'
                        onClick={() => onIncrease(id)}>
                        <i className='fa fa-plus-circle'/>
                    </button>
                    <button className='btn btn-outline-warning btn-sm'
                        onClick={() => onDecrease(id)}>
                        <i className='fa fa-minus-circle'/>
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className='shopping-card-table'>
            <h2>Your Order</h2>    
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>   
            <div className='total'>
                Total: {total}
            </div>     
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        items: state.cartItems,
        total: state.orderTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {
            console.log(`Increase ${id}`);
        },
        onDecrease: (id) => {
            console.log(`Decrease ${id}`);
        },
        onDelete: (id) => {
            console.log(`Delete ${id}`);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)