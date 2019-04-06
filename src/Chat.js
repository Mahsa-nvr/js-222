import React from 'react';
import { Container,Button} from 'reactstrap';
import {Launcher} from 'react-chat-window';
import axios from 'axios';

class Chat extends  React.Component{
    constructor() {
        super();
        this.state = {
          messageList: [],
          tempMessageList:[],
          currentStep: 0,
          isOpen:false,
        };
      }


      componentDidMount() {
        axios({
          url: `http://localhost:8000/question`
          
        }).then(Response => {
         this.setState({
           tempMessageList: Response.data
         }, 
         ()=>{
          this.setState({
           messageList : [...this.state.messageList, this.state.tempMessageList[this.state.currentStep]]
          })
           })   
        }).catch(error => {
          console.log(error);
        })
      }


    logoff = (props) => {
        this.props.history.push('/logoff');
    }

   _onMessageWasSent(message) {
        this.setState({
        messageList : [...this.state.messageList, message],
        currentStep:this.state.currentStep+1
                },()=>{
                    if(this.state.tempMessageList.length > this.state.currentStep){
                        
                        this.setState({                      
                            messageList: [...this.state.messageList, this.state.tempMessageList[this.state.currentStep]]
                            
                          })
                        
                          
                    }else{
                        
                    }
                  
      }
        )
    }

    start = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

     

 render() {
     const isOpen =  this.state;
     return(
        
         <Container>


<Launcher
isOpen={this.state.isOpen}
        agentProfile={{
          teamName: 'robot chat',
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
    
      />
      


             
                   {isOpen && 
                  <Button className="b5" color="primary" onClick={this.start} block>
                           Start
                           </Button>
                           }
                           
             
            <Button onClick={this.logoff} color="primary"  className="b4" block>Logoff</Button>

         </Container>
         
     );
 }
}

export default Chat;
