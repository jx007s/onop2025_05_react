import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function BoardModify(props) {

    const {id} = useParams()  // http://localhost:3000/BoardBoardModify/1  : 1 가져오기

    const navigate = useNavigate()

    const dispatch = useDispatch()
    
    const pp = useSelector(state => state.posts.find(post=> post.id == id))
    //  posts 항목 중에 id가 1인 항목 가져오기

    const [title, setTitle] = useState(pp.title)
    const [content, setContent] = useState(pp.content)


    if(!pp){
        
        return <></>
    }


    


    function submitGo(e){
        e.preventDefault()
        
        // 리듀서에 항목 수정

        dispatch({type:"MODIFY", nData:{ id:pp.id, title:title, content:content } });

        navigate(`/BoardDetail/${pp.id}`)   //목록 페이지로 이동
    }

    return (
        <div>
            <h2>글수정</h2>
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
                <input type='submit' value="수정"/>

            </form>
        </div>
    );
}

export default BoardModify;