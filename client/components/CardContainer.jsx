import React, { useState } from "react";
import Card from './Card'


export default props=>{
    const fakeTime = new Date()
    // on load, want to retrieve the current cards from the database
    // [cards, setCards] = useState([])

    //dummy data for 1 card
    const card1props = {
        name:'Kefir',
        lastFeedDate:fakeTime.toString(),
        nextFeedDate:fakeTime.toString(),
        feedInstructions:'blah blah',
        notes:'take good care of me',
        archived:false
    }
    // for each of them, create a new card
    return <div className="card-container">
        <h2>Here is where the cards are rendered</h2>
        <button>click to add new baby</button>
        <Card {...card1props}/>

    </div>
}