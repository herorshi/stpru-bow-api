import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
          <h2>Home</h2>
      </div>
    );
  }
}
export default withRouter(Home)