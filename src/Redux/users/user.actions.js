import axios from 'axios';
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from './user.types';
import { type } from '@testing-library/user-event/dist/type';
// import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../components/constants/config';


export const getUser = (obj) => async(dispatch) => {
    // const dispatch = useDispatch();
    dispatch({type:LOGIN_USER_LOADING})
    try{
        let data = await axios(BASE_URL+'/user/login', {
            method:'post',
            data:obj
        })
        let {message, token, status} = data.data;
        
        if(status === 1) {
            dispatch({type:LOGIN_USER_SUCCESS, payload:token})
        } else {
            alert(message)
            dispatch({type:LOGIN_USER_ERROR})
        }
    } catch(err) {
         dispatch({type:LOGIN_USER_ERROR})
    }
    

    
}
