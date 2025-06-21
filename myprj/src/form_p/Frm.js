import React from 'react';

function Frm(props) {
    return (
        <div>
           <h1>Form 예제</h1> 
           <form action='joinReg'>
                <legend>
                    {/* htmlFor = For */}
                    <label htmlFor="pid">아이디</label>
                    <input id="pid" name="mid" placeholder='아이디를 입력하세요'/>
                    <input type='button' value="중복확인" />
                </legend>
                
                <legend>
                    <label>암호
                        <input name="pw" type='password'></input>
                    </label>
                </legend>

                <legend>
                    {/* defaultValue = value */}
                    <input id="pname" name="mname" defaultValue="불주먹"/>
                    <label htmlFor="pname">이름</label>
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
                    <label>전화번호</label>
                    
                    <select name="tel1" defaultValue="016">
                        <option>010</option>
                        <option>011</option>
                        <option>016</option>
                        <option>017</option>
                        <option>018</option>
                        <option>019</option>
                    </select>
                    -
                    <input type='tel' name='tel2' maxLength='4' size='5' />
                    -
                    <input type='tel' name='tel3' maxLength='4' size='5'/>
                </legend>



                <legend>
                    <label htmlFor="birth">생일</label>
                    <input id="birth" name="birth" type='date' defaultValue='2002-06-02' min='2000-07-08' max='2015-11-02'/>
                </legend>

                <legend>
                    <label >기본주소</label>
                    <input name="addr1" defaultValue='창원집'  readOnly/><button>우편번호검색</button>
                                                    {/* botton 은 submit과 같은 기능 */}
                    <label >상세주소</label><input name="addr2"  type='text'/>
                </legend>

                <legend>
                    <label htmlFor="upfile">파일</label>
                    <input id="upfile" name="upfile" type='file'/>
                </legend>

                <legend>
                    <label htmlFor="content">남기실말</label>
                    <textarea id='content' name='content' rows={5} cols={50}>뿡야뿡야왕바우</textarea>
                </legend>

                <input type='reset' value='초기화'/>
                <input type='submit' value='가입'/>
           </form>
        </div>
    );
}

export default Frm;
