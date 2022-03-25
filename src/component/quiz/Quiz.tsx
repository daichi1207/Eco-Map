import React from 'react';
import './quiz.css';
import Choice from './Choices'
import { useState, useEffect } from 'react';
import Question from "./Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

const Quiz: React.FC = () => {

    const [number, setNumber] = useState(0);

  return (
    <div>
      <Question number={number} />
      <Choice number={number} />
        <Button onClick={()=>{
            if(number==9){
                setNumber(0)
            }else{setNumber(number+1)}
        }}
        className='next_quiz'>
            next
        </Button>
    </div>
  );
}

export default Quiz;
