import App from "next/app";
import Layout from "../components/_App/Layout";

class MyApp extends App {
  static async getInitialPros({ Component, ctx }){
    let pageProps = {};

    if (Component.getIntialPros){
     pagePros = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    );
  }
}

export default MyApp;
