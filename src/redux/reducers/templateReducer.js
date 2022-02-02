import { ActionTypes } from "../constants/action-types"

const initialState = {
    templates: []
}

export const templateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TEMPLATES:
            return {...state, templates: payload };
        default:
            return state;
    }
};