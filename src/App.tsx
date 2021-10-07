import Users from './components/trending'
import { Router, Route, Switch,Link } from 'react-router-dom';
import { createBrowserHistory } from "history";

function App() {
 const history = createBrowserHistory();

  return (
    <div className="App">
        <Router history={history}>
         <Users></Users>
			  </Router>

    </div>
  );
}

export default App;
