import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import firebase from 'firebase';
import Router from  './Router';

class App extends Component{
    componentWillMount(){
        const firebaseConfig = {
            apiKey: 'AIzaSyB3JXdUdborL-rmxJL7gcB2oCjqvIyuXzQ',
            authDomain: 'manager-3d463.firebaseapp.com',
            databaseURL: 'https://manager-3d463.firebaseio.com',
            projectId: 'manager-3d463',
            storageBucket: 'manager-3d463.appspot.com',
            messagingSenderId: '248951571203',
            appId: '1:248951571203:web:afb374aca99e7865'
          };
         
          
            firebase.initializeApp(firebaseConfig)
           
        };
    render (){
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
       <Provider store ={store}>
           <Router/>
       </Provider>
    );
}
}

export default App;