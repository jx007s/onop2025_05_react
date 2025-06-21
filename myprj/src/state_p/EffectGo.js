import {useState, useEffect} from 'react';

function EffectGo(props) {

    //state
    const [cnt, setCnt] = useState(0)
    const [pname, setPname] = useState("원빈")
    const [age, setAge] = useState(45)

    useEffect(()=>{
        //렌더링시 자동호출
        console.log("useEffect 실행1")
    })

    useEffect(()=>{
        //최초 렌더링시 1회호출
        console.log("useEffect 실행2")
    },[])

    useEffect(()=>{
        //특정 state 변경시 실행
        console.log("useEffect 실행3 : pname, cnt")
    },[pname, cnt])

    useEffect(()=>{
        //특정 state 변경시 실행
        console.log("useEffect 실행4 : age")
    },[age])

    function onPname(e){
        setPname(e.target.value)
    }

    return (
        <div>
            <h1>EffectGo 실행</h1>
            <p>cnt : {cnt}</p>
            <p>pname : <input value={pname} onChange={onPname} /></p>
            <p>age : <input value={age} onChange={ (e)=>setAge(e.target.value) }/></p>
            <button onClick={()=>setCnt(cnt+1)}>카운트증가</button>
        </div>
    );
}

export default EffectGo;