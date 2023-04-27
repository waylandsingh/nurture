import React, {useState} from "react";

// track state to allow the form to toggle
// use a button to toggle the form from disabled to not
// style input underlines/boxes?

export default props =>{
    // use state to manage inputs
    const [inputs, setInputs] = useState({...props});
    const [formDisabled, setFormDisabled] = useState(true);

    // handle the change to input
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      };
    
    // form submission and fetch request to PUT updates
    const handleSubmit = (event) => {
      const requestOptions = {
          method: 'PUT', // edit this
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...inputs })
      };

      event.preventDefault();
      // use  fetch HERE to create a patch/put req to the right endpoint
      fetch('/editCard', requestOptions)
        .then(data=>{
          return data.json()
        })
        .then( data=>{
          setFormDisabled(true) // causing the form to autosubmit
          console.log(data[0]);
          setInputs(data[0])
        })
        .catch(e=>{
          console.log(e);
        })
      
    };
    // console.log(props) //hover:animate-bounce
    return <div className="card max-w-md rounded-sm shadow-lg m-2 ">
        
        <img className="w-full" src="./../images/pickles.jpg" alt="project photo"/>
        <form className="w-full" onSubmit={()=>{handleSubmit}} >
            <fieldset 
              className="flex flex-col space-y-6" 
              disabled={formDisabled}>
            <div className="font-bold text-xl mb-2"><label>
                <input 
                type="text" 
                name="name" 
                value={inputs.name || ""} 
                onChange={handleChange}
                required
                />
                </label>
            </div>

            <label>days between feeding:  
              <input 
                type="number" 
                name="feedPeriodDays" 
                value={inputs.feedPeriodDays || ""} 
                onChange={handleChange}
                required
                className="w-12"
              />
              </label>
              <div className="h-24">
                <label>care instructions:<br/>
                  <textarea 
                    name="feedInstructions" 
                    value={inputs.feedInstructions || ""} 
                    onChange={handleChange} 
                    className="w-full" 
                    rows="3" 
                    cols="40">
                  </textarea>
                </label>
              </div>
              
              <label>notes: 
                <textarea 
                  name="notes" 
                  value={inputs.notes || ""}
                  onChange={handleChange} 
                  className="w-full" 
                  rows="3" cols="40">
                </textarea>

              </label>
              {!formDisabled && <input type="submit" onClick={handleSubmit}/>}
            </fieldset>
        </form>
            <button onClick={()=>setFormDisabled(!formDisabled)}>enable edits</button>
        
        
        {/* <p>{props.name}</p> */}
        {/* <p>last fed: {props.lastFeedDate}</p>
        <p>next feed: {props.nextFeedDate}</p>
        <p>feeding notes: {props.feedInstructions}</p>
        <p>overall notes: {props.notes}</p>
        <p>archived? {props.archived?'archived':'active'}</p> */}
        
    </div>
}