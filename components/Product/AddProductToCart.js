import React from 'react';
import { Input } from 'semantic-ui-react';
import { userRouter } from 'next/router';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import catcherrors from '../../utils/catchErrors'
import cookie from 'js-cooki';
import catchErrors from '../../utils/catchErrors';

function AddProductToCart({ user, productId }) {
 const [ quantity, setQuantity ] = React.useState(1);
 const [loading, setLoading] = React.useState(false)
 const [success, setSuccess] = React.useState(false)
 const router = userRouter()

async function handleAddProductToCart(){
  try {
    setLoading(true)
    const url = `${baseUrl}/api/cart`;
    const payload = { quantity, productId };
    const token = cookie.get('token');
    const headers = { header: {Authorization: token}};
    await axios.put(url, payload, headers);
    setSuccess(true)
  } catch(error) {
    catchErrors(error, window.alert)
  } finally {
    setLoading(false)
  }
 } 

  return <Input 
    type="number"
    min="1"
    placeholder="Quantity"
    value={quantity}
    onChange ={event => setQuantity(Number(event.target.value))}

    action={
      user && success ? {
        color:"blue",
        content: "Item Added!",
        icon: "plus cart",
        disabled: true
      } :
      user ? {
      color: 'orange',
      content: "Add to Cart",
      icon: "plus cart",
      onClick: handleAddProductToCart
    } : {
      color:'blue',
      content: "Sign Up To Purchase",
      icon: "signup",
      onClick: () => router.push('/signup')
    }}
  />
}

export default AddProductToCart;
