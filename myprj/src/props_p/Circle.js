import React from 'react';
import shape from './shape.css'

// 함수형 컴포넌트
 // props 를 매개변수로 받음
function Circle(props) {
    console.log(props)
    let area = props.r * props.r *3.14
    let border = props.r * 2 *3.14
    return (
        <div className='circle'>
            {area},{border}
        </div>
    );
}

export default Circle;