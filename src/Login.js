import React from 'react';
import {Container, Form, FormGroup, Label, Input ,Button} from 'reactstrap';

class Login extends React.Component{
render() {
    return (
        <Container>
        
            <h1>
                LOGIN
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
        <Button color="primary" size="lg" block>Continue</Button>
        <Button color="secondary" size="sm" className="b1">Create New Account</Button>

        </Container>
    )
}
}

export default Login;
