import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const { history } = props;
  return <div className="home-page">    
    <Link className="nav-route-link" to={"/navbar-one"}>NavBar One</Link>
    <Link className="nav-route-link" to={"/navbar-two"}>NavBar Two</Link>
    <Link className="nav-route-link" to={"/navbar-three"}>NavBar Three</Link>
    <Link className="nav-route-link" to={"/navbar-four"}>NavBar Four</Link>
    <Link className="nav-route-link" to={"/navbar-four"}>NavBar Four</Link>
    <Link className="nav-route-link" to={"/navbar-four"}>NavBar Four</Link>
    <Link className="nav-route-link" to={"/navbar-four"}>NavBar Four</Link>
    <Link className="nav-route-link" to={"/navbar-four"}>NavBar Four</Link>
    <Link className="nav-route-link" to={"/navbar-four"}>NavBar Four</Link>
    <Link className="nav-route-link" to={"/navbar-four"}>NavBar Four</Link>
    <Link className="nav-route-link" to={"/navbar-four"}>NavBar Four</Link>
  </div>;
};

export default Home;
