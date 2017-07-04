class Toggle extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      isToggle : true,
    }
    
    // This binding is necessary to make `this` work in the callback - Way 1
    //this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler(e){
    this.setState(preState =>({
      isToggle : !preState.isToggle
    })
    );
    
    e.preventDefult();
    e.stopPropagation();
  }
  
  render(){
    return (
      <button onClick={this.clickHandler}> 
        {this.state.isToggle ? "ON" : "OFF"}
      </button>
    );
  }
  
  render(){//Way 2 use arrow function to bind
    return(
      <button onClick={(e) => this.clickHandler(e)}>
        {this.state.isToggle ? "ON" : "OFF"}
      </button>
    );
  }
  
  
}

ReactDOM.render(<Toggle/>,document.getElementById('root'));
