import React from 'react';  
import './App.css';  
import { users } from './db.json';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Createemployee from './Createemployee'  
import EmployeList from './EmployeList'  
import Editemployee from "./Editemployee";  

function App() {  
  return (  
    <div className="App">  
     <Router>    
      <div className="container">    
        <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Createemployee'} className="nav-link">Add Employee</Link>    
              </li>    
            </ul>  
            <input type="text"  placeholder=" Search" onChange={(e)=>this.searchSpace(e)}/>   
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/Createemployee' component={Createemployee} />    
          <Route path='/edit/:id' component={Editemployee} />    
          <Route path='/EmployeList' component={EmployeList} />    
        </Switch>    
      </div>    
    </Router>    
  </div>  
  );  
}  
export default App;  