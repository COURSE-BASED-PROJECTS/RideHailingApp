import { SET_START, SET_DES, SET_TRAVEL_INFO } from "./constants";

const initState = {
    start: {},
    des: {},
    travelInformation: {},
};

const travelReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_START:
            return {
                ...state,
                start: action.payload,
            };
        case SET_DES:
            return {
                ...state,
                des: action.payload,
            };
        case SET_TRAVEL_INFO:
            return {
                ...state,
                travelInformation: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default travelReducer;
export {initState}
