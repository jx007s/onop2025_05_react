import React from 'react';
import fr from './fruit.module.css'

function FruitOne(props) {

    console.log(props.fd,  props.no)

    //동적이미지 가져오기
    const imgSrc = require('../assets/fruit/aa'+props.no+'.jpg')
    return (
        <div className={fr.one}>
             <img src={imgSrc} />
            <div className={fr.title}>{props.fd.title}</div>
            <div className={fr.pr}>{props.fd.price}</div>
        </div>
    );
}

export default FruitOne;