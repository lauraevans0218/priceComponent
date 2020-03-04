import React from 'react'; 
import cartIcon from './Images/cartIcon.jpeg'


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

const iconStyle ={
    height: 15, 
    borderRadius: 5,
    verticalAlign: "middle",
    justifyContent: "left",
    width: 25,
    postion: "absolute",
    marginLeft: "0%"
};


const addToCartStyle = {
    background: "linear-gradient(to top, #ffcc66 0%, #ffffff 116%)",
    fontSize: 13,
    padding: 5,
    borderRadius: 5,
    fontFamily: "Arial",
    align: "center",
    width: 200,
    cursor: "pointer",
    textAlign: "center",
    justifyContent: "center"
    
}
const Bottom = () => (
   
    <div>
        <span>       
            <button style={addToCartStyle}>
                <img src={cartIcon} 
                style={iconStyle} ></img>
                  Add to Cart</button> 
        </span>
       
        <form>
                <input type="checkbox"></input>
                <label style={divStyle}>Add gift options
                </label>
        </form>
        <button style={divStyle2}>Add to your Dash Buttons</button>
        <h5 style={divStyle3}>Learn more about Dash Buttons</h5>
        <button style={divStyle2}>Add to List</button>
    </div>
);

export default Bottom;