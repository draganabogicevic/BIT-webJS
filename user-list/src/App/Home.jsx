import React from "react";
import { Fragment } from "react";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Body from "../components/Body/Body.jsx";



import './App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {results: []},
      dataCopy: {results: []},
      listView: true,
      loading: true
    }
    this.toggleView = this.toggleView.bind(this);
    this.refresh = this.refresh.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
  }

  
 
  toggleView() {
    this.setState({ listView: !this.state.listView });
  }

  fetchData() {
    fetch("https://randomuser.me/api/?results=15")
      .then(respons => respons.json())
      .then(response => {
        this.setState ({
          
          data: response,
          dataCopy: response,
          loading: false
        })
      })
  }
  
 filterUsers(event) {
    let filteredUsers = [];
    if(event.target.value) {
      
      filteredUsers = this.state.dataCopy.results.filter(user => user.name.first.toLowerCase().includes(event.target.value.toLowerCase() || user.name.last.toLowerCase().includes(event.target.value.toLowerCase())))
      
      this.setState({data: {results: filteredUsers}})

      
    } else {
      this.setState({data: {results: this.state.dataCopy.results}})
    }

  
    }
  
 refresh() {
    this.fetchData()
  }
 
  showAbout() {
    this.setState({about: true})
  }
  
  componentDidMount() {

     this.fetchData() 
    
 }

  
  
  render() {
     if(this.state.loading) {
        return (<div className="sk-cube-grid">
                  <div className="sk-cube sk-cube1"></div>
                  <div className="sk-cube sk-cube2"></div>
                  <div className="sk-cube sk-cube3"></div>
                  <div className="sk-cube sk-cube4"></div>
                  <div className="sk-cube sk-cube5"></div>
                  <div className="sk-cube sk-cube6"></div>
                  <div className="sk-cube sk-cube7"></div>
                  <div className="sk-cube sk-cube8"></div>
                  <div className="sk-cube sk-cube9"></div>
              </div>)
      }
      return (
          <Fragment>
              <Header typeOfView={this.state.listView} toggleView={this.toggleView} refresh={this.refresh} filterUsers={this.filterUsers}/>
              <Body typeOfView={this.state.listView} userData={this.state.data}/>
              <Footer />
          </Fragment>
      )

  }
  



}  
export default Home;
