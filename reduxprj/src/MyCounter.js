import {useDispatch, useSelector} from 'react-redux';

function MyCounter(props) {

    //Provider --> store={MyStore}  
    //             useSelector  --> state 로 결합
    const cnt = useSelector(state => state.cnt)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>MyCounter 이지롱</h2>
            <div> cnt : {cnt}</div>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>증가</button>
        </div>
    );
}

export default MyCounter;