import "./App.css";
import Home from "./Component/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetails from "./Component/CountryDetails/CountryDetails";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route exact path="/country" component={Home} />
        <Route path="/country/:countryName" component={CountryDetails} />
      </Switch>
    </Router>
  );
}
export default App;
