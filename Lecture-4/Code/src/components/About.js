import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    console.log("Parent render");
    return (
      <div>
        <h4>This is React Js test project</h4>
        <User
          name="Sarika Memane"
          location="Thane"
          component="Functional component"
        />
        <UserClass
          name="First Child"
          location="Thane"
          component="Class component"
        ></UserClass>
      </div>
    );
  }
}

export default About;
