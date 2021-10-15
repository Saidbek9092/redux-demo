import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "./userTypes";
import axios from "axios";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


// Async action creator
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://mohir-server.herokuapp.com/courses')

            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            }).catch(error=> {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))

        })
    }
}

export const sendValuesData = data => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.post('/api/login', data)
            .then(res=>{
                const newdata = res.data
                dispatch(fetchUserSuccess(newdata))
            }).catch(error=> {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}
// export const fetchCourses = () => {
//     return (dispatch) => {
//         dispatch(fetchUserRequest)
//         axios.get('https://mohir-server.herokuapp.com/courses')
//             .then(response => {
//                 const users = response.data
//                 dispatch(fetchUserSuccess(users))
//             }).catch(error=> {
//             const errorMsg = error.message
//             dispatch(fetchUserFailure(errorMsg))
//         })
//     }
// }



