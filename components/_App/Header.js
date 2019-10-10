import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';


function Header() {
  const user = false;
  return (
    <Menu fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header>
            <image size="mini" src="/static/logo.svg" style={{ magrinRight: '1em' }} />
            KaolaKickball
          </Menu.Item>
        </Link> 


        <Link href="/cart">
          <Menu.Item header>
            <icon name="cart" size="large"/>
            Cart
          </Menu.Item>
        </Link>


        <Link href="/create">
          <Menu.Item header>
            <icon name="add square" size="large"/>
            Create
          </Menu.Item>
        </Link> 


        {user ? (<>
        <Link href="/account">
          <Menu.Item header>
            <Icon name="user" size="large"/>
            Acount
          </Menu.Item>
        </Link> 


        <Menu.Item header>
          <Icon name="sign out" size="large"/>
          Logout
        </Menu.Item>
        </>)
        :
        (<>
        <Menu.Item header>
          <Icon name="sign in" size="large"/>
          Login
        </Menu.Item>

        <Link href="/signup">
          <Menu.Item header>
            <icon name="signup" size="large"/>
            Signup
          </Menu.Item>
        </Link>
        </>)}
        




      </Container>
    </Menu>
  )
}

export default Header;
