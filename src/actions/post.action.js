import axios from 'axios'

export const GET_POSTS = "GET_POSTS"; 
export const ADD_POST = "ADD_POST"


export const getPost = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/posts")
        .then((res) => {
           dispatch({type: GET_POSTS, payload: res.data})
        })
    }
}

export const addPost = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/posts", data)
        .then((res) => {
           dispatch({type: ADD_POST, payload: data})
        })
    }
}
