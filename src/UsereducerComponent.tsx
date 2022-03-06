import { useReducer } from 'react'
import Button from '@mui/material/Button';


const initialState = {
    counter: 100,

}

type ACTIONTYPES = 
 | {type: "increment"; payload: number;}
 | {type: "decrement"; payload: number;};


 function counterReducer(state:typeof  initialState, action: ACTIONTYPES) {
     switch (action.type) {
         case "increment":
             return {
                 ...state,
                counter : state.counter + action.payload 
             }
             case "decrement":
             return {
                 ...state,
                counter :state.counter - action.payload 
             }
         default:
             throw new Error('bad action')
     }

 }

 function UsereducerComponent() {
     const [state, dispatch] = useReducer(counterReducer,initialState);
  return (
    <div>
        <div>{state.counter}</div>
        <div>
            <Button variant="contained"  color="primary" onClick={() => dispatch({
                type:"increment",
                payload:10,
            })}>increment</Button> |

             <Button variant="contained"  color="primary"  onClick={() => dispatch({
                type:"decrement",
                payload:5,
            })}>decrement</Button>
        </div>
    </div>
  )
}

export default UsereducerComponent;
