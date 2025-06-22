import React from 'react';

function GallSub2(props) {
    
    const imgSrc = require('../assets/gne2.jpg')

    return (
        <div>
            <h3>GallSub2 이지롱</h3>
            <img src={imgSrc} />
        </div>
    );
}

export default GallSub2;