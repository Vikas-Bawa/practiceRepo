import React, { useReducer, useState } from 'react'

function UseReducer() {
    const initialState = 0;
    // const delValue = 1;
    const [delValue,setDelValue] = useState(null);
    const persons = [
        {
            name: 'Rahul',
            age: 24
        },
        {
            name: 'Ramesh',
            age: 44
        },
        {
            name: 'Virat',
            age: 26
        },
    ]
    const newPerson = {
        name: 'Anurag',
        age: 30
    }
    const [state, dispatch] = useReducer(reducer, persons)
    console.log('state' ,state);
    function reducer(state, action) {
        // if(action.type === 'INCREMENT'){
        //     state = state + 1;
        // }
        // else if(action.type === 'DECREMENT'){
        //     state = state - 1;
        // }
        // else{
        //     state = 0;
        // }
        // state = (action.type === 'ADD')?state.push({name: 'Aditya',age: 21}): state.pop();
        // console.log(state, action.type);
        // return state;
        switch (action.type) {
            case 'ADD': {
                state = [...state, newPerson]
                // state.push(newPerson);
                console.log('first : ', state, action);
                return state;
            }
            case 'DEL': {
                if(action.value == null){
                    alert('Enter some value first')
                    return state;
                }
                else if(action.value >= state.length){
                    alert('Enter valid number...')
                }
                let copy = state.filter((ele, index) => {
                    return index !== +action.value;
                });
                console.log('second : ', state, action);
                return copy;
            }
        }
    }
    return (
        <div>
            {/* <h1>{state}</h1> */}
            {state.map((person, index) => {
                return <p key={index}>{person.name} {person.age}</p>
            })}
            <div className='container'>
                {/* <button onClick={()=>dispatch({type: "INCREMENT"})}>Inc</button>
        <button onClick={()=>dispatch({type: 'DECREMENT'})}>Dec</button>
        <button onClick={()=>dispatch({type: 'RESET'})}>Reset</button> */}
                <button onClick={() => dispatch({ type: "ADD" })}>Add</button><br /><br />
                <div>
                    <input type="text" onChange={(e)=>setDelValue(e.target.value)}/>
                    <button onClick={() => dispatch({ type: 'DEL', value: delValue })}>Del</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
