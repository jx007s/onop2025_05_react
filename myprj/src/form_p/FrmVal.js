import React from 'react';

function FrmVal(props) {

    const mySubmit=(e)=>{
        e.preventDefault()  // 기본 폼 제출 막기
    }

    return (
        <div>
             <h1>FrmVal 예제</h1> 
           <form onSubmit={mySubmit}>
                <legend>
                    {/* htmlFor = For */}
                    <label htmlFor="pid">아이디</label>
                    <input id="pid" name="mid" placeholder='아이디를 입력하세요'/>
                    <input type='button' value="중복확인" />
                </legend>
                <legend>
                    성별 
                    <label htmlFor="m">남</label>
                    <input type='radio' value="남자" id="m" name="gender"/>
                    <label >여
                        <input type='radio' value="여자"  name="gender" checked/>
                    </label>
                    
                    <input type='radio' value="it인" id="it" name="gender"  checked/>
                    {/* 마지막 checked로 선택 */}
                    <label htmlFor="it">it인</label>
                </legend>
                <legend>
                    취미
                    <label htmlFor="coding">코딩</label>
                    <input type='checkbox' value="코딩" id="coding" name="hobby"/>
                    <label >디버깅
                        <input type='checkbox' value="디버깅" name="hobby"  checked/>
                    </label>
                    <label >프로그래밍</label>
                    <input type='checkbox' value="프로그래밍" name="hobby"  checked/>
                </legend>
                
                
                <legend>
                    <label htmlFor="email1">이메일</label>
                    <input id="email1" name="email1" type='email' />@
                    <select name="email2">
                        <option>네이버</option>
                        <option value="google.com" selected>구글</option>
                        <option value="nate.com" selected>네이트</option>
                        <option value="daum.net">다음</option>
                    </select>
                </legend>
                <legend>
                    <label htmlFor="birth">생일</label>
                    <input id="birth" name="birth" type='date' defaultValue='2002-06-02' min='2000-07-08' max='2015-11-02'/>
                </legend>

                <input type='reset' value='초기화'/>
                <input type='submit' value='가입'/>
           </form>
            
        </div>
    );
}

export default FrmVal;