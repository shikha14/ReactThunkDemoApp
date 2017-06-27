/**
 * Created by Shikha on 27/06/17.
 */
import  React from "react";
import { connect } from "react-redux";
import { loadReposAction } from "../redux/actions/dataAction";
import { userChangedAction } from "../redux/actions/userAction"


class App extends React.Component{
    render(){
        return(
          <div><h1>hello</h1></div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user:state.userReducer,
        data:state.dataReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadReposAction:() =>{
            dispatch(loadReposAction);
        },
        userChangedAction:(name) =>{
            dispatch(userChangedAction(name));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);