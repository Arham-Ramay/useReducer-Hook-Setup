import React, { useReducer } from 'react'

export default function UseReducer() {
    let initialState=0;
    const reducer=(state,action)=>{
        if(action.type==="INCREMENT"){
            return state+1;
        }
        else if(action.type==="DECREMENT"){
            return state-1;
        }
      
        
        // console.log(state,action);
        // return action.type === "INCREMENT" ? state + 1 : action.type === "DECREMENT" ? state - 1 : state;
        return state;
    }
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <h1>Learn UseReducer Hooks With Arham Ramay</h1>
    <h2>{state}</h2>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>

    </>
  )
}
