import React from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
	CollectionItemContainer,
	BackgroundImage,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
	AddCartButton,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;
	const dispatch = useDispatch();

	return (
		<CollectionItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddCartButton onClick={() => dispatch(addItem(item))} inverted>
				Add to Cart
			</AddCartButton>
		</CollectionItemContainer>
	);
};

export default CollectionItem;
