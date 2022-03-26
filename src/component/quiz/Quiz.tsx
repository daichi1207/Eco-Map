import React from 'react';
import './quiz.css';
import Choice from './Choices'
import { useState, useEffect } from 'react';
import Question from "./Question";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Number = React.createContext(
    {} as {
        number: number
        setNumber: React.Dispatch<React.SetStateAction<number>>
    }
);

const Quiz: React.FC = () => {

    const [number, setNumber] = useState(0);
    const value = {
        number,
        setNumber,
    };

  return (
      <Number.Provider value={{ number, setNumber }}>
      <Question number={number} />
      <Choice number={number} />
      </Number.Provider>
  );
}

export default Quiz;
