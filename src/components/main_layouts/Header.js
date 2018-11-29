import React, { Component } from "react";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
       current_user :  localStorage.user ? JSON.parse(localStorage.user) : null
    }

    console.log(this.state.current_user);
  }
  render() {
    return (
      <div>
        <nav
          data-behavior="animated-navbar"
          className="navbar navbar-default navbar-fixed-top is-inView"
        >
          <div className="container-fluid col-md-10 col-md-offset-1">
            <div className="navbar-header">
              <a className="navbar-brand" id="logo" href="/">
                <img
                  alt="Stories"
                  src="https://cdn-images-1.medium.com/max/1600/1*5ztbgEt4NqpVaxTc64C-XA.png"
                  height="40"
                />
              </a>
            </div>
            <ul className="nav navbar-nav filter-links">
              <li>
                <a className="" href="/">
                  Top stories
                </a>
              </li>
            </ul>
            <div className="folding-nav">
              <ul className="nav navbar-nav navbar-right">
                {this.props.isAuth ? (
                  <li className="new-post-button">
                    <a
                      className="button"
                      data-behavior="trigger-overlay"
                      href="/editor"
                    >
                      Write a story
                    </a>
                  </li>
                ) : (
                  ""
                )}
                {this.state.current_user != null ? (
                  <div>
                    <img src={this.state.current_user.imageUrl} alt={this.state.current_user.name}/>
                  </div> 
                ) : (
                  <li>
                     {this.props.loginBtn}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
