import React, { Component } from 'react'

export default class Mycard extends Component {
    constructor()
    {
        super();
        this.state={
            count:0,
            mydata:["c","c++","java","php","react","node","express","mongodb"]
        }
        // console.log(this.state);
        console.log("I am from constructer");
        // this.state={
        //     mydata:["c","c++","java","php","react","node","express","mongodb"]
        // }
        
        
    }

    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <>
      {console.log("Render")}
        <div style={{textAlign:"center"}}>
            {this.state.count}
            <br />
            <input type="submit" value="Decrement" onClick={this.decrement} />
            <input type="submit" value="Increment" onClick={this.increment} />
            <br />
            {/* <ul>
            {
                this.state.mydata.map((item,index)=>
                        <li>{item}</li>
                )
            }
            </ul> */}
            <select name="" id="">
                <option value="">-----Select Course -------</option>
                {
                    this.state.mydata.map((item,index)=>
                        // console.log(index)
                       <option value="" key={index}>{item}</option>
                        
                    )
                }
            </select>

        </div>
      </>
    )
  }
}
