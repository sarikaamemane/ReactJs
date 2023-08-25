import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    console.log(this.props.name + "Child render");
    const { name, location, component } = this.props;

    return (
      <div>
        <h4>Name :{name}</h4>

        <p> Location:{location}</p>
        <p>Component:{component}</p>
      </div>
    );
  }
}

export default UserClass;
