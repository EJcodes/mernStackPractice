import App from "next/app";
import Layout from "../components/_App/Layout";
import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { Router } from "next/router";


/*App class is executed on the server and its executed before anything else, its executed for everypage changed 
example: everything you go to one page to another this is execute. So its an ideal place to fetch users data with the JWT token. */
class MyApp extends App {
  static async getInitialProps({ Component, ctx }){
    const { token } = parseCookies(ctx);
    
    let pageProps = {};

    if (Component.getInitialProps) {
     pageProps = await Component.getInitialProps(ctx)
    }

    if(!token) {
      const isProtectedRoute = ctx.pathname === '/account' || ctx.pathname === '/create';
      if (isProtectedRoute) {
        redirectUser(ctx, '/login');
      }
      } else {
        // since we are trying to make a request to an end point we will setup up a try/catch here.
        try {
          const payload = { headers: { Authorization: token } };
          const url = `${baseUrl}/api/account`;
          const response = await axios.get(url, payload);
          const user = response.data;
          const isRoot = user.role === "root";
          const isAdmin = user.role === "admin";
          // if authenticated , but of role 'admin' or 'root', redirect from '/create' page
          const isNotPermitted = (isRoot || isAdmin) && ctx.pathname === '/create'
          if (isNotPermitted){
            redirectUser(ctx, '/')
          }
          pageProps.user = user;
        } catch (error) {
          console.error("Error getting current user", error);
          // 1) Throw out invalid token
          destroyCookie(ctx, "token");
          // 2) Redirect to login
          redirectUser(ctx, "/login");

        }
      }  
      return { pageProps };
    }
    
    componentDidMount(){
      window.addEventListener('storage',this.syncLogout);
    }

    syncLogout = event => {
      if (event.key === 'logout'){
        console.log("logged out from storage")
        Router.push('/login')
      }
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
