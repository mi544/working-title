import { SHOW_FRIENDS, RECEIVE_FRIENDS, ERROR_FRIENDS } from "../actions/friends";

import API from "../../utils/API";

const initialState = {
    friends: [],
    isFetching: false,
    error: false
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FRIENDS:
            return {
                ...state,
                isFetching: true
            };
        case ERROR_FRIENDS:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case RECEIVE_FRIENDS:
            return {
                ...state,
                isFetching: false,
                friends: action.friends
            };
        default:
            return state;
    }
};

export default friendsReducer;
