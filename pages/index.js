import React from 'react';
import axios from 'axios';

function Home() {
  /*use effect hook accepts 2 args first argrument is a effect function, second argument we provide dependecies.   


  */
  React.useEffect(() => {
      getProducts() 
  }, [])

  function getProducts() {
    const url = 'http://localhost:3000/api/products'
    axios.get(url)
  }
}

export default Home;
