import { showFriends, receiveFriends, errorFriends } from "./friends";
import API from "../../utils/API";

export const fetchFriends = () => {
    return dispatch => {
        dispatch(showFriends());
        return API.findAllFriends()
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw response.error;
                }
                dispatch(receiveFriends(response));
            })
            .catch(error => {
                dispatch(errorFriends(error));
            });
    };
};
