import React from 'react';
// import AllStores from './AllStores';
import AllItems from './AllItems';
import sampleItems from './sampleItems';
import StoreView from './StoreView';



import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


class App extends React.Component {

  state = {
    items: { sampleItems }
  };


  render() {

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">All Items</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/:storeslug"
              render={(props) => <StoreView
                storeslug={props.match.params}
                details={this.state.items.sampleItems} isAuthed={true} />}
            >

            </Route>
            <Route path="/">
              <AllItems
                details={this.state.items.sampleItems}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



function About() {
  return <h2>About</h2>;
}
function Home() {
  return <h2>Home</h2>;
}
function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url} / components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url} / props - v - state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path} /: topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}