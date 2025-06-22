import {useParams} from 'react-router-dom';

function Member(props) {

    const data = useParams()
    return (
        <div>
            <h2>Member 이지롱</h2>
            <div>mid : {data.mid} </div>
        </div>
    );
}

export default Member;