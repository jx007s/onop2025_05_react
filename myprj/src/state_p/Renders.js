import {useState} from 'react';

let name1 = 'aaa'

function Renders(props) {

    const [name4, setName4] = useState("ddd")
    //    변수명,  대입변수명(setter)     초기값

    let name2 = 'bbb'

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

    function mylog(){
        console.log(`name1 : ${name1}`)
        console.log(`name2 : ${name2}`)
        console.log(`name3 : ${props.name3}`)
    }

    //최초실행시 1회 실행
    mylog()

    return (
        <div>
           <h1>Renders 이지롱</h1> 
           name : {name1} , {name2}  , {props.name3} , {name4}
           <button onClick={changeName1}>name1변경</button>
           <button onClick={changeName2}>name2변경</button>
           <button onClick={changeName3}>name3변경</button>
           <br/>
        </div>
    );
}

export default Renders;