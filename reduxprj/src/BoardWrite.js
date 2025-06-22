import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

let newId = 3  //새로운 게시물 id

function BoardWrite(props) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function submitGo(e){
        e.preventDefault()
        
        // 리듀서에 항목 추가
        dispatch({type:"ADD", nData:{ id:newId++, title:title, content:content } })

        navigate('/')   //목록 페이지로 이동
    }

    return (
        <div>
            <h2>글쓰기</h2>
            <form onSubmit={submitGo}>
                <legend>
                    <label>제목</label>
                    <input type='text' placeholder='제목이야' defaultValue={title}
                    onChange={(e)=> setTitle(e.target.value)}></input>
                </legend>
                <legend>
                    <label>내용</label>
                    <textarea 
                    onChange={(e)=> setContent(e.target.value)}>{content}</textarea>
                </legend>
                <input type='submit' value="작성"/>

            </form>
        </div>
    );
}

export default BoardWrite;