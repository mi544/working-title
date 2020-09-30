import { showProfile, receiveProfile, errorProfile } from "./profile";
import API from "../../utils/API";

export const fetchProfile = () => {
    return dispatch => {
        dispatch(showProfile());
        return API.findProfile()
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw response.error;
                }
                dispatch(receiveProfile(response));
            })
            .catch(error => {
                dispatch(errorProfile(error));
            });
    };
};
