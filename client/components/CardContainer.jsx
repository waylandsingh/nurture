import React, { useState, useEffect } from "react";
import Card from './Card'


//dummy data for 1 card
const fakeTime = new Date()
const card1props = {
    name:'Kefir',
    lastFeedDate:fakeTime.toString(),
    nextFeedDate:fakeTime.toString(),
    feedInstructions:'blah blah',
    notes:'take good care of me',
    archived:false
}

export default props=>{
    // on load, want to retrieve the current cards from the database
    let [cards, setCards] = useState([card1props,{}])

    useEffect(()=>{
        fetch('/getCards')
        .then(response=>response.json())
        .then((data)=>{
            // console.log('use effect call',data)
            // render the overall number of cards from the returned data
            setCards([...cards,...data])
            console.log(cards)
        })

    },[])

    
    // for each of them, create a new card
    return <div className="card-container">
        <h2>Here is where the cards are rendered</h2>
        <button>click to add new baby</button>
        <Card {...card1props}/>
        {JSON.stringify(cards)}

    </div>
}