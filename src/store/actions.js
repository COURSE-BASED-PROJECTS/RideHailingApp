import {SET_START, SET_DES, SET_TRAVEL_INFO} from './constants'

const setStart = (payload) =>{
    return{
        type: SET_START,
        payload
    }
}
const setDes = (payload) =>{
    return{
        type: SET_DES,
        payload
    }
}
const setTraveInfo = (payload) =>{
    return{
        type: SET_TRAVEL_INFO,
        payload
    }
}

export {setStart, setDes, setTraveInfo}