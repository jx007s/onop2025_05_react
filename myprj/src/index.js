import React from 'react';
import ReactDOM from 'react-dom/client';
import TTTT from './App'  //외부 파일에서 요소가져오기

// function asdf(){
//   return React.createElement("h2",null, "asdf로 만들었지롱")
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.createElement(asdf)
 //React.createElement("h2",null, "난 직접썼지롱")
 React.createElement(TTTT)
);


