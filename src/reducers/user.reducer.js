import { GET_USERS } from "../actions/user.action";

const initState = {  } ;

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case GET_USERS: 
            return action.payload;
        default: 
        return state 
    } 
}