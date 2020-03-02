import React from 'react';
import ReactDOM from 'react-dom';
import Bottom from './bottomComponent';
import Delivery from './deliveryComponent';
import Price from './priceComponent';
import Shipping from './shippingComponent';
import Stock from './stockComponent';


class App extends React.Component {



  render() {
    return (
      <div>
        <Price />
        <Shipping />
        <Delivery />
        <Stock /> 
        <Bottom />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));