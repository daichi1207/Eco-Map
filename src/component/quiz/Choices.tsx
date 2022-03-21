import React, { useState } from "react";
import { questions } from "./data";

type Props = {
    number: number;
}

const Choice: React.FC<Props> = (props) => {
    const [show, setShow] = useState(false);
    const [tfNumber, setTfNumber] = useState(0);

    const Judgment = () => {
        if (show) {
            if (questions[props.number][tfNumber].tf === true) {
                return (
                    <div id="overlay" className="Judgement">
                        <h1>correct</h1>
                        <button
                            //key={val.answer}
                            className='modal__closeBtn'
                            title="close"
                            onClick={() => {
                                setShow(false)
                            }}
                        >
                            close
                            </button>
                    </div>
                )
            }
            else {
                return (
                    <div id="overlay" className="Judgement">
                        <h1>wrong</h1>
                        <h2>The correct answer is...{questions[props.number][5].answer}</h2>
                        <h3>{questions[props.number][6].commentary}</h3>
                        <button
                            //key={val.answer}
                            className='modal__closeBtn'
                            title="close"
                            onClick={() => {
                                setShow(false)
                            }}
                        >
                            close
                        </button>
                    </div>
                )
            }
        } else {
            return null;
        }
    };

    return (
        <>
            <div className='choices-container'>
                <button
                    //key={val.answer}
                    className='choice'
                    title="a"
                    onClick={() => { setShow(true); setTfNumber(tfNumber + 1); }}
                >
                    {questions[props.number][1].choice}
                </button>
                <button
                    //key={val.answer}
                    className='choice'
                    title="b"
                    onClick={() => { setShow(true); setTfNumber(tfNumber + 2); }}
                >
                    {questions[props.number][2].choice}
                </button>
                <button
                    //key={val.answer}
                    className='choice'
                    title="c"
                    onClick={() => { setShow(true); setTfNumber(tfNumber + 3); }}
                >
                    {questions[props.number][3].choice}
                </button>
                <button
                    //key={val.answer}
                    className='choice'
                    title="d"
                    onClick={() => { setShow(true); setTfNumber(tfNumber + 4); }}
                >
                    {questions[props.number][4].choice}
                </button>
            </div>
            <Judgment />
        </>
    );
}

export default Choice;