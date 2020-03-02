import React from 'react'; 


const divStyle = {
    color: "black", 
    fontFamily: "Arial",
    fontSize: 13,
    fontWeight: 100
}
const divStyle2 = {
    color: "black", 
    fontFamily: "Arial",
    fontSize: 13,
    fontWeight: 100,
    backgroundColor: "lightgray"
}

const divStyle3 = {
    color: "blue", 
    fontFamily: "Arial",
    fontSize: 13,
    fontWeight: 100
}


const Bottom = () => (
   
    <div>
        <button>Add to Cart</button>
        <button>Buy Now</button>
        <button style={divStyle}>Add gift options</button>
        <button style={divStyle2}>Add to your Dash Buttons</button>
        <h5 style={divStyle3}>Learn more about Dash Buttons</h5>
        <button style={divStyle2}>Add to List</button>
    </div>
);

export default Bottom;