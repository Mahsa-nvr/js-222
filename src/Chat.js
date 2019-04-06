import React from 'react';
import { Container,Button} from 'reactstrap';
import {Launcher} from 'react-chat-window';
import axios from 'axios';

class Chat extends  React.Component{
    constructor() {
        super();
        this.state = {
          messageList: []
          
        };
      }


      componentDidMount() {
        axios({
          url: `http://localhost:8000/question`
          
        }).then(Response => {
         this.setState({
           messageList: Response.data
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

            prevState:this.state.prevState+1
           })
          }


      _sendMessage(text) {
        if (text.length > 0) {
          this.setState({
            messageList: [...this.state.messageList, {
              author: 'them',
              type: 'text',
              data: { text }
            }]
          })
        }
      }
    
    

 render() {
     return(
        
         <Container>


<Launcher 
        agentProfile={{
          teamName: 'robot chat',
          //imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
    
      />


             <Button className="b5" color="primary" block>Start</Button>
            <Button onClick={this.logoff} color="primary"  className="b4" block>Logoff</Button>

         </Container>
         
     );
 }
}

export default Chat;
