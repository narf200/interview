import  React, {useState} from "react";
import s from "./Main.module.css"

const Main = (props) => {

    // console.log(props)

    const [counter, setCounter] = useState(0)

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

    const increment = () => {
       return setCounter(counter + 1)
    }

    const decrement = () => {
           return setCounter(counter - 1)
        }


    return (
        <div className={s.mainItems}>
            <div className={s.question}>
                <div className={s.q1}>
                    Ты любишь золото ?
                    <input type="checkbox" onClick={increment}/> да
                    <input type="checkbox" onClick={decrement} /> нет
                </div>
                <div className={s.q1}>
                    Хочешь красивые сапоги бесплатно ?
                    <input type="checkbox" onClick={increment}/> да
                    <input type="checkbox" onClick={decrement} /> нет
                </div>
                <div className={s.q1}>
                    Любишь странствовать на легке ?
                    <input type="checkbox" onClick={increment}/> да
                    <input type="checkbox" onClick={decrement} /> нет
                </div>
                <div className={s.q1}>
                    Часто гуляешь тёмной ночью ?
                    <input type="checkbox" onClick={increment}/> да
                    <input type="checkbox" onClick={decrement} /> нет
                </div>
                <div className={s.q1}>
                    Издали слышишь звон монет ?
                    <input type="checkbox" onClick={increment}/> да
                    <input type="checkbox" onClick={decrement} /> нет
                </div>
                <div className={s.q1}>
                    Возьмёшь что плохо лежит ?
                    <input type="checkbox" onClick={increment}/> да
                    <input type="checkbox" onClick={decrement} /> нет
                </div>
            </div>

            <div className={s.button}>
                <button onClick={showResOnClick} >
                    Узнать
                </button>
            </div>

            <div className={s.result} >
                <div id={"rouge"} hidden="true">
                    <div>
                    {props.listKhajit[0].description}
                    </div>
                    <div>
                        <img src={props.listKhajit[0].image} alt=""/>
                    </div>
                </div>

                <div id={"wizard"} hidden="true">
                    <div>
                        {props.listKhajit[1].description}
                    </div>
                    <div>
                        <img src={props.listKhajit[1].image} alt=""/>
                    </div>
                </div>

                <div id={"merchant"} hidden="true">
                    <div>
                        {props.listKhajit[2].description}
                    </div>
                    <div>
                        <img src={props.listKhajit[2].image} alt=""/>
                    </div>
                </div>

                <div id={"catfanny"} hidden="true">
                    <div>
                        {props.listKhajit[3].description}
                    </div>
                    <div>
                        <img src={props.listKhajit[3].image} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main
