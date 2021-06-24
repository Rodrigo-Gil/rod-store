const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl:'https://source.unsplash.com/zsITsssJ_9I/',
            id: 1,
            linkUrl:'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl:'https://source.unsplash.com/Hng0RpHDgHI/',
            id: 2,
            linkUrl:'shop/jackets'
        },
        {
            title: 'mens',
            imageUrl:'https://source.unsplash.com/r0l0Es5fbbs/',
            id: 3,
            linkUrl:'shop/mens'
        },
        {
            title: 'sneakers',
            imageUrl:'https://source.unsplash.com/SD9Jyl1xNQ4/',
            size: 'large',
            id: 4,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl:'https://source.unsplash.com/x9cXI2eQLBw/',
            size: 'large',
            id: 5,
            linkUrl:'shop/womens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer