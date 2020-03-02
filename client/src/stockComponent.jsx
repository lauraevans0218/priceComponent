import React from 'react'; 

//Insert Vendor from DB 
//qty drop down should have more quantities

const divStyle = {
    color: "green", 
    fontFamily: "Arial",
    fontSize: 17,
    fontWeight: 100
}

const divStyle2 = {
    color: "black", 
    fontFamily: "Arial",
    fontSize: 13,
    fontWeight: 100
}

const divStyle3 = {
    color: "green", 
    fontFamily: "Arial",
    fontSize: 17,
    fontWeight: 100
}

const Stock = () => (
   
    <div>
        <h1 style={divStyle}>In Stock.</h1>
        <h2 style={divStyle2}>Sold by TR pet and Fulfilled by Amazon.</h2>
        <button style={divStyle2}>Qty: 1</button>
    </div>
);

export default Stock;