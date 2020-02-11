import React from 'react';
// import AllStores from './AllStores';
import AllItems from './AllItems';
import items from './sampleItems';
import StoreView from './StoreView';
// import db from './base';



import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleView from './SingleView';


class App extends React.Component {

  state = {
    items: {}
  };





  componentDidMount() {
    // db.collection("items")
    //   .get()
    //   .then(querySnapshot => {
    //     // console.log(querySnapshot.docs);
    //     const data = querySnapshot.docs.map(doc => doc.data());

    //     this.setState({ data });
    //     // console.log(this.state.items.items); // array of cities objects
    //   });
    // .then(function (docRef) {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function (error) {
    //   console.error("Error adding document: ", error);
    // });
    // this.setState({ items: dbState })
    // console.log(this.state.items.items);
  }

  // Load fishes button. Created here, passed to Inventory
  loadSampleItems = () => {
    // console.log('hi')
    // Update STATE when clicked; update it to SAMPLEFISHES
    this.setState({ items: { items } });
  }


  updateItem = (key, updatedItem) => {
    // 1. take a copy of current state
    const items = { ...this.state.items.items }; //all items

    // 2. update the state
    items[key] = updatedItem;
    // 3. set that to state
    // console.log(this.state.items.items) // OBJECT
    // console.log(this.state.items) OBJECT
    // console.log(key) "item2"
    this.setState({ items });
  }

  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/:storeslug"
              render={(props) => <StoreView
                storeslug={props.match.params}
                details={this.state.items.items} isAuthed={true}
                updateItem={this.updateItem}

              />}
            >
            </Route>
            <Route exact path="/:storeslug/:itemSlug"
              render={(props) => <SingleView
                item={props.match.params}
                itemSlug={props.match.params}
                details={this.state.items.items} isAuthed={true}
              />

              }
            >

            </Route>
            <Route exact path="/">
              <AllItems
                details={this.state.items.items}
                firebaseData={this.state.data}
                loadSampleItems={this.loadSampleItems}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



