import App from "next/app";
import Layout from "../components/_App/Layout";
import { parseCookies } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';


/*App class is executed on the server and its executed before anything else, its executed for everypage changed 
example: everything you go to one page to another this is execute. So its an ideal place to fetch users data with the JWT token. */
class MyApp extends App {
  static async getInitialPros({ Component, ctx }){
    const { token } = parseCookies(ctx);
    

    let pageProps = {};

    if (Component.getIntialPros){
     pagePros = await Component.getInitialProps(ctx)
    }

    if(!token) {
      const isProtectedRoute = ctx.pathname === '/account' || ctx.pathname === '/create'
      if (isProtectedRoute) {
        redirectUser(ctx, '/login')
      } else {
        // since we are trying to make a request to an end point we will setup up a try/catch here.
        try {
          const payload = { headers: { Authorization: token } }
          const url = `${baseUrl}/api/account`
          const response = await axios.get(url, payload)
          const user = response.data
          pageProps.user = user;
        } catch(error) {
          console.error("Error getting current user", error);

        }
      }
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps}/>
      </Layout>
    );
  }
}

export default MyApp;
