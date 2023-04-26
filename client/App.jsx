import React, { Component, useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';

const App = props => {
  let [cards, setCards] = useState([])
  // keep track of the count of cards: update this when the add/delete button is used

    useEffect(()=>{
        fetch('/getCards')
        .then(response=>response.json())
        .then((data)=>{
            // console.log('use effect call',data)
            // render the overall number of cards from the returned data
            setCards([...cards,...data])

        })

    },[]) // can also update this on changes to count (from delete, add?)

    return (
      <div className="Application Container">
        <button>click to add new baby</button>
        <CardContainer cardList={cards}/>
      </div>
    );
  };
  
  export default App;