import likeReducer from './likeReducer'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
    isLiked: likeReducer
})
export default rootReducer