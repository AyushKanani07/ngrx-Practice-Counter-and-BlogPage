import { createAction, props } from "@ngrx/store";

export const increment = createAction("increment")
export const decrement = createAction("decrement")
export const reset = createAction("reset")


// export const increment = createAction('[Counter] Increment count');
// export const decrement = createAction('[Counter] Decrement count');
// export const reset = createAction('[Counter] Reset count');

export const customIncrement = createAction("customIncrement", props<{value: number, action: string}>())
export const changechannelname = createAction("rchangechannelname", props<{value: string}>())