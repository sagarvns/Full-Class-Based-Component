import React, { Component } from 'react'
import './dashboard.css';
export default class Card extends Component {
    constructor(props)
    {
        super(props)
        // console.log(this.props);
        
    }
    render() {
        const {p_name,p_price,p_desc,p_img}=this.props;
        return (
            <>
                {/* <div className="card" style={{width:"25%"}}>
                    <img src={this.props.p_img} className="card-img-top" style={{height:"250px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.p_name}</h5>
                        <p className="card-text">{this.props.p_desc}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
                 <div className="card my_card" >
                    <img src={p_img} className="card-img-top" style={{height:"250px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{p_name}</h5>
                        <p className="card-text">{p_desc}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}
