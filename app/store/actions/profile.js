export const SHOW_PROFILE = "SHOW_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const ERROR_PROFILE = "ERROR_PROFILE";

export const showProfile = () => {
    return { type: SHOW_PROFILE };
};

export const errorProfile = () => {
    return { type: ERROR_PROFILE };
};

export const receiveProfile = profile => {
    return { type: RECEIVE_PROFILE, profile: profile };
};
