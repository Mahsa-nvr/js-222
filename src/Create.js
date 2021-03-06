import React from 'react';
import {Container, Form, FormGroup, Label,Input ,Button} from 'reactstrap';
import {HandleChange} from "./Utility";



class Create extends React.Component{
  
  state={
    username : '',
    password : ''
  };
  
      save =() => {
    
        if ( this.state.username  && this.state.password ) {
         localStorage.setItem("username", this.state.username )
         localStorage.setItem("password", this.state.password);
         this.props.history.push('/');
         }else alert('please enter username or password')
  
}
      
    render(){
      
        return(
           <Container>
               <h1>
                   CREATE ACCOUNT
               </h1>
               <Form>
        <FormGroup>
          <Label for="Username">Username :</Label>
          <Input type='text' name='username' id='Username' placeholder="Enter Username" value={this.state.username} onChange={(e)=>HandleChange.call(this,e)} />
          
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password :</Label>
          <Input type="password" name="password" id="Password" placeholder="Enter Password" value={this.state.password} onChange={(e)=> HandleChange.call(this, e)}/>
        </FormGroup>
        </Form>
        <Button onClick={this.save} color="primary" size="SM" className="b2" >save
    
        </Button>
        
           </Container>
        );
    }
}


export default Create;