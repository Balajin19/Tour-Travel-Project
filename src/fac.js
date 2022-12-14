/*import React from "react";
import { ReactDOM } from "react";
class Test extends React.Component{
  constructor() {
    super();
    this.state = { name: "" };
  }
  render() {
    return (
      < form >
        <h1>Welcome {this.state.name}</h1>
        Enter Your Username<input type="text" placeholder="enter ur username" onChange={this.uservalue}/>
    </form>
    )
  }
  uservalue = (event) => {
    this.setState({ name: event.target.value });
  }
}
ReactDOM.render(<Test />, document.getElementById('root'));