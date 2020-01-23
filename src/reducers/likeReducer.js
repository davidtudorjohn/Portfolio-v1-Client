const likeReducer = (state=false, action) =>{
    switch(action.type){
        case 'LIKE':
            return !state
        default:
            return state
    }
}
export default likeReducer