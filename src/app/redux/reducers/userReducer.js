/**
 * Created by Shikha on 27/06/17.
 */



const userReducer = (state= {
    user:''
},action) => {
    switch (action.type) {
        case "USER_CHANGED":
            state ={
                //Take all property and add to this new object using spread operator
                ...state,
                user:action.payload,
            };
            break;
    }
    return state;
}
export default userReducer;