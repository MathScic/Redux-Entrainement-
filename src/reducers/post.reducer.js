import { ADD_POST, GET_POSTS } from "../actions/post.action";

const  initState= {  } ;

export default function postReducer(state = initState, action) {
    switch (action.type) {
        case GET_POSTS: 
            return action.payload; 

        default: 
        return state
    }
}