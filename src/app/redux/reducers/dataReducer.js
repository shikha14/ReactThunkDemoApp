/**
 * Created by Shikha on 27/06/17.
 */

const dataReducer = (state= {
    repos: [],
    isLoading: false
},action) => {
    switch (action.type) {
        case "ADD_REPOS":
            state ={
                //Take all property and add to this new object using spread operator
                ...state,
                repos:action.payload,
            };
            break;

        case "IS_LOADING":
            state ={
                //Take all property and add to this new object using spread operator
                ...state,
                isLoading:action.payload,
            };
            break;
    }
    return state;
}
export default dataReducer;