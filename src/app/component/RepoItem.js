/**
 * Created by Shikha on 27/06/17.
 */
import  React from "react";

export const RepoItem = (props) =>{
    return(
        <li className="list-group-item">{props.repo.full_name}</li>
    );
};