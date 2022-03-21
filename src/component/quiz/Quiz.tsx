import React from 'react';
import './stylesheet.css';
import Choice from './Choices'
import { useState, useEffect } from 'react';
import Question from "./Question";
import { questions } from "./data";

const Quiz: React.FC = () => {

  const number = Math.floor(Math.random() * 2);

  return (
    <div>
      <Question number={number} />
      <Choice number={number} />
    </div>
  );
}

export default Quiz;
