import React from 'react';
// import AllStores from './AllStores';
import AllItems from './AllItems';
import sampleItems from './sampleItems';
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
    items: { sampleItems }
  };





  componentDidMount() {
    // db.collection("items")
    //   .get()
    //   .then(querySnapshot => {
    //     // console.log(querySnapshot.docs);
    //     const data = querySnapshot.docs.map(doc => doc.data());

    //     this.setState({ data });
    //     // console.log(this.state.items.sampleItems); // array of cities objects
    //   });
    // .then(function (docRef) {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function (error) {
    //   console.error("Error adding document: ", error);
    // });
    // this.setState({ items: dbState })
    // console.log(this.state.items.sampleItems);
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
                firebaseData={this.state.data}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



