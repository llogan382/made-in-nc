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
import ItemView from './ItemView';


class App extends React.Component {

  state = {
    items: { sampleItems }
  };


  render() {

    return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/:storeslug"
              render={(props) => <StoreView
                storeslug={props.match.params}
                details={this.state.items.sampleItems} isAuthed={true} />}
            >
            </Route>
            <Route path="/:storeslug/:itemSlug"
              render={(props) => <ItemView
                item={props.match.params}
                itemSlug={props.match.params}
                details={this.state.items.sampleItems} isAuthed={true} />}
            >

            </Route>
            <Route exact path="/">
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


