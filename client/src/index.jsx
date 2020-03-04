import React from 'react';
import ReactDOM from 'react-dom';
import Bottom from './bottomComponent';
import Delivery from './deliveryComponent';
import Price from './priceComponent';
import Shipping from './shippingComponent';
import Stock from './stockComponent';


class App extends React.Component {



  render() {
    const styleBody = {
      border: 10,
      borderColor: "gray",
      borderWidth: "thin",
      borderStyle: "solid",
      padding: 14,
      background: "white",
      borderRadius: 3,
      position: "absolute",
      right: 50, 
    };

    return (
      <div style={styleBody} >
        <Price />
        <Shipping />
        <Delivery />
        <Stock /> 
        <br></br>
        <Bottom />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));