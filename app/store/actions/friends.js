export const SHOW_FRIENDS = "SHOW_FRIENDS";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const ERROR_FRIENDS = "ERROR_FRIENDS";

export const showFriends = () => {
    return { type: SHOW_FRIENDS };
};

export const errorFriends = () => {
    return { type: SHOW_FRIENDS };
};

export const receiveFriends = friends => {
    return { type: RECEIVE_FRIENDS, friends: friends };
};
