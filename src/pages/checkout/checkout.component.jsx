import React from "react";
import { useSelector } from "react-redux";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutPage = () => {
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);

	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className='total'>
				<span>TOTAL:${total}</span>
			</div>
			<div className='test-warning'>
				*Please use the following credit card for payment testing*
				<br />
				Credit Card Number: 4242 4242 4242 4242 Exp Date: 01/22 CVC: 123
			</div>
			<StripeCheckoutButton price={total} />
		</div>
	);
};

export default CheckoutPage;
