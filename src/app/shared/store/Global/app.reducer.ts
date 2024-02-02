import { createReducer, on } from "@ngrx/store";
import { loadspinner } from "./app.action";
import { GlobalState } from "./global.state";

const _AppReducer = createReducer(GlobalState,

    on(loadspinner, (state, action) => {
        return {
            ...state,
            IsLoaded: action.isloaded
        }
    })


)

export function AppReducer(state: any, action: any) {
    return _AppReducer(state, action);

}