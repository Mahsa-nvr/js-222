import React from 'react';
import { Button } from 'reactstrap';

class Chat extends  React.Component{

    logoff = (props) => {
        this.props.history.push('/logoff');
    }
    
 render() {
     return(
         <div className="b3">
             
             
             <Button onClick={this.logoff} color="primary" size="SM" className="b4">Logoff</Button>
             
         </div>
     );
 }
}
export default Chat;