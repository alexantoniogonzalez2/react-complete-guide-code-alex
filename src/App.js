import { Route, Switch } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import NewQuote from "./components/pages/NewQuote";
function App() {
  return (
    <Switch>
      <Route path="/quotes" exact >
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
