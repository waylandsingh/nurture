import React, { useState, useEffect } from "react";
import Card from './Card'


//dummy data for 1 card
const fakeTime = new Date()
const card1props = {
    name:'Kefir',
    lastFeedDate:fakeTime.toString(),
    nextFeedDate:fakeTime.toString(),
    feedInstructions:'blah blah',
    notes:'use quality milk products',
    archived:false
}

export default props=>{
    // on load, want to retrieve the current cards from the database
    console.log(props)

    let cardComponents = props.cardList.map(card=>{
        return <Card {...card} key={card._id} />
    })

    
    // for each of them, create a new card
    return <div className="card-container text-green-700 flex flex-col sm:flex-row overflow-auto">
        
        {cardComponents}
        

    </div>
}