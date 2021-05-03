import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'children',
                  imageUrl:'https://source.unsplash.com/kmi-tO1k7ZA/480x320',
                  id: 1,
                  linkUrl:'shop/children'
                },
                {
                  title: 'womens',
                  imageUrl:'https://source.unsplash.com/v72jY-UPyys/480x320',
                  id: 2,
                  linkUrl:'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl:'https://source.unsplash.com/IvOrTu727TE/480x320',
                  id: 3,
                  linkUrl:'shop/mens'
                },
                {
                  title: 'clearance',
                  imageUrl:'https://source.unsplash.com/49mCO5ZRQDk/800x490',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/clearance'
                },
                {
                  title: 'accessories',
                  imageUrl:'https://source.unsplash.com/D4jRahaUaIc/800x490',
                  size: 'large',
                  id: 5,
                  linkUrl:'shop/accessories'
                }
              ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )  
    }
}

export default Directory
