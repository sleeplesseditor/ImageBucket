//Image List Component
import React, { Component } from 'react';
import ImageDetail from './ImageDetail';

const IMAGES = [
    { title: 'Pen', link: 'https://dummyimage.com/600x400' },
    { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
    { title: 'Mug', link: 'https://dummyimage.com/600x400' },
];

class ImageList extends Component {
    render() {
        const RenderedImages = IMAGES.map(image =>
            <ImageDetail key={image.title} image={image} />
        );
        return (
            <ul className="media-list list-group">
                {RenderedImages}
            </ul>
        );
    }  
};

export default ImageList;