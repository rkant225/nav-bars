import { Switch,Route,Link} from "react-router-dom";
import './App.css';

import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NavBarOne from "./Components/NavBarOne/NavBarOne";
import NotFound from "./Components/NotFound/NotFound";
import NavBarTwo from "./Components/NavBarTwo/NavBarTwo";
import NavBarThree from "./Components/NavBarThree/NavBarThree";

function App() {
  return (
    <>
      <Link to={'/nav-bars'} className="home-button">Home</Link>
      <Switch>
        <Route path="/navbar-one" exact render={(props)=>{return <NavBarOne {...props}/>}}/>
        <Route path="/navbar-two" exact render={(props)=>{return <NavBarTwo {...props}/>}}/>
        <Route path="/navbar-three" exact render={(props)=>{return <NavBarThree {...props}/>}}/>

        <Route path="/" exact render={(props)=>{return <Home {...props}/>}}/>
        <Route path="/nav-bars" exact render={(props)=>{return <Home {...props}/>}}/>
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
