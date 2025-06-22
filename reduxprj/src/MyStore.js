import {createStore} from 'redux'
import MyReducer from './MyReducer'


// store 생성 <== MyReducer 를 기반으로 생성
const MyStore = createStore(MyReducer)

//생성한 store 를 사용
export default MyStore