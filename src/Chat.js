import React from 'react';
import { Button} from 'reactstrap';



class Chat extends  React.Component{

    logoff = (props) => {
        this.props.history.push('/logoff');
    }////
    
    

 render() {
     return(
        
         <div className="b3">

             <Button className="b5" color="primary">start</Button>
            <Button onClick={this.logoff} color="primary" size="SM" className="b4">Logoff</Button>
            
             <textarea placeholder="Message text" className="b7"></textarea>
             <Button className="b8" color="primary" >send</Button>
             
         </div>
         
     );
 }
}
