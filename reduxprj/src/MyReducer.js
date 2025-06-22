// 실제 data
const myState = {
    //cnt 는 게시판에서 사용하지 않음
    cnt : 10,

    /// 게시판용
    posts:[
        {id:1, title:'첫제목', content:'첫번째 내용입니다.'},
        {id:2, title:'두제목', content:'두번째 내용입니다.'},
    ]
}


// 실제 data(myState) 를 처리하는 함수(action) 연결
function MyReducer(state = myState, action) {

    switch(action.type){   //함수타입(이름)

        
        case 'INCREMENT':/// 이건게시판에서 사용안함
            return {
                ...state, 
                cnt:state.cnt + 1}  // myState 의 cnt를 1 증가하여 리턴


        /// 여기서부터 게시판에서 사용
        case "ADD":   //action.nData 을 posts 배열에 추가
            return {
                ...state, 
                posts:[...state.posts, action.nData ]
            }

        case "DEL":  //posts 배열에서 action.deId 가 같지 않은 것만 posts 배열로 저장
                        //posts 배열에서 action.deId 항목만 제거

            console.log("DEL 진입", action.deId)
            return {
                ...state, 
                posts: state.posts.filter(pp => pp.id != parseInt(action.deId)  )}

        case "MODIFY": 

            console.log("MODIFY 진입", action.nData)
            return {
                ...state, 
                posts: state.posts.map(pp => pp.id == action.nData.id ? action.nData : pp  )}
                 //posts 배열에서 action.nData.id 가 같지 않은 것은 기존의 post로
                //                                 같은 것은 변경된 action.nData로 저장

        default:
            return state   // 기본값은 myState 리턴

    }
    
}
export default MyReducer;