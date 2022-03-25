import React, { useState , useContext} from "react";
import { questions } from "./data";
import {Button} from "react-bootstrap";
import {Number} from "./Quiz";

type Props = {
    number: number;
}

const Choice: React.FC<Props> = (props) => {
    const [show, setShow] = useState(false);
    const [tfNumber, setTfNumber] = useState(0);
    const { number, setNumber } = useContext(Number);


    const Judgment = () => {
        if (show) {
            if (questions[props.number][tfNumber].tf === true) {
                return (
                    <div id="overlay" className="Judgement">
                        <p className='Title'>correct</p>
                        <button
                            //key={val.answer}
                            className='modal__closeBtn'
                            title="close"
                            onClick={() => {
                                setShow(false);
                                setTfNumber(0);
                                if(number==9){
                                    setNumber(0)
                                }else{setNumber(number+1)}
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
                        <p className='Title'>wrong</p>
                        <p className='answer'>The correct answer is...{questions[props.number][5].answer}</p>
                        <p className='commentary'>{questions[props.number][6].commentary}</p>
                        <button
                            //key={val.answer}
                            className='modal__closeBtn'
                            title="close"
                            onClick={() => {
                                setShow(false);
                                setTfNumber(0);
                                if(number==9){
                                    setNumber(0)
                                }else{setNumber(number+1)}
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
                <Button
                    //key={val.answer}
                    className='choice'
                    title="a"
                    onClick={() => { setShow(true); setTfNumber(tfNumber + 1); }}
                >
                    {questions[props.number][1].choice}
                </Button>
                <Button
                    //key={val.answer}
                    className='choice'
                    title="b"
                    onClick={() => { setShow(true); setTfNumber(tfNumber + 2); }}
                >
                    {questions[props.number][2].choice}
                </Button>
                <Button
                    //key={val.answer}
                    className='choice'
                    title="c"
                    onClick={() => { setShow(true); setTfNumber(tfNumber + 3); }}
                >
                    {questions[props.number][3].choice}
                </Button>
                <Button
                    //key={val.answer}
                    className='choice'
                    title="d"
                    onClick={() => { setShow(true); setTfNumber(tfNumber + 4); }}
                >
                    {questions[props.number][4].choice}
                </Button>
            </div>
            <Judgment />
        </>
    );
}

export default Choice;