import React from 'react';

function ArrayMap() {
    const nums = [11,22,33,44,55];

    //방법1
    // let ret = [
    //             <div>{11}</div>
    //             <div>{22}</div>
    //             <div>{33}</div>
    //             <div>{44}</div>
    //             <div>{55}</div>
    //          ]
    
    
    //방법2 - push
    //let ret = []        //배열생성
    
    // for (let i = 0; i < nums.length; i++) {
    //     ret.push(<div>{nums[i]}</div>)  //배열안에 div 생성하여 넣기
    // }

   //방법3
   //map :  배열을 for문처럼 반복하여 새로운 배열을 생성
    let ret = nums.map((vv)=>(<div>{vv}</div>))

    console.log(ret)

    return (<div>{ret}</div>);


}

export default ArrayMap;