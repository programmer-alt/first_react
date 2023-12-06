import React, { RefObject, ChangeEvent } from "react";

interface State {
    count: number,
    comment: string[]
}

class Comp2 extends React.Component<{}, State> {
    private myRef: RefObject<HTMLTextAreaElement>


    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
            comment: []
        }
        this.myRef = React.createRef<HTMLTextAreaElement>()
    }

    handler = () => {
 let currentCount = this.state.count
 currentCount++;
  this.setState ({
    count: currentCount,
    comment: []
  })
    }
    addComment = ()=> {
        let comment = this.myRef.current?.value;
        let comments = this.state.comment;
        if (comment !== undefined) {
            comments.push(comment)
        }
        this.setState ({
            comment: comments
        })
    }


    render() {
        return (
            <>
                <h1>State</h1>
                <button onClick={this.handler}> This button changed state</button>
                <div>
                    {this.state.count}
                </div>
                <div>
                    <textarea ref={this.myRef}></textarea>
                </div>
                <div>
                    <button onClick={this.addComment}>Add Comment</button>
                </div>
                <div>
                    <ul>
                        {}
                    </ul>
                </div>
            </>
        )

    }
}