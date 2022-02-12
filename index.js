import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Data from "./components/picture"
// import HooksPreview from "./Hooks/example1"
// import HookCounter from "./Hooks/example2"
// import HookCounter3 from "./Hooks/example3"
// import EffectsDemo from "./Hooks/example4"
// import EffectsDemo1 from "./Hooks/example5"
// import ClickCounter from "./Hoc/counter"
// import HoverCounter from "./Hoc/HoverCounter"
import ParentComp from "./purememo/pureComp"
// import RegularComp from "./purememo/RegComp"
// import PureComp from "./purememo/pureComp"


// ReactDOM.render(
//   <React.StrictMode>
//     <ParentComp/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Data/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
