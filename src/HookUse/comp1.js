import React from "react";

class Comp1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      comment: []
    };
    this.myRef = React.createRef(); // Add parentheses to create the reference
  }

  handler = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({
      count: currentCount,
      comment: []
    });
  };

  addComment = () => {
    let comment = this.myRef.current.value;
    let comments = this.state.comment;
    comments.push(comment);
    this.setState({
      comment: comments
    });
    this.myRef.current.value = ''
  };

  render() {
    return (
      <>
        <h1>State</h1>
        <div>
          <button onClick={this.handler}>This button changed state</button>
        </div>
        {this.state.count % 2 === 0 ? "четное" : "не четное"}
        <div>{this.state.count}</div>
        <div>
          <textarea ref={this.myRef}></textarea>
        </div>
        <div>
          <button onClick={this.addComment}>Add comment</button>
        </div>
        <div>
          <ul>
          {this.state.comment.map((item, index) => (
  <li key={index}>{item}</li>
))}

          </ul>
        </div>
      </>
    );
  }
}

export default Comp1;
