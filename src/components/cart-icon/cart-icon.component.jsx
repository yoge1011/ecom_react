import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../reducer/cart/cart.action';
import { selectCartItemsCount } from '../../reducer/cart/cart.selectors';

const CartIcon  = ({toggleCartHidden, itemCount}) => { 
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch( toggleCartHidden() )
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);