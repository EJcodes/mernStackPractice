import cookie from 'js-cookie';
// since we are within a function not within a FUNCTION COMPONENT we can import the router directly
import Router from 'next/router';

export function handleLogin (token) {
    cookie.set("token", token);
    Router.push("/account");
}


export function redirectUser(ctx, location){
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location }); // status code 302 is status code specifically to say we are performing url redirect.
        ctx.res.end(); // to stop writing to to this response 
    } else {
        Router.push(location);
    }

}



export function handleLogout(){
    cookie.remove('token');
    window.localStorage.setItem('logout', Date.now())
    Router.push('/login');
}