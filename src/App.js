import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import MainContainer from "./component/Main/MainContainer";
import LeftPanel from "./component/LeftPanel/LeftPanel";
import RightPanel from "./component/RightPanel/RightPanel";

function App() {
  return (
      <div className="app-wrapper">
        <Header/>
        <LeftPanel />
        <div className="app-wrapper-content">
          <MainContainer/>
        </div>
          <RightPanel />
      </div>
  );
}

export default App;


