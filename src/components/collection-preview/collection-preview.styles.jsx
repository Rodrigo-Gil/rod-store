import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
	cursor: pointer;
	font-size: 28px;
	margin-bottom: 25px;

	&:hover {
		color: grey;
	}
`;

export const PreviewItem = styled.div`
	display: flex;
	justify-content: space-between;
`;
