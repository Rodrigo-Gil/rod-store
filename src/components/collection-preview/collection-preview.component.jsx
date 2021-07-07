import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import { CollectionPreviewContainer, PreviewItem } from './collection-preview.styles';

const CollectionPreview = ({ title, items } ) => (
    <CollectionPreviewContainer>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <PreviewItem>
            {
                items.filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewItem>
    </CollectionPreviewContainer>
)

export default CollectionPreview