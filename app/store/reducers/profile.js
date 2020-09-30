import { SHOW_PROFILE, RECEIVE_PROFILE, ERROR_PROFILE } from "../actions/profile";

import API from "../../utils/API";

const initialState = {
    profile: null,
    isFetching: false,
    error: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROFILE:
            return {
                ...state,
                isFetching: true
            };
        case ERROR_PROFILE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case RECEIVE_PROFILE:
            return {
                ...state,
                isFetching: false,
                profile: action.profile
            };
        default:
            return state;
    }
};

export default profileReducer;
