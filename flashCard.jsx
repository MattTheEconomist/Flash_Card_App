import React, { Component } from 'react';
import {useState} from 'react';





function Card(props){

    const[showQ, setShowQ] = useState(true)
    const {details} = props

    function handelFlipCard(){
       setShowQ(!showQ)
    }

    function cardClass(showQ){
        let currentClass= "flashCard "
        if(showQ){
            return currentClass += "questionText"
        }return currentClass+= 'answerText'

    }

    function flipAreaClass(showQ){
        let currentClass = "flipBtnArea "
        if(showQ){
            return currentClass += "questionText"
        }return currentClass+= 'answerText'

    }
    


return(
    <div className={cardClass(showQ)} >
        <div className={showQ?'questionText':'hideThisSide'}>
            <h5 className="questionHeader">Question</h5>
            <h4>{details.question}</h4>
        </div>
        <div className={showQ?'hideThisSide':'answerText'}>
            <h5 className="answerHeader">Answer</h5>
            <h4>{details.answer}</h4>
        </div>
        <div
         className={flipAreaClass(showQ)}
         >
            <button onClick={handelFlipCard} id="flip">Flip Card</button>
        </div>

    </div>
)

}
 
export default Card;