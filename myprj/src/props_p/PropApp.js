import React from 'react';

import Circle from './Circle';
import Rectangle from './Rectangle';

function PropApp() {

    //반지름 배열
    const rrs =  [7,9,2,4,8]
    //반지름 배열을 이용하여 circle 컴포넌트배열 생성
    const circles = rrs.map((vv)=><Circle r={vv} />)

    return (
        <div>
            <h1>PropApp 입니다.</h1>
            <Circle r='5' />
            <Circle r='10' />
            <Rectangle ww='5' hh='6'/>
            <Rectangle ww='10' hh='20'/>
            {circles}
        </div>
    );
}

export default PropApp;