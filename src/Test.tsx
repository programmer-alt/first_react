import React from "react";

interface Props {
    arg : string
}

interface State {
    s1: number
}

class Test extends React.Component<Props, State> {
    constructor(props: Props) {
      console.clear();
      console.log('constructor');
      console.log(props);
      super(props);
      this.state = {
        s1: 0,
      };
    }
    buttonHandler = () => {
        let val = this.state.s1;
        val++;
        this.setState ({
            s1: val
        })
    }

    static getDerivedStateFromProps (props: Props, state : State) {
        console.log('get derived state');
        return null
    }
    componentDidMount(): void {
        console.log('did mount');
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('did update');
    }

    render () {
        console.log('render1')
        return (
            <>
            {console.log('render 2')}
            <div>
                <button onClick={this.buttonHandler}> Push</button>
                {this.state.s1}
            </div>
            </> )
        
    }
}


export default Test;