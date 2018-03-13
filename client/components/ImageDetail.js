//Image Detail
import React from 'react';
import ImageScore from './ImageScore';

const ImageDetail = (props) => {
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.image.link} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.title}
                </h4>
            </div>
            <p>{props.image.description}</p>
            <ImageScore ups={props.image.ups} downs={props.image.downs}/>
        </li>
    );
};

export default ImageDetail;