import React from 'react'; 
import locationMarker from './Images/locationMarker.png';

//Bold "Tomorrow"
//Insert countdown per hour 

const divStyle = {
    color: "black", 
    fontFamily: "Arial",
    fontSize: 13,
    fontWeight: 100,
};



const divStyle2 = {
    color: "black", 
    fontFamily: "Arial",
    fontSize: 13,
    fontWeight: "bold"
};

const divStyle3 = {
    color: "blue", 
    fontFamily: "Arial",
    fontSize: 13,
    fontWeight: 100,
    textDecoration: "underline"
};

const imgStyle ={
    height: 25, 
    right: 10,
    left: 10
};

const Delivery = () => (
   
    <div>
        <span>
        <h1 style={divStyle}>FREE delivery: <b>Tomorrow</b></h1>
        
        </span>
        <h3 style={divStyle}>Order within 2hrs 41mins </h3>
        <h4 style={divStyle3}>Details</h4>
        <img style= {imgStyle} src={locationMarker}/>
        <span style={divStyle3}>Deliver to Laura - Fort Hood 76544</span>
    </div>
);

export default Delivery;