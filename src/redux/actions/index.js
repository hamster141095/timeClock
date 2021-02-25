import { SET_TIME_ZONE, SET_ANOTHER_TIME_ZONE } from "../types.js";

export const setTimeZone = (timeZone) => ({
    type: SET_TIME_ZONE,
    payload: timeZone,
});

export const setAnotherTimeZone = (anotherTimeZone) => ({
    type: SET_ANOTHER_TIME_ZONE,
    payload: anotherTimeZone,
});
