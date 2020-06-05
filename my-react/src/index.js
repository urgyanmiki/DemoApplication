import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'
import {commentActions} from './actions/commentActions'

const axios = require('axios')
const middleware = applyMiddleware
const thunkmiddleware=thunkMiddleware

const initialState = {
  posts: [],
}


export const deleteComment = (id) =>{
  return{
      type: 'DELETE_POST',
      id: id
  }
}



export const fetchCommentSucces = (posts) =>{
  
  return{
      type: 'FETCH_COMMENTS_SUCCES',
      
  }
}
export const fetchCommentFailure = () =>{
  return{
      type: 'FETCH_COMMENTS_FAILURE'
  }
}

const fetchComments=()=>{
  return function(dispatch){
    axios.get('http://localhost:7082/api/Tblcomments')
    .then(response=>{
      const posts = response.data
      
      dispatch(fetchCommentSucces(posts))
    }).catch(error=>{
      dispatch(fetchCommentFailure())
    })
  }
}




const store = createStore(rootReducer, middleware(thunkmiddleware))
store.subscribe(()=>{ console.log(store.getState())})
store.dispatch(fetchComments())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
