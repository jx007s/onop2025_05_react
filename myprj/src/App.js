// import MyCom from "./basic/Calc";
// import Stud from "./basic/Stud";
// import ArrayMap from "./basic/ArrayMap";
// import Diary from "./basic/Diary";
// import Comp from "./basic/Comp";
// import PropApp from "./props_p/PropApp";
// import FruitList from "./props_p/FruitList";
// import Renders from "./state_p/Renders";
// import Frm from "./form_p/Frm";
// import FrmVal from "./form_p/FrmVal";
// import EffectGo from "./state_p/EffectGo";
 import EffectClock from "./state_p/EffectClock";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HHHome from "./rrr/HHHome";
import TopMenu from "./rrr/TopMenu";
import Member from "./rrr/Member";
import About from "./rrr/About";
import Gallery from "./rrr/Gallery";
import GallSub1 from "./rrr/GallSub1";
import GallSub2 from "./rrr/GallSub2";
import SubRoute from "./rrr/SubRoute";
import Notice from "./rrr/Notice";
import NoticeDetail from "./rrr/NoticeDetail";
import PageFour from "./rrr/PageFour";

function Product(){

  return (
    <div>
        <h2>난 제품이야</h2>
        <p>그놈품보단 낫지?</p>
    </div>
  )
}



function App() {
  return (

    //리턴 요소는 1개이어야 한다.
    <BrowserRouter>
      {/* 

      첫째날
      <h1>와 App.js 다</h1>
      <h2>h2 이지롱</h2>
      <MyCom />
      <Stud/> 
      <ArrayMap/>
      <Diary/>
      <Comp/>
      <PropApp/>
      <FruitList/>

      둘째날  
    
    <Renders name3="ccc" nn5="eee" />
    <Frm/>
    <FrmVal/>
    <EffectGo/>    
    <EffectClock/>

    셋째날  
     */}
    <EffectClock/>
    <TopMenu/>

        <Routes>
          <Route path="/" element={ <HHHome/> } />
          <Route path="/pro" element={ <Product/> } />
          <Route path="/mem/:mid" element={ <Member/> } />
          <Route path="/About" element={ <About/> } />
          <Route path="/Gallery" element={ <Gallery/> } >
            <Route path="s1/:gid" element={ <GallSub1/> }/>
            <Route path="simg" element={ <GallSub2/> }/>
          </Route>

          <Route path="/Notice/Detail" element={ <NoticeDetail/> } />
          <Route path="/Notice*" element={ <Notice/> } />
          

          {/* /Notice,  /Notice/sadfadsf 접근가능
              /Noticeasdf 불가

              /Notice/Detail 등 명시적 route 가 우선순위를 가짐
          */}

          <Route path="/*" element={ <PageFour/> } />
        </Routes>

      <SubRoute/>
      {/* 라우트 되어 있는 하위 컴포넌트 결합 */}

    </BrowserRouter>
  );
}

export default App;
