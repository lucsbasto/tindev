import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Main from '../src/pages/Main'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" exact component={Main} />
        </BrowserRouter>
    );
}