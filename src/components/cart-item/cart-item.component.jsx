import React from 'react';

import { CartItemContainer, ImgURL, ItemDetailsContainer, NameDetails } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <ImgURL src={imageUrl} alt='image'/>
        <ItemDetailsContainer>
            <NameDetails className='name'>{name}</NameDetails>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;