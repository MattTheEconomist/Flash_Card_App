import React, { Component } from 'react';
import {useState} from 'react'; 
import Card from './flashCard.jsx'


export default function CardForm(){
    const [cards, setCards] = useState([{id:1,
                                        question: "What's the Capital of Vermont?", 
                                        answer: "Montpelier"}])
    const[question, setQuestion] = useState("")
    const[answer, setAnswer] = useState("")

    function handleSubmitForm(e){
        e.preventDefault()
        setCards([...cards, {
            id: cards.length +1, 
            question: question, 
            answer: answer
        }])
        setQuestion("")
        setAnswer("")
        
    }

    function handleDel(id){
        setCards(cards.filter(card=>card.id !==id))

    }


    return <>
    <div className="formArea"> 
        <form className="form" onSubmit={handleSubmitForm}>
            <input type="text" id="question-text" className="formElement"
            value={question} placeholder="enter question" 
            onChange={e=>setQuestion(e.target.value)}/>

            <input type="text" id="answer-text" className="formElement"
            value={answer} placeholder="enter answer" 
            onChange={e=>setAnswer(e.target.value)}/>

            <button type="submit"  id="submitBtn">Add Card!</button>
        </form>
    </div>
    <div className="cardArea">
        <ul className="cardList">
            {cards.map(card=> <li key={card.id}>
                <Card details={card}/>
                <button id="delBtn" onClick={()=>handleDel(card.id)}>Delete</button>
            </li>)}
            
        </ul>

    </div>


    </>

}