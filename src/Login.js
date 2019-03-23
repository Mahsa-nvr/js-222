import React from 'react';
import {Container, Form, FormGroup, Label, Input ,Button} from 'reactstrap';

class Login extends React.Component{




  continue = (props) => {
    this.props.history.push('/chat');
  }

  create = (props) => {
    this.props.history.push('/create');
  }


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
        <Button onClick={this.continue} color="primary" size="lg" block>Continue</Button>
        <Button onClick={this.create} color="secondary" size="sm" className="b1">Create New Account</Button>

        </Container>
    )
}
}

export default Login;
