import React from "react"

import  "../style/style.scss"

class Test extends React.Component {
    render() {
        return <div>Hello there pew {this.props.name}</div>;

    }
}


React.render(
  <Test name="World"/>,
  document.body
);
