import React from 'react';
import './App.css';
import './Containers/PostContainer'
import PostContainer from './Containers/PostContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        Hi from app
        <PostContainer />
      </div>
    )
  }
}

export default App;
