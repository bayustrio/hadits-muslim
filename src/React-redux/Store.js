import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// === ACTION TYPE ===
import { GET_SLUG } from "./Redux-action/Action";

const initState = {
    Data: [],
    slug: '',
    count: 1,
    dataSlug: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_SLUG:
            return {
                ...state,
                slug: action.payload.slug
            }
        case 'DATA_SLUG':
            return {
                ...state,
                dataSlug: action.payload.data
            }

        default:
            return state
    }
}


export const store = createStore(rootReducer, applyMiddleware(thunk));