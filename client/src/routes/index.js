import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from '../pages/Home'
import Details from "../pages/Details";
import Product from "../pages/Products";
import Contact from "../pages/Buy";
import Category from "../pages/Categories";

export const Routes = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/products">
                <Product />
            </Route>
            <Route exact path="/products/:id">
                <Details />
            </Route>
            <Route path="/categories/:id">
                <Category />
            </Route>
            <Route path="/find-us">
                <Contact />
            </Route>
        </Switch>
        <Footer />
    </Router>
);