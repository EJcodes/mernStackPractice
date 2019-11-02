import { Button, Segment, Divider } from 'semantic-ui-react';

function CartSummary() {
  return <>
    <Divider/>
    <Segment clearing size="larger">
      <strong>sub total:</strong>$0.00
      <Button icon="cart" color="teal" floated="right" content="Checkout"/>
    </Segment>
  </>
}

export default CartSummary;
