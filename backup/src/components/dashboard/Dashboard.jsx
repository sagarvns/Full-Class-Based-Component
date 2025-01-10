import React, { Component } from 'react'
import './dashboard.css'
import Card from './Card'
import Mycard from './Mycard'
import Mycarddata from './Mycarddata'
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className='my_heading'>Dashboard</div>
        <div className='my_container'>
          <Card p_name="shirt" p_price="1200" p_img="assets/img/banner01.jpg" p_desc="a garment for the upper part of the body: such as. a. : a cloth garment usually having a collar, sleeves, a front opening, and a tail long enough to be tucked inside trousers or a skirt" />
          <Card p_name="beg" p_price="1500" p_img="assets/img/banner02.jpg" p_desc="a garment for the upper part of the body: such as. a. : a cloth garment usually having a collar, sleeves, a front opening, and a tail long enough to be tucked inside trousers or a skirt" />
          <Card p_name="jeans" p_price="1600" p_img="assets/img/banner03.jpg" p_desc="a garment for the upper part of the body: such as. a. : a cloth garment usually having a collar, sleeves, a front opening, and a tail long enough to be tucked inside trousers or a skirt" />
          <Card p_name="kurti" p_price="1800" p_img="assets/img/banner04.jpg" p_desc="a garment for the upper part of the body: such as. a. : a cloth garment usually having a collar, sleeves, a front opening, and a tail long enough to be tucked inside trousers or a skirt" />
        </div>
        <br />
        <br />
        <Mycard/>
        <br />
        <br />
        <Mycarddata/>
      </>
    )
  }
}
