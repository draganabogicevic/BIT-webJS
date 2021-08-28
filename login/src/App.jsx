import React from "react";
import { Fragment } from "react";

import Form from "./components/Form";

import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "", 
      errors: {}
    }
    this.handlerSetState = this.handlerSetState.bind(this)
    this.handlerShowData = this.handlerShowData.bind(this)
    this.reset = this.reset.bind(this)
    this.handlerFormValidation = this.handlerFormValidation.bind(this)
  }

  handlerSetState (event) {
    const target = event.target;
    const val = target.value;
    const nam = target.name;
    this.setState({[nam]: val})
  }

  handlerFormValidation () {
    let username = this.state.username;
    let password = this.state.password;
    let errors = {};
    let isValid = true;

    if(!username) {
      isValid = false;
      errors["username"] = "Please add username";
    } 
    if(!password) {
      isValid = false;
      errors["password"] = "Please add password";
    } 

    this.setState({errors: errors});
    
    return isValid;
  }


  handlerShowData (event) {
    if(this.handlerFormValidation()) {
      this.setState({errors: {}});
      setTimeout(() =>alert(`Your username is: ${this.state.username} \nYour password is: ${this.state.password}`), 500);
    }
    
    event.preventDefault();
  }

  reset () {
    this.setState({
      username: "", 
      password: ""      
    })
  }


  render() {

  return (
    <Fragment>
      <Form  handlerSetState={this.handlerSetState} handlerShowData={this.handlerShowData} reset ={this.reset} errors={this.state.errors}/>
    </Fragment>
  );
}

}

export default App;
