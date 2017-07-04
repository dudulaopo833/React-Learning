class Clock extends React.Component {//class extends
  constructor (props){ //constructor
    super(props); //super
    this.state={ //this.state
      time: new Date(),
    }
  }
  
  componentWillMount (){ //componentWillMount -> render -> compnentDidMount -> componentWillUnmount
    
  }
  
  render(){
    return (
      <div>
        <h1> Hello, React </h1>
        <div>{this.state.time.toLocaleTimeString()}</div>
      </div>
    );
  }
  
  tick(){
    this.setState({ //this setState
      time : new Date(),
    });
  }
  
  componentDidMount(){
    this.timer = setInterval(()=>this.tick(),1000);
  }
  
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
}

class App extends React.Component{
  render(){
    return(
      <div>
          <Clock />
          <Clock />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
