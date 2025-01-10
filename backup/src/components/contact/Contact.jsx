import React, { Component } from 'react'
import './contact.css';
export default class Contact extends Component {
  constructor()
  {
    super()
    this.state={
      f_name:'',
      l_name:'',
      email_id:'',
      mobile_number:'',
      message:''
    }
    this.state={
    response_message:''
    }
    // console.log(this.state);
    
  }

  setFname=(event)=>{
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    this.setState({f_name:event.target.value})
  }
  setLname=(event)=>{
    this.setState({l_name:event.target.value})
  }
  setEmailid=(event)=>{
    this.setState({email_id:event.target.value})
  }
  setMobilenumber=(event)=>{
    this.setState({mobile_number:event.target.value})
  }
  setMessage=(event)=>{
    this.setState({message:event.target.value})
  }
 
  saveData=(event)=>{
    event.preventDefault();
     const res= fetch("http://localhost:3004/contact", {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify(this.state), // Convert the data to JSON
    })
   
 
    .then((responce)=>{
      if (responce.status==201)
      {
        // console.log("message Got Successfully")
        this.setState({response_message:'message Got Successfully'})
      }
    })
    .catch((error)=>{
      // console.log("Page is not found ");
      this.setState({response_message:'message not SuccessFully'})

      
    })

    
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.50299141685!2d77.31352557409215!3d28.584683586254542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458c559db7f%3A0x5409e498f655ef69!2sKVCH!5e0!3m2!1sen!2sin!4v1736165540105!5m2!1sen!2sin" style={{ border: "0", width: "100%", height: "280px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="row" style={{ marginTop: "2%" }}>
          <div className="col-md-4">
            <img src="assets/gallery/contact.jpeg" alt="" className='my_img' />
          </div>
          <div className="col-md-8">
          {this.state.response_message ? (
    <div className="alert alert-success">{this.state.response_message}</div>
  ) : ''}
            
            <div className="my_title1">get in touch..</div>
            <form action="" onSubmit={this.saveData}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={this.setFname}
                  name='f_name'
                  
                />
                {/* {this.state.f_name} */}
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                    onChange={this.setLname}
                  name='l_name'
                />
              </div>
            </div>
            <div className="row" style={{marginTop:"2%"}}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Id"
                  onChange={this.setEmailid}
                  name='email_id'
                  
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                    onChange={this.setMobilenumber}
                  name='mobile_number'
                />
              </div>
            </div>
            <div className="row" style={{marginTop:"2%"}}>
              <div className="col">
                <textarea   onChange={this.setMessage} name='message' className='form-control' style={{height:"80px"}} placeholder='Write your message here ?' id=""></textarea>
              </div>
            </div>
            <div className="row" style={{marginTop:"2%"}}>
              <div className="col">
                 <input type="submit" value="Send Message" className='btn btn-outline-success' />
              </div>
            </div>
            </form>

          </div>
        </div>
        <div className="row" style={{marginTop:"2%"}}>
          <div className="col-md-12">
            <div className="my_title2">
              Our Locations
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop:"5%"}}>
          <div className="col-md-6">
            <div className='my_card'>
              Noida
            </div>
          </div>
          <div className="col-md-6">
            <div className='my_card'>
              Noida
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:"5%"}}>
          <div className="col-md-6">
            <div className='my_card'>
              Noida
            </div>
          </div>
          <div className="col-md-6">
            <div className='my_card'>
              Noida
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:"5%"}}>
          <div className="col-md-6">
            <div className='my_card'>
              Noida
            </div>
          </div>
          <div className="col-md-6">
            <div className='my_card'>
              Noida
            </div>
          </div>
        </div>
      </div>
    )
  }
}
