import React, { Component } from 'react';
import rr from './rect.module.css'

// 클래스형 컴포넌트
 // props 를 멤버변수로 받음
class Rectangle extends Component {
    render() {
        console.log(this.props)
        let area = this.props.ww * this.props.hh
        let border =eval(this.props.ww) + eval(this.props.hh) * 2

        return (
            <div className={rr.boxxx}>
                {area} , {border}
            </div>
        );
    }
}

export default Rectangle;