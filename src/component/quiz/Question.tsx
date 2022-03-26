import React, { useEffect, useState } from 'react';
import { questions } from "./data";

type Props = {
    number: number;
}

const Question: React.FC<Props> = (props) => {
    return (
        <div className='question-container'>
            <p className='Title'>Quiz</p>
            <p className= 'question_sentence'>{questions[props.number][0].sentence}</p>
        </div>
    );
}

export default Question;