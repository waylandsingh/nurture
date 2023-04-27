import React, {useState} from "react";

export default props=>{
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...inputs })
        };

        event.preventDefault();
        // use  fetch HERE to create a post req to the right endpoint
        fetch('/addCard', requestOptions)
            .then(data=>{
                // console.log(inputs)
        props.setCardAdded(props.cardAdded + 1)
        // console.log('setcard added', props.cardAdded)
        setInputs({})
            })
        
      }

    // needs to be able to call the setState from the parent!
    return (
        <div className="self-center">
            <form onSubmit={handleSubmit}>
      <label>name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
        required
      />
      </label>
      <label>feeding interval(days):
        <input 
          type="number" 
          name="feedPeriodDays" 
          value={inputs.feedPeriodDays || ""} 
          onChange={handleChange}
          required
        />
        </label>
        <label>feeding instructions:
        <input 
          type="text" 
          name="feedInstructions" 
          value={inputs.feedInstructions || ""} 
          onChange={handleChange}
          required
        />
        </label>
        <label>notes:
        <input 
          type="text" 
          name="notes" 
          value={inputs.notes || ""} 
          onChange={handleChange}
        />
        </label>
        
        <input type="submit" />
    </form>
        </div>
    )
}