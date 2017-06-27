/**
 * Created by Shikha on 27/06/17.
 */

import  React from "react";
import  { RepoItem } from "./RepoItem";

class RepoList extends React.Component{
    render() {
        var liComponent;
        if(this.props.repos){
            liComponent =this.props.repos.map((repo,index) => {
                return <RepoItem repo={repo} index={index} key={index}/>
            });
        }
        return (
            <div className="row">
                <ul className="list-group">
                    {liComponent}
                </ul>
            </div>
        );
    }
};

export default RepoList;