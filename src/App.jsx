// import React from 'react';

import Button from "./assets/components/Button";
import Cart from "./assets/components/Cart";
import Header from "./assets/components/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Cart></Cart>
    </div>
  );
};

export default App;
