import {Outlet} from 'react-router-dom';

function Gallery(props) {
    return (
        <div>
           <h2>갤러리 이지롱</h2> 
           <Outlet/>
           {/* <Outlet/> 하위 컴포넌트 결합 */}
        </div>
    );
}

export default Gallery;