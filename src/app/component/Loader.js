/**
 * Created by Shikha on 27/06/17.
 */

import  React from "react";

export const Loader = (props) =>{
    return(
        <div id="loading" className="row alert alert-info">
            <i className="fa fa-spin fa-cog"></i> loading Data...
        </div>
    );

};