import React from 'react';
import {Route} from 'react-router-dom';
import Chat from './Chat';
import Create from './Create';
import Login from './Login';
import Logoff from './Logoff';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Route path='/chat' component={Chat}/>
                <Route path='/create' component={Create}/>
                <Route exact path='/' component={Login}/>
                <Route path='/Logoff' component={Logoff}/>

               
            </div> 
        )
    }
}