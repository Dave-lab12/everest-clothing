import React from "react";

import "./sign-in.styles.scss";
import CustomButtons from "../../components/custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.util";
import FormInput from "../../components/form-input/form-input.component";
class SigIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form handleChange={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            onChange={this.handleChange}
            required
          />

          <CustomButtons type="submit">Sign in</CustomButtons>
          <CustomButtons onClick={signInWithGoogle}>
            {""}
            sign in with Google {""}
          </CustomButtons>
        </form>
      </div>
    );
  }
}

export default SigIn;
