class ClickButton extends React.Component{
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler(){
    const tipE = ReactDOM.findDOMNode(this.refs.tip); //use refs to search. 
    if(tipE.style.display === "none"){
      tipE.style.display = "inline";
    }else{
      tipE.style.display = "none";
    }
  }
  
  render(){
    return(// Use ref
      <div>
        <button onClick={this.clickHandler}>Show Or Hide</button><span ref='tip'>Test</span>
      </div>
    );
  }
}

class InputTest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputContent : ''
    };
    
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  changeHandler(e){
      this.setState({
        inputContent : e.target.value
      });
  }
  
  render(){
    return(
      <div><input type='text' onChange={this.changeHandler}/><span>{this.state.inputContent}</span></div>
    );
  }
}
        
ReactDOM.render(
  <div>
    <ClickButton/><br/><br/><InputTest/>
  </div>,document.getElementById('root'));
