import React from 'react';
import { Button, Segment, Divider } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products }) {
  const [  cartAmount , setCartAmount ] = React.useState(0);
  const [ stripeAmount , setStripeAmount ] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);

  React.useEffect(() => {
    setCartEmpty(products.length === 0);
  }, [products]);
  return <>
    <Divider/>
    <Segment clearing size="large">
      <strong>sub total:</strong>$0.00
      <Button
      disabled={isCartEmpty} 

      icon="cart" color="teal" floated="right" content="Checkout"/>
    </Segment>
  </>
}

export default CartSummary;
