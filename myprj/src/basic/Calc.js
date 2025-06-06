import React from "react";

//조건절
function MyCom(){
    /*
    국어,영어,수학 점수 나오고
    총점,평균 계산
    평균 수,우,미,양,가 출력
    
    */
    let ret = ''
    let jum = 88
    if(jum >= 80){
        ret = <div>합격</div>
    }else{
        ret = <div>불합격</div>
    }

    return ret
}

export default MyCom