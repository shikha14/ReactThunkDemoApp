/**
 * Created by Shikha on 27/06/17.
 */

// Action creators
export function userChangedAction(name) {
    return {
        type: "USER_CHANGED",
        payload: name
    };
}