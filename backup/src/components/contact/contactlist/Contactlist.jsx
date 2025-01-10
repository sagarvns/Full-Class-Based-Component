import axios from "axios";
import React, { Component } from "react";
import Swal from 'sweetalert2'

export default class Contactlist extends Component {
  constructor() {
    super();
    this.state = {
      mydata: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3004/contact").then((res) => {
      // console.log(res);
      console.log(res.data);
      this.setState({ mydata: res.data });
    });
  }

  getLiveData = () => {
    fetch("http://localhost:3004/contact")
      // console.log("sagar")s

      .then((response) => response.json())
      // .then(json=>console.log(json))
      .then((json) => this.setState({ mydata: json }));
    // console.log(mydata);
  };
   deleteUser = (id)=>{
      
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete("http://localhost:3004/contact/"+id)
          .then((res)=>{
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          })
        });
        this.componentDidMount();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
   }

  render() {
    return (
      <>
        <input
          type="submit"
          className="btn btn-success"
          value="Get live server Contact list data"
          onClick={this.getLiveData}
        />

        <br />
        <br />
        <marquee>Welcome to my website!</marquee>
        {/* <marquee bgcolor="lightblue" width="300" height="50">Styled Marquee</marquee> */}

        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                    <th>Mobail Number</th>
                    <th> message </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.mydata.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.f_name}</td>
                      <td>{item.l_name}</td>
                      <td>{item.email_id}</td>
                      <td>{item.mobile_number}</td>
                      <td>{item.message}</td>
                      <td>
                        <img
                          alt=""
                          style={{ with: "20px", height: "30px", cursor:"pointer" }}
                          src="assets/gallery/download.png"
                          
                          onClick={(()=>{this.deleteUser(item.id)})}
                        />
                        
                        &nbsp;&nbsp;
                        <img
                          alt=""
                          style={{ with: "20px", height: "30px" }}
                          src="assets/gallery/download (1).png"
                        />
                     
                      </td>
                      
                       
                        
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </>
    );
  }
}
