import React, { Component } from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);

  if(!localStorage.user){      
      localStorage.setItem("user",JSON.stringify(response.profileObj));
  }
  else{
      localStorage.user = JSON.stringify(response.profileObj);
  }
}
class GoogleLoginBtn extends Component {
  render() {
    return (
      <GoogleLogin
      clientId="385502185269-11b1mpbhotr916ji01545a7jlkj2oa83.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
    );
  }
}

//Creating clientid for Google login
//https://developers.google.com/identity/sign-in/web/sign-in

export default GoogleLoginBtn;
