import {useState, useEffect} from 'react';
import stst from './clock.module.css'

function EffectClock(props) {

    const [sec, setSec] = useState(new Date().getSeconds())
    const [minn, setMinn] = useState(new Date().getMinutes())
    const [hour, setHour] = useState(new Date().getHours()%12)

    // 밀리초 간격으로 함수 실행
    //setInterval( 함수  ,밀리초 )

    //갱신시 계속 실행함
    // const timer = setInterval(()=>{
    //     setSec(sec+1)
    // },1000)
    // //종료시키면 아예 실행을 안함
    // clearInterval(timer)

    useEffect(()=>{
        const timer = setInterval(()=>{
            //시
            //분
            //console.log(hour)
            setHour(new Date().getHours()%12)
            setMinn(new Date().getMinutes())
            setSec(new Date().getSeconds())  //초
        },1000)
        

        //cleanup ::  화면 종료시에 실행 -->  timer종료
        return ()=>{clearInterval(timer)}
    },[])
    let hourDeg = hour * 30
    let minnDeg = minn * 6
    let secDeg = sec * 6
    return (
        <div className={stst.wrapper}>
            <div className={stst.hour}  style={{transform: `rotate(${hourDeg}deg)`}}/>
            <div className={stst.minn}  style={{transform: `rotate(${minnDeg}deg)`}}/>
           <div className={stst.sec}  style={{transform: `rotate(${secDeg}deg)`}}/>
        </div>
    );
}

export default EffectClock;