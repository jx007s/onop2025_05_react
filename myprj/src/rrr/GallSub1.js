import {useParams} from 'react-router-dom';

function GallSub1(props) {

    const data = useParams()

    return (
        <div>
            <h3>GallSub1 이지롱</h3>
            <div>gid : {data.gid}</div>
        </div>
    );
}

export default GallSub1;