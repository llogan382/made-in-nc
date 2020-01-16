import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


//every class needs at least one method, called "RENDER"
class App extends React.Component {

    // Instead of constructor method, we are using a property
    state = {
        fishes: {},
        order: {}
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header
                        tagline="Wes Is Cool"
                    />
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
}

export default App;