import React, { useState, useEffect } from "react"  ;
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function Createemployee(props) {  

const [employee, setemployee] = useState({ Name: '',Age: '',Salary: '' });  
const [showLoading, setShowLoading] = useState(false);  
  const apiUrl = "http://jsonplaceholder.typicode.com/users";  

    const Insertemployee = (e) => {  
      e.preventDefault();  
        debugger;  
    const data = { Name:employee.Name, Age: employee.Age, Salary: employee.Salary };  
    axios.post(apiUrl, data)  
      .then((result) => {  
        props.history.push('/EmployeList')      
      });  
    };  
    const onChange = (e) => {  
        e.persist();  
        debugger;  
    setemployee({...employee, [e.target.name]: e.target.value});  
    }  
        return (  
            <div className="app flex-row align-items-center">  
                <Container>  
                 <Row className="justify-content-center">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={Insertemployee}>  
                  <h1>Register</h1>  
                  <InputGroup className="mb-3">  
                    <Input type="text" name="Name" id="Name" placeholder="Name" value={employee.Name} onChange={ onChange }  />  
                  </InputGroup>  
                  <InputGroup className="mb-3">  
                    <Input type="text" placeholder="Age" name="Age" id="Age"  value={employee.Age} onChange={ onChange }  />  
                  </InputGroup>  
                  <InputGroup className="mb-4">  
                    <Input type="text" placeholder="Salary" name="Salary" id="Salary" value={employee.Salary} onChange={ onChange }  />  
                  </InputGroup>  
                  
                  
                  <CardFooter className="p-4">    
                    <Row>  
                      <Col xs="12" sm="6">  
                        <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                         </Col>  
                         <Col xs="12" sm="6">  
                        <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
                      </Col>  
                    </Row>  
                  </CardFooter>  
                </Form>  
              </CardBody>  
            </Card>  
          </Col>  
        </Row>  
      </Container>  
  </div>  
    )  
}  
export default Createemployee  