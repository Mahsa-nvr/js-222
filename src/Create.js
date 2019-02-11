import React from 'react';
import {Container, Form, FormGroup, Label, Input ,Button} from 'reactstrap';

class Create extends React.Component{
    render(){
        return(
           <Container>
               <h1>
                   CREATE ACCOUNT
               </h1>
               <Form>
        <FormGroup>
          <Label for="Username">Username :</Label>
          <Input type="text" name="username" id="Username" placeholder="Enter Username" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password :</Label>
          <Input type="password" name="password" id="Password" placeholder="Enter Password" />
        </FormGroup>
        </Form>
        <Button color="primary" size="SM" className="b2" >save</Button>
        
           </Container>
        );
    }
}
export default Create;