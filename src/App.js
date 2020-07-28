import React from 'react';
import './App.css';
import CartIndicator from "./components/CartIndicator"

function App() {
  return (
    <div className="Container">
      <div className="Row">
        <div className="col-sm-12">
          {/*Link to={/}*/}
          <h1 Strivazon book store ></h1>
        </div>
        <CartIndicator />
      </div>
      <hr />
      <div className="">
        
      </div>
    </div>
  );
}

export default App;
