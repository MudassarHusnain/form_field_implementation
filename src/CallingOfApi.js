import React, { Component } from 'react'
import  axios from "axios";
export default class CallingOfApi extends Component {
    constructor()
    {
        super();
        this.state={
            productsList:[]
        };
    }
    loadproductsList()
    {
      console.log("this is working properly")
        axios
        .get("/api/v1/products")
        .then((res) => {
          console.log(res)
          this.setState({ productsList: res.data });
        })
        .catch((error) => console.log(error));
    }
    
    componentDidMount() {
      this.loadproductsList();
    }
  render() {
    return (
      <div>
            {this.state.productsList.map((product,i) => {
              return (
                <div style={{backgroundColor:'grey',textDecorationColor:'white',textAlign:'center'}} key={i}>
                <h1>{product.name}</h1>
                <h1>{product.brand}</h1>
                <h1>{product.price}</h1>
                <h1>{product.pathOfFile}</h1>
                </div>
              );
            })}
      </div>
    )
  }
}
