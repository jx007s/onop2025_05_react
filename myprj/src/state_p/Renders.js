import {useState} from 'react';

let name1 = 'aaa'

let no = 1

let arr = [10,20]

let mem = {pname:'장동건', age:52, gender:'m'}

function Renders(props) {

    let name2 = 'bbb'   // setState에 의한 setName4() 실행 시 다시 선언하게 됨


    const [name4, setName4] = useState("ddd")
    //    변수명,  대입변수명(setter)     초기값

    const [name5, setName5] = useState(props.nn5)  // props를 setState로 대입하여 사용

    const [sno, setSno] = useState(no)

    const [sarr, setSarr] = useState(arr)

    const [smem, setSmem] = useState(mem)



    const changeName1=()=>{
        name1 = '바뀐aaa'
        mylog()
    }

    const changeName2=()=>{
        name2 = '바뀐bbb'
        mylog()
    }

    const changeName3=()=>{
        //props.name3 = '바뀐ccc'   props는 읽기 전용 , 변경시 에러발생
        mylog()
    }
    const changeName4=()=>{
        setName4('바뀐ddd')     // 화면갱신 --> function Renders(props) {} 를 다시 실행
                                //              함수안에 있는 지역변수 let name2 = 'bbb' 를 다시 선언
        mylog()
    }

    const changeName5=()=>{
        setName5('바뀐eee')     // 화면갱신 --> function Renders(props) {} 를 다시 실행
                                //              함수안에 있는 지역변수 let name2 = 'bbb' 를 다시 선언
        mylog()
    }

    const addSno=()=>{
        
        //sno++   에러
        setSno(sno+1) 
    }

    const addSarr=()=>{
  
        // ... 기존의 배열 원소들을 각각 1개씩 나열
        setSarr([...sarr,30]) 
        console.log(sarr)
    }

    const changeSmem=()=>{
  
        // ... 기존의 배열 원소들을 각각 1개씩 나열
        // 기존 원소 gender -  대입
        // 새로운 원소 height - 추가
        setSmem({...smem,  gender:'f', height:183.7 } ) 
        console.log(smem)
    }

    function mylog(){
        console.log(`name1 : ${name1}`)
        console.log(`name2 : ${name2}`)
        console.log(`name3 : ${props.name3}`)
        console.log(`name4 : ${name4}`)
        console.log(`name5 : ${name5}`)
    }

    //최초실행시 1회 실행 - 리로딩시 다시 실행
    //mylog()

    return (
        <div>
           <h1>Renders 이지롱</h1> 
           name : {name1} , {name2}  , {props.name3} , {name4}, {name5}
           <button onClick={changeName1}>name1변경</button>
           <button onClick={changeName2}>name2변경</button>
           <button onClick={changeName3}>name3변경</button>
           <button onClick={changeName4}>name4변경</button>
           <button onClick={changeName5}>name5변경</button>
           <br/>

           sno : {sno} <button onClick={addSno}>sno 증가</button>
           <br/>
            sarr : {sarr} <button onClick={addSarr}>sArr 증가</button>
           <br/>
          smem :  {/* {smem} 에러발생 */} 
           {smem.pname}, {smem.age}, {smem.gender} , {smem.height} 
           <button onClick={changeSmem}>smem 변경</button>
           <br/>
        </div>
    );
}

export default Renders;