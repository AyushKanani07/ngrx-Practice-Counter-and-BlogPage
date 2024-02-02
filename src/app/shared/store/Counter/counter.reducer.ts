import { createReducer, on } from "@ngrx/store";
import { changechannelname, customIncrement, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state";


export const _counterReducer = createReducer(initialState, 
    on(increment, (state)=> {
    return{
        ...state,
        counter: state.counter + 1
    };
    }),
    on(decrement, (state) => {
        return{
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return{
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: action.action=='add'?state.counter+action.value: action.action=='remove'?state.counter-action.value:state.counter
        }
    }),
    on(changechannelname, (state, action) => {
        return{
            ...state,
            channelname: action.value
        }
    })
)

export function counterReducer(state:any, action:any) {

    return _counterReducer(state, action);
}


// export const initialState: CounterState = {
//     count: 0,
//   };
  
//   export const counterReducer = createReducer(
//     initialState,
//     on(increment, (state) => ({ count: state.count + 1})),
//     on(decrement, (state) => ({ count: state.count - 1})),
//     on(reset, (state) => ({ count: 0 }))
//   );