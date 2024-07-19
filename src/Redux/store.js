import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import userReducer from "./users/user.reducers";
import { thunk } from "redux-thunk";
import { noteReducer } from "./notes/note.reducers";

let rootReducer = combineReducers({
    userReducer:userReducer,
    noteReducer:noteReducer 
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))