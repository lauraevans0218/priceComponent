import React from 'react';
import image from './Images/newPrimeLogo.png';
import styles from './styles.module.css';


//NEED TO ADD IMAGE 
const divStyle = {
    color: "dimgray",
    fontFamily: "Arial",
    fontSize: 13, 
    fontWeight: 100
};

const divStyle2 = {
    color: "mediumblue",
    fontFamily: "Arial",
    fontSize: 13, 
    fontWeight: 100,
    border: "none"
    
};

const imgStyle ={
    height: 25, 
    right: 10,
    left: 10
};

const Shipping = () => (

    <div>
        <img src={image} style={imgStyle}/>
        <span style={divStyle}>FREE One-Day &</span>
        <div> 
            <form>
                <select>
                    <option style={divStyle2} className={styles.dropdown}>FREE Returns</option>
                </select>
            </form>
        </div>
    </div>

);







export default Shipping;