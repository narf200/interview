import s from "../QuestionList/QuestionList.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import {increment, decrement}  from "../../toolkitRedux/toolkitSlice";

const QuestionList = ({questions}) => {

    const dispatch = useDispatch()

    return(
        <div className={s.question}>
            {questions.map((question)=>
                (<div className={s.q1} key={question.id}>
                    <h3>{question.text}</h3>
                    <button className={s.button_left} onClick={() => dispatch(increment())}> да </button>
                    <button className={s.button_right} onClick={() => dispatch(decrement())}> нет </button>
                </div>)
            )}
        </div>
    )
}

export default QuestionList
