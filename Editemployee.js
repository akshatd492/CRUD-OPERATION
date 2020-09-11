import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function Editemployee(props) {  
        const [employee, setemployee]= useState({Id:'',Name: '', Department: '', Age: '', City: '', Country: '', Gender: '' });  
        const Url = "http://jsonplaceholder.typicode.com/users" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setemployee(result.data);  
          };  
          GetData();  
        }, []);  
        const UpdateEmployee = (e) => {  
          e.preventDefault();  
          const data = {Id:props.match.params.id, Name:employee.Name, Department: employee.Department, Age: employee.Age, City:employee.City, Country: employee.Country, Gender: employee.Gender };  
          axios.post('http://jsonplaceholder.typicode.com/users/', data)  
            .then((result) => {  
              props.history.push('/EmployeList')  
            });  
            const loadUser  = async () => {
              const result = await axios.get("http://jsonplaceholder.typicode.com/users")
              console.log(result);
            }
        };  
        const onChange = (e) => {  
          e.persist();  
          setemployee({...employee, [e.target.name]: e.target.value});  
        }  
        return (  
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateEmployee}>  
                            <h1>Update Employee</h1>  
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
export default Editemployee  