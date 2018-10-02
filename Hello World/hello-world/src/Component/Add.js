import React, { Component } from 'react';
import * as firebase from 'firebase';





class Add extends Component {
    ref = firebase.database().ref("Todo");
    constructor(props){
        super();
        this.state={
            Todo:''
        }

    }
        handleChange(event){

            this.setState({
                Todo : event.target.value,
            })
        }
        add(){
            if(this.state.Todo===""){
                alert('empyt')
            }else{
                this.ref.push({Todo: this.state.Todo})
                this.setState({Todo:''})
            }
        }
    
  render() {
    return (
      <span className="">

      <input type="text" onChange={this.handleChange.bind(this)} />
      <button onClick={this.add.bind(this)} >ADD</button>
      
      </span>
    );
  }
}

export default Add;