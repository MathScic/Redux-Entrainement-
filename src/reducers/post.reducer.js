import { ADD_POST, EDIT_POST, GET_POSTS } from "../actions/post.action";

const  initState= {  } ;

export default function postReducer(state = initState, action) {
    switch (action.type) {
        case GET_POSTS: 
            return action.payload; 
        case ADD_POST: 
            return [action.payload, ...state];
        case EDIT_POST: 
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post, 
                        content: action.payload.content,
                        title: "nouveau"
                    }
                } else return post; 
            })
        default: 
        return state
    }
}