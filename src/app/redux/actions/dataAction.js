/**
 * Created by Shikha on 27/06/17.
 */
import axios from 'axios';

// Action creators
export function addReposAction(repos) {
    return {
        type: "ADD_REPOS",
        payload: repos
    };
};

export function loadingChangedAction(isLoading) {
    return {
        type: "IS_LOADING",
        payload: isLoading
    }
};




export function loadReposAction(name) {
    return function(dispatch) {

        var url = "https://api.github.com/users/" + name + "/repos";
        console.log("url",url)
        dispatch(loadingChangedAction(true));

        return axios({
            method:'get',
            url:url
        }).then(function(result) {
                dispatch(loadingChangedAction(false));
             console.log("result",result);
                return result.data;

            })
            .then(function(jsonResult) {
                console.log("result",jsonResult);
                dispatch(addReposAction(jsonResult));
            })
            .catch(function(err) {
                console.log("err",err);
                //sweetAlert("Oops...", "Couldn't fetch repos for user: " + state.user, "error");
            });
    }
}