import React from 'react';
// import AllStores from './AllStores';
import AllItems from './AllItems';
import items from './sampleItems';
import StoreView from './StoreView';
import db from './base';



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




  // componentDidMount() {
  //   this.setState();

  //   // console.log({ data })
  //   // db.collection("items")
  //   //   .doc(data.uid.toString())
  //   //   .set(data)
  //   //   .then(() => {
  //   //     console.log("Success!")
  //   //   })
  //   //   .catch(error => {
  //   //     console.log("Failed!")
  //   //   });
  // }



  // Load fishes button. Created here, passed to Inventory
  loadSampleItems = () => {
    // console.log('hi')
    // Update STATE when clicked; update it to SAMPLEFISHES
    this.setState({ items });
  }


  updateItem = (key, updatedItem) => {
    // 1. take a copy of current state
    const items = { ...this.state.items }; //all items

    // 2. update the state
    items[key] = updatedItem; //item is the Object Key

    // 3. set that to state
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
                details={this.state.items} isAuthed={true}
                updateItem={this.updateItem}

              />}
            >
            </Route>
            <Route exact path="/:storeslug/:itemSlug"
              render={(props) => <SingleView
                item={props.match.params}
                itemSlug={props.match.params}
                details={this.state.items} isAuthed={true}
              />

              }
            >

            </Route>
            <Route exact path="/">
              <AllItems
                details={this.state.items}
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



