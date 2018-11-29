import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/main_layouts/Header';
import GoogleLoginBtn from './components/GoogleLoginBtn';
import Feed from './components/Feed';
import Article from './components/Article';
import Posts from "./data/posts.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header loginBtn={<GoogleLoginBtn/>}/>
          <Route
            exact
            path="/"
            component={props => <Feed {...props}/>}
          />
          <Route
            path="/article/:articleId"
            component={props => (
              <Article {...props} article={Posts[0]} />
            )}
            
          />
          
        </div>
      </Router>
    );
  }
}

export default App;
