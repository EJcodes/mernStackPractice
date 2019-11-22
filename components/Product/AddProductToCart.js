import React from 'react';
import { Input } from 'semantic-ui-react';
import { userRouter } from 'next/router';

function AddProductToCart({ user }) {
 const [ quantity, setQuantity ] = React.useState(1);
 const router = userRouter()

  return <Input 
    type="number"
    min="1"
    placeholder="Quantity"
    value={quantity}
    onChange ={event => setQuantity(Number(event.target.value))}

    action={user ?{
      color: 'orange',
      content: "Add to Cart",
      icon: "plus cart"
    } : {
      color:'blue',
      content: "Sign Up To Purchase",
      icon: "signup",
      onClick: () => router.push('/signup')
    }}
  />
}

export default AddProductToCart;
