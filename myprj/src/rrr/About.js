import {useLocation} from 'react-router-dom';

function About(props) {

    const location = useLocation()

    return (
        <div>
            <h2>About</h2>   
                     {/* search : ?이후 parameter , # 이후의 anchor정보 제외  
                        pathname : 주소경로 :  ? 이전
                        hash : #이후 anchor정보
                        key : 객체(페이지) 고유값
                     */}
            <p>search : {location.search}</p>
            <p>pathname : {location.pathname}</p>
            <p>hash : {location.hash}</p>
            <p>state : {location.state}</p>
            <p>key : {location.key}</p>
        </div>
    );
}

export default About;