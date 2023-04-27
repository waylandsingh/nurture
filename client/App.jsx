import React, { Component, useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import AddCard from './components/AddCard';

const App = props => {
  let [cards, setCards] = useState([])
  let [showingAddCard, setShowingAddCard] = useState(false)
  // keep track of the count of cards: update this when the add/delete button is used
  let [cardAdded, setCardAdded] = useState(0)
    useEffect(()=>{
        fetch('/getCards')
        .then(response=>response.json())
        .then((data)=>{
            // console.log('use effect call',data)
            // render the overall number of cards from the returned data
            setCards([...data])

        })

    },[cardAdded]) // can also update this on changes to count (from delete, add?)

    return (
      <div className="flex sm:flex-col flex-col-reverse">
        
        
      
         <CardContainer cardList={cards}/>
      <div id="addCardForm" className="flex flex-col self-center">
        <button className="self-center" onClick={e=>{
          console.log('switch state')
          setShowingAddCard(!showingAddCard)
          }}>click to add new baby</button>
        {
        showingAddCard && 
        <AddCard cardAdded={cardAdded} setCardAdded={setCardAdded}/>}
        
        
      </div>
         
      </div>
    );
  };
  
  export default App;