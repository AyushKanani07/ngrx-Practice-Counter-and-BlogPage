import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterModel } from "../../counter.interface";

const getcounterstate = createFeatureSelector<counterModel>('counter');

export const getcounter = createSelector(getcounterstate, (state) => {
    return state.counter;
})

export const getchannel = createSelector(getcounterstate, (state) => {
    return state.channelname;
})