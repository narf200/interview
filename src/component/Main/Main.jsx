import React, {useEffect, useState} from "react";
import s from "./Main.module.css"
import QuestionList from "../QuestionList/QuestionList";
import {Link} from "react-router-dom";
import { useSelector} from "react-redux";

const Main = (props) => {

     console.log(props)

    const counter = useSelector(state => state.toolkit.counter)



    // const [counter, setCounter] = useState(0)
    const [questions, setQuestions] = useState(null)
    const [khajits, setKhajits] = useState(null)
    // const [isPending, setIsPending] = useState(true)

    useEffect(()=> {
        fetch(' http://localhost:8000/questions')
            .then(res=> {
              return  res.json()
            }).then(data => {
            setQuestions(data)
        })
    },[])

    useEffect(()=> {
        fetch(' http://localhost:8000/khajits')
            .then(res=> {
              return  res.json()
            }).then(data => {
            setKhajits(data)
            console.log(data[0].description)
        })
    },[])




    const ROUGE = counter >= 5
    const WIZARD = counter >= 1 && counter <= 4
    const MERCHANT = counter <= -1 && counter >= -5
    const CATFUNNY = counter <= -6

    console.log(counter)
    console.log(ROUGE)
    console.log(WIZARD)
    console.log(MERCHANT)
    console.log(CATFUNNY)

   let showResOnClick = () => {

       switch (true) {
           case ROUGE:
               document.getElementById("rouge").hidden = false;
               break;
           case WIZARD:
               document.getElementById("wizard").hidden = false;
               break;
           case MERCHANT:
               document.getElementById("merchant").hidden = false;
               break;
           case CATFUNNY:
               document.getElementById("catfanny").hidden = false;
               break;
           default:
               console.log("Hello cat")
       }

   }



    return (
        <div className={s.mainItems}>
            {questions && <QuestionList questions={questions} />}

            {/*<div className={s.link}>*/}
            {/*    <Link to="/pollRezalt"><h2>Узнать какой я Каджит</h2></Link>*/}
            {/*</div>*/}

            <div className={s.button}>
                <button onClick={showResOnClick}>
                    <h2>Узнать какой я Каджит</h2>
                </button>
            </div>


            {/*<div className={s.result} >*/}
            {/*    {isPending && <div>Loading</div>}*/}
            {/*</div>*/}

            <div>
                {khajits && <div className={s.result} >
                    <div id={"rouge"} hidden="true">
                        <div>
                            <h2>{khajits[0].description}</h2>
                        </div>
                        <div>
                            <img src={khajits[0].image} alt=""/>
                        </div>
                    </div>

                    <div id={"wizard"} hidden="true">
                        <div>
                            <h2>{khajits[1].description}</h2>
                        </div>
                        <div>
                            <img src={khajits[1].image} alt=""/>
                        </div>
                    </div>

                    <div id={"merchant"} hidden="true">
                        <div>
                            <h2>{khajits[2].description}</h2>
                        </div>
                        <div>
                            <img src={khajits[2].image} alt=""/>
                        </div>
                    </div>

                    <div id={"catfanny"} hidden="true">
                        <div>
                            <h2>{khajits[3].description}</h2>
                        </div>
                        <div>
                            <img src={khajits[3].image} alt=""/>
                        </div>
                    </div>

                </div>}
            </div>





        </div>
    )
}

export default Main




// Сделать блоки в компанентах семантическими (навбар мейн и футер)

// пофиксить счетчик

// сделать два окна 1 начальная страница
// 2 страница с вопросами (модальное окно с результатом)


// По состоянию нажатий формируем что отрисуется в компоненте.
//     состояние == 7 рисуем такой-то
