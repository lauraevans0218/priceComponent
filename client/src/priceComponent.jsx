import React from 'react'; 
//Static for now, need to add a route to pull data from DB, change state in componentdidmount

const divStyle = {
    color: "firebrick", 
    fontFamily: "Arial",
    fontSize: 17,
    fontWeight: 100
}
const Price = () => (
   
    <div>
        <h1 style={divStyle}>$45.23</h1>
    </div>
);

export default Price;