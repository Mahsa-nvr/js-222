import React from 'react';
import { Container,Button} from 'reactstrap';
import {Launcher} from 'react-chat-window'

class Chat extends  React.Component{
    constructor() {
        super();
        this.state = {
          messageList: []
          
        };
      }


    logoff = (props) => {
        this.props.history.push('/logoff');
    }

    _onMessageWasSent(message) {
        this.setState({
          messageList: [...this.state.messageList, message]
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
