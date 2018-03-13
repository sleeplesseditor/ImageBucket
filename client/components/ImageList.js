//Image List Component
import React from 'react';
import ImageDetail from './ImageDetail';

const ImageList = (props) => {
    const RenderedImages = props.images.map(image =>
        <ImageDetail key={image.title} image={image} />
    );
    
    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

export default ImageList;