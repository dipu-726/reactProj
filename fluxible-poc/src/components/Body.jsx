import React, { Component } from "react";
import AddName from "./AddName";
import NameStore from "../store/NameStore";

class Body extends Component{
    constructor(props)
    {
        super(props);
        this.state = this.getStoreState();
    }

    getStoreState(){
        return{
            namesList : this.context.getStore(NameStore).getListOfNames(),
            currentName : this.context.getStore(NameStore).getCurrentName()
        }
    }

    componentDidMount(){
        this.context.getStore(NameStore).addChangeListner(this._onStoreChange);
    }

    componentWillUnmount () {
        this.context.getStore(NameStore).removeChangeListener(this._onStoreChange);
    }

    _onStoreChange () {
        this.setState(this.getStoreState());
    }

    render()
    {
        return(
            <div className="application-body" >
                 <AddName />
                 <p>All Names : {this.state.namesList}</p>
                 <p>Current Name : {this.state.currentName}</p>
            </div>
        )
    }    
}
export default Body;