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
    color: "blue", 
    fontFamily: "Arial",
    fontSize: 17,
    fontWeight: 100,

}

const Stock = () => (
   
    <div>
        <h1 style={divStyle}>In Stock.</h1>
        <h2 style={divStyle2}>Ships from and sold by nozama.com.</h2> 
        <div> 
            <form>
                <span style={divStyle2}>Qty:</span>
                <select>
                    <option style={divStyle2} selected>1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                </select>
            </form>
        </div>
    </div>
);

export default Stock;