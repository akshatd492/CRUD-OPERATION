import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'  
function EmployeList(props) {  
  const [users, setusers] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://jsonplaceholder.typicode.com/users');  
      setusers(result.data);  
    };  
    GetData();  
  }, []);  
  
  const editemployee = (id) => {  
    props.history.push({  
      pathname: '/edit/' + id  
    });  
  };  

  return (  
    <div className="animated fadeIn">  
    <table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Salary</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((users, index) => (
      <tr>
        <th scope="row">{index + 1}</th>
          <td>{users.name}</td>
          <td>{users.Age}</td>
          <td>{users.Salary}</td>
          <td>
            <Link class="btn btn-primary mr-2">View</Link>
            <Link class="btn btn-outline-primary mr-2">Edit</Link>
          </td>
      </tr>
    ))}
  </tbody>
</table> 
    </div>  
  )  
}  

export default EmployeList  