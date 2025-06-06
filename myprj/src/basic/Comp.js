import React,{Component} from 'react';

import HH44 from "./HH44";  //함수형태 
import HH55 from "./HH55";  //클래스 형태 

//함수형태 컴포넌트
function HH22(){
    return <h2>난 함수형태 h2이지롱</h2>
}


//클래스형태 컴포넌트
class HH33 extends Component{
    render(){
        return <h3>난 클래스형태 h3이지롱</h3>
    }
}

function Comp() {
    return (
        <div>
            <h1>Comp여</h1>
            <HH22/>
            <HH33/>
            <HH22/>
            <HH22/>
            <HH44/>
            <HH55/>
        </div>
    );
}

export default Comp;