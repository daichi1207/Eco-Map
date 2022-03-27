import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Learn from './component/learn/Learn';
import Selector from './component/learn/Selector';
import Goal from './component/learn/Goal';
import Quiz from './component/quiz/Quiz'
import './component/learn/style/App.css'
import Home from "./component/home/Home";

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: 'rgb(255,253,250)' }}>
      <BrowserRouter>
        <Selector />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Learn/:id" element={<Goal />} />
          <Route path="/Map" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
