import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyCart,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{cartItems ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyCart> Your cart is empty</EmptyCart>
				)}
			</CartItemsContainer>
			<CustomButton
				onClick={() => {
					history.push("/checkout");
					dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
