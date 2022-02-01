import { ActionTypes } from "../constants/action-types"

const initialState = {
    templates: [{
        id: 1,
        title: "Dipesh",
        category: "programmer"
    }]
}

export const templateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ALL_TEMPLATES:
            return state;
        default:
            return state;
    }
}