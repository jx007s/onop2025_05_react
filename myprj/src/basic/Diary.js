import React from 'react';
import './DDDiary.css'
import gne from '../assets/gne2.jpg'

function Diary() {
    const title = "일,월,화,수,목,금,토".split(",").map((vv)=><div className='box'>{vv}</div>)
    //console.log(title)
    for (let i = 0; i <4; i++) {
        title.push(<div className='box'></div>)
        
    }

    let now = 5;
    for (let i = 1; i <=31; i++) {
        let cn = 'box'

        // 클래스 지정 방식
        // if(i%7==4){
        //     cn+=' sun'
        // }
        // if(i%7==3){
        //     cn+=' sat'
        // }

        if(i==now){
            cn+=' now'
        }
        
        // 현재는 nth-of-type 사용
        title.push(<div className={cn}>{i}</div>)
        
    }


    return (
        <div className='wrapper'>
            <h1>2025년 5월</h1>
            {/* <img src='sn2.jpg'/> */}
            <img src={gne}/>
            <div >{title}</div>
        </div>
    );
}

export default Diary;