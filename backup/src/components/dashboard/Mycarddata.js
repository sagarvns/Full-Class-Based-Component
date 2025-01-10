import React, { Component } from 'react'

export default class Mycarddata extends Component {
    constructor() {
        super()
        this.state = [
            {
                p_name: "Shirt",
                p_price: 2000,
                p_decs: " front opening, and a tail long enough to be tucked inside tr front opening, and a tail long enough to be tucked inside tr",
                p_img: "assets/img/banner01.jpg"
            },
            {
                p_name: "Shirt",
                p_price: 2000,
                p_decs: " front opening, and a tail long enough to be tucked inside tr front opening, and a tail long enough to be tucked inside tr",
                p_img: "assets/img/banner02.jpg"
            },
            {
                p_name: "Shirt",
                p_price: 2000,
                p_decs: " front opening, and a tail long enough to be tucked inside tr front opening, and a tail long enough to be tucked inside tr",
                p_img: "assets/img/banner03.jpg"
            },
            {
                p_name: "Shirt",
                p_price: 2000,
                p_decs: " front opening, and a tail long enough to be tucked inside tr front opening, and a tail long enough to be tucked inside tr",
                p_img: "assets/img/banner04.jpg"
            },
            {
                p_name: "Shirt",
                p_price: 2000,
                p_decs: " front opening, and a tail long enough to be tucked inside tr front opening, and a tail long enough to be tucked inside tr",
                p_img: "assets/img/banner05.jpg"
            },
            {
                p_name: "Shirt",
                p_price: 2000,
                p_decs: " front opening, and a tail long enough to be tucked inside tr front opening, and a tail long enough to be tucked inside tr",
                p_img: "assets/img/banner06.jpg"
            },
            {
                p_name: "Shirt",
                p_price: 2000,
                p_decs: " front opening, and a tail long enough to be tucked inside tr front opening, and a tail long enough to be tucked inside tr",
                p_img: "assets/img/banner07.jpg"
            },
            {
                p_name: "Shirt",
                p_price: 2000,
                p_decs: " front opening, and a tail long enough to be tucked inside tr front opening, and a tail long enough to be tucked inside tr",
                p_img: "assets/img/banner08.jpg"
            }

        ]
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.map((item, index) =>
                            
                            <div className="col-md-3">
                                <div className="card" >
                                    <img src={item.p_img} className="card-img-top" style={{ height: "250px" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.p_name}</h5>
                                        <p className="card-text">{item.p_decs}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
