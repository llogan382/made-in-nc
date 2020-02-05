import React from 'react';
// import AllStores from './AllStores';
import AllItems from './AllItems';
import sampleItems from './sampleItems';
import StoreView from './StoreView';
import base from './base';



import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleView from './SingleView';


class App extends React.Component {

  state = {
    items: { sampleItems }
  };

  componentDidMount() {
    base.collection("items").doc("item1").set({
      details: {
        "itemName": "Dream Catcher",
        "itemSlug": "dream-catcher",
        "image": "https://i.picsum.photos/id/104/400/500.jpg",
        "location": "Forsyth County",
        "madeBy": "Alex Jones",
        "category": "crafts",
        "price": 17.99,
        "storeID": 1,
        "storeName": "She's Crafty",
        "storeSlug": "shes-crafty",
        "lastEdit": 1579659189298,

      }
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
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
            <Route exact path="/:storeslug/:itemSlug"
              render={(props) => <SingleView
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


