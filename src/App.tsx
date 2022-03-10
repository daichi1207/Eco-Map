import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/learn/LearnHome';
import Selector from './component/learn/Selector';
import Learn from './component/learn/Learn';
import './component/learn/style/*.css'

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: 'rgb(255,253,250)' }}>
      <BrowserRouter>
        <Selector />
        <Routes>
          <Route index element={<Main />} />
          <Route path="LearnHome" element={<Main />} />
          <Route path="Learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
