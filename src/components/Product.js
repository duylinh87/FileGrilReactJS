import React, { Component } from 'react';

class Product extends Component {


  render() {

    let {address,name,img,price } = this.props
    return (
      <div className="col-lg-3 mt-5 " >
        <div className="card" >
          <img src ={img} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {address}</h5>
              <p className="card-text">{name}</p>
              <button className="btn btn-primary">{price}</button>
              {/* <button className="btn btn-dark">Chơi Ngay</button> */}
            </div>
        </div>
        </div>
          );
        }
      }
      
export default Product;