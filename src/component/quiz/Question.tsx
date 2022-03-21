import React, { useEffect, useState } from 'react';
import { questions } from "./data";

type Props = {
    number: number;
}

const Question: React.FC<Props> = (props) => {
    return (
        <div className='question-container'>
            <h1>Quiz</h1>
            <h2>{questions[props.number][0].sentence}</h2>
        </div>
    );
}

export default Question;