import { combineReducers } from 'redux'
import countReducer from "./count.reducer"
import registerReducer from "./register.reducer"
import loginReducer from "./login.reducer"

export default combineReducers({countReducer, registerReducer, loginReducer})