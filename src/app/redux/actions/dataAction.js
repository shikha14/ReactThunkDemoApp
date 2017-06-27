/**
 * Created by Shikha on 27/06/17.
 */

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


// returns a function and will be called in the Redux-Thunk middleware
export function loadReposAction() {
    return function(dispatch, getState) {
        var state = getState();
        var url = "https://api.github.com/users/" + state.user + "/repos";

        dispatch(loadingChangedAction(true));

        return axios.get(url)
            .then(function(result) {
                dispatch(loadingChangedAction(false));

                if (result.status === 200) {
                    return result.json();
                }

                throw "request failed";
            })
            .then(function(jsonResult) {
                dispatch(addReposAction(jsonResult));
            })
            .catch(function(err) {
                sweetAlert("Oops...", "Couldn't fetch repos for user: " + state.user, "error");
            });
    }
};