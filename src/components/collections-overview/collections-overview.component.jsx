import React from "react";
import { useSelector } from "react-redux";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = () => {
	const collections = useSelector(selectCollectionsForPreview);

	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...collectionProps }) => (
				<CollectionPreview key={id} {...collectionProps} />
			))}
		</CollectionsOverviewContainer>
	);
};

export default CollectionsOverview;
