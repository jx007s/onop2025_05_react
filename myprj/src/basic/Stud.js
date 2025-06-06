import React from 'react';

function Stud() {
     /*
    국어,영어,수학 점수 나오고
    총점,평균 계산
    평균 수,우,미,양,가 출력
    
    */
    let pname = "장동건"
    let kor = 78, eng = 89, mat = 61
    let tot = kor + eng+ mat
    let avg = tot / 3
    let grade = ["가","가","가","가","가","가","양","미","우","수","수"][(tot - tot%30) / 30] 
    return (
        <div>
            <div>이름 : {pname}</div>
            <div>국어 : {kor}</div>
            <div>영어 : {eng}</div>
            <div>수학 : {mat}</div>
            <div>총점 : {tot}</div>
            <div>평균 : {avg}</div>
            <div>등급 : {grade}</div>
        </div>
    );
}

export default Stud;