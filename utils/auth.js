import cookie from 'js-cookie';
// since we are within a function not within a FUNCTION COMPONENT we can import the router directly
import Router from 'next/router';

export function handleLogin (token) {
    cookie.set('token', token)
    Router.push('/account')
}