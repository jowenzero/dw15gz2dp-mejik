import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/content_item.css';

const ContentItem = ({item}) => {
    return (
        <div className="content-item">
            <img src={ process.env.PUBLIC_URL + "../images/Thumbnail.png" } alt="" className="content-image"></img>
            <h3 className="content-title">{item.title}</h3>
            <p className="content-description">{item.description}</p>
            <Link to={`/article/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <p className="content-read">Read more...</p>
            </Link>
        </div>
    )
}

export default ContentItem;