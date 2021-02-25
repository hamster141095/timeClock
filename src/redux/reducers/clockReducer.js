import { SET_TIME_ZONE, SET_ANOTHER_TIME_ZONE } from "../types.js";

const initialValues = {
    timeZone: "Asia/Vladivostok",
    anotherTimeZone: "Europe/Moscow",
};

export default function ItemReducer(state = initialValues, action) {
    switch (action.type) {
        case SET_TIME_ZONE: {
            return { ...state, timeZone: action.payload };
        }
        case SET_ANOTHER_TIME_ZONE: {
            return { ...state, anotherTimeZone: action.payload };
        }

        default:
            return state;
    }
}
