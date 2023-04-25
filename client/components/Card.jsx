import React from "react";

export default props =>{
    console.log(props)
    return <div className="card">
        <p>{props.name}</p>
        <p>last fed: {props.lastFeedDate}</p>
        <p>next feed: {props.nextFeedDate}</p>
        <p>feeding notes: {props.feedInstructions}</p>
        <p>overall notes: {props.notes}</p>
        <p>archived? {props.archived?'archived':'active'}</p>
        
    </div>
}