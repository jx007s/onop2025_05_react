import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function BoardList(props) {
    const posts = useSelector(state => state.posts)
   
    return (
        <div>
            <h2>목록페이지</h2>
            <ul>
                {posts.map(
                    post=>(<li key={post.id}>
                                <Link to={`/BoardDetail/${post.id}`}>{post.title}</Link>
                            </li>)
                )}

            </ul>
            <Link to="/BoardWrite">글쓰기</Link>
        </div>
    );
}

export default BoardList;