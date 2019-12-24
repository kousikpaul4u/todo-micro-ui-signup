import React, { Component } from "react";
import SignupApp from "containers/index";
import env from "env.config";
import $ from "jquery";
window.jQuery = window.$ = $;

class App extends Component {

  render() {
    return (
      <div className={`${env.APP_NAME}-app-main-container`}>
        <SignupApp />
      </div>
    );
  }

}

export default App;
