import React from 'react';
// import AllStores from './AllStores';
import AllItems from './AllItems';
import sampleItems from './sampleItems';


import '../App.css';
import StoreView from './StoreView';


class App extends React.Component {

  state = {
    items: { sampleItems }
  };

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Made in NC</h1>
          <div className="HomeGrid">
            {Object.keys(this.state.items.sampleItems).map(key =>
              <AllItems
                key={key}
                details={this.state.items.sampleItems[key]}
                item={key}
                storeView={this.state.items.sampleItems}
              />)}


          </div>


        </header>
      </div>
    );
  }
}

export default App;
