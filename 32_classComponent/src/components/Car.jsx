import React from "react";
import PropTypes from "prop-types";

class Car extends React.Component {
  // <---------- constructor without props -------->
  //  {/* Constructor implementing */}
  //   constructor() {
  //     super();
  //     this.state = { color: "blue" };
  //   }
  // <---------- constructor without props -------->

  // <----- constructor with props ------->

  constructor(props) {
    super(props);
  }

  // <----- constructor with props ------->

  render() {
    return (
      <>
        {/* <h2>class components</h2> */}

        {/* // <---------- constructor without props --------> */}

        {/* <h2>the color is {this.state.color}</h2> */}
        {/* // <---------- constructor without props --------> */}

        {/* <-------- only props, means pass the value in App.jsx to use here --------> */}
        {/* <h2>Getting props from App.jsx file {this.props.propName}</h2> */}

        {/* <-------- only props, means pass the value in App.jsx to use here --------> */}

        {/* <----------- props with constructor -----------> */}

        <h2>props in constructor has color = {this.props.propColor}</h2>

        {/* <----------- props with constructor -----------> */}
      </>
    );
  }
}
export default Car;

Car.propTypes = {
  propColor: PropTypes.node,
};
