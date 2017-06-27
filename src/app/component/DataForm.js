/**
 * Created by Shikha on 27/06/17.
 */

import  React from "react";

class DataForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        console.log("INside handle change");
        const target = event.currentTarget;

        this.setState({
            [target.name]: target.value
        });


    }

    handleSubmit(event,state) {
        event.preventDefault();
        console.log("From data form handle submit");
        if(this.state.name!=null){
            this.props.onSubmit(event,this.state.name);
        }
    }
    render(){
        return(
            <form action="" className="form">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter github username"
                        className="form-control"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </div>
                <button className="btn btn-primary"
                        type="submit"
                        onClick={this.handleSubmit}
                >Load</button>
            </form>
        );
    }
};

export default DataForm;

