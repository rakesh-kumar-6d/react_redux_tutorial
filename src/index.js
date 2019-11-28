import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';

//The CREATE STORE method will allow us to create the store 
//Now that we have some code inside postReducer.js let’s import it in our index.js file and pass it to the store as an argument.
const store = createStore(postReducer);
// NOTE:-
// It’s where the entire state of your application will live. This is the first main benefit of using Redux.
// Instead of having to manage the state in different components we have to only manage it in one single place called the store.
//This method needs a special argument and this argument goes by a special name called the 'REDUCER'

ReactDOM.render(
    //. Let’s pass this store to our components. To do that let’s use the PROVIDER component from the ‘react-redux’ library. 
    //The Provider component uses something called React Context which allows you to pass the store object to any components
    // that needs to access it without the need to pass props.
    // Here we are wrapping the App component which is our parent component with the Provider component so that all the child components
    // in our app can get access to the store. The Provider component takes the store as a prop.
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
