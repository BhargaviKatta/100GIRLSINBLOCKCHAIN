import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props)
        this.state={curTime:""}
    }

    componentDidMount(){
      
        setInterval(() => {
            var today = new Date(),
            curTime =today.getHours() +":" +today.getMinutes() +":" +today.getSeconds();
            this.setState({ curTime });
        }, 1000);
    }
        
      
      
      componentDidUpdate(){
        if(this.state.curTime === "19:6:40"){
    
              alert("take break");
        }
        
      }
    
      render() {
        return(
        <>
        <h1>{this.state.curTime}</h1>
        </>
        )
        
    }
    
        
  }
  export default App;
