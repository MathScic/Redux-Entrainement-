import axios from 'axios'

export const GET_USERS = "GET_USERS"; 

export const getUsers = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/user")
        .then((res) => {
           dispatch({type: GET_USERS, payload: res.data[0]})
        })
    }
}