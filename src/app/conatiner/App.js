/**
 * Created by Shikha on 27/06/17.
 */
import  React from "react";
import { connect } from "react-redux";
import  DataForm  from "../component/DataForm";
import { Loader } from "../component/Loader";
import RepoList from "../component/RepoList";
import { loadReposAction,loadingChangedAction } from "../redux/actions/dataAction";
import { userChangedAction } from "../redux/actions/userAction";
import axios from "axios";


class App extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event,name) {
        event.preventDefault();
        console.log("From app  handle submit");
        this.props.userChangedAction(name);
         this.props.loadReposAction(name);
       //  var url = "https://api.github.com/users/" + name + "/repos";
       //
       // loadingChangedAction(true);
       //
       //  return axios({
       //      method:'get',
       //      url:url
       //  }).then((resp) => {
       //      console.log(resp);
       //      return resp;
       //  }).then(function(jsonResult) {
       //          console.log("data",jsonResult);
       //          // dispatch(addReposAction(jsonResult));
       //      })
       //      .catch(function(err) {
       //          console.log(error);
       //          //sweetAlert("Oops...", "Couldn't fetch repos for user: " + state.user, "error");
       //      });
    }



    render(){
        var bodyContent;
        var repoList;
        if(this.props.data.isLoading)
            bodyContent = <Loader/>;
        else{
            if(this.props.data.repos){
                repoList= <RepoList repos={this.props.data.repos}/>
            }
            bodyContent = <DataForm onSubmit={this.handleSubmit}/>;
        }

        return(
          <div>
              <div className="container" style={ { marginTop:20}}>
                  {bodyContent}
                  {repoList}
              </div>
          </div>
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
        loadReposAction:(name) =>{
            dispatch(loadReposAction(name));
        },
        userChangedAction:(name) =>{
            dispatch(userChangedAction(name));
        },
        loadingChangedAction:(isloading) =>{
            dispatch(loadingChangedAction(isloading));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);