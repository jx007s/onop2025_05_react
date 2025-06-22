import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams, useNavigate} from 'react-router-dom';

function BoardDetail(props) {

    const {id} = useParams()  // http://localhost:3000/BoardDetail/1  : 1 가져오기

    const navigate = useNavigate()

    const dispatch = useDispatch()
    
    const pp = useSelector(state => state.posts.find(post=> post.id == id))
    //  posts 항목 중에 id가 1인 항목 가져오기


    if(!pp){  //항목이 없으면 화면에 출력안함
        
        return <></>
    }


    function delGo(){
        console.log(`del 실행 ${pp.id}`)

        // 리듀서에 항목 제거
        dispatch({type:"DEL", deId:pp.id });

        navigate("/")        
    }

    return (
        <div>
            <h2>상세페이지</h2>
            <h3>{pp.title}</h3>
            <p>{pp.content}</p>
            <Link to="/">목록으로</Link>
            <Link to={`/BoardModify/${pp.id}`}>수정</Link>
            <button onClick={delGo}>삭제</button>
        </div>
    );
}

export default BoardDetail;