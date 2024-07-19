import {Route, Routes} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import NotesPage from '../pages/NotesPage';
import PrivateRoute from './PrivateRoute';

export default function AllRoutes() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/register' element={<SignupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/notes' element={<PrivateRoute><NotesPage/></PrivateRoute>}/>
        </Routes>
        </>
    )
}