import React from 'react';
import {Container, Form, FormGroup, Label, Input ,Button} from 'reactstrap';
import {HandleChange} from "./Utility";

class Login extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        username : '',
        password : ''
      
    }
  }

  continue = (props) => {
    if ( this.state.username===localStorage.getItem("username" )  && 
    this.state.password===localStorage.getItem("password") )
      {
    this.props.history.push('/chat')
  } else alert('please create your accaount');
  }
   

  create = (props) => {
    this.props.history.push('/create');
    //console.log(this.state.username);
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
          <Input type="text" name="username" id="Username" placeholder="Enter Username"  onChange={(e)=> HandleChange.call(this, e) } />
        
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password :</Label>
    <Input type="password" name="password" id="Password" placeholder="Enter Password"  onChange={(e)=> HandleChange.call(this, e)} />
        </FormGroup>
        </Form>
        <Button onClick={this.continue} color="primary" size="lg" block>Continue</Button>
        <Button onClick={this.create} color="secondary" size="sm" className="b1">Create New Account</Button>

        </Container>
       
    )
}
}

export default Login;
