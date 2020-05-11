import React from 'react';

import '../styles/content_item.css';

const ContentItem = ({item}) => {
    return (
        <div className="content-item">
            <img src={ process.env.PUBLIC_URL + "../images/Thumbnail.png" } alt="" className="content-image"></img>
            <h3 className="content-title">{item.title}</h3>
            <p className="content-description">{item.description}</p>
            <p className="content-read" onClick={() => console.log("read more")}>Read more...</p>
        </div>
    )
}

export default ContentItem;