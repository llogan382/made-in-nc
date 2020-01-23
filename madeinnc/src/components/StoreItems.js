import React from 'react';
// import ItemView from './ItemView';

import '../App.css';


class StoreItems extends React.Component {

    render() {

        // {Object.keys(this.state.items.sampleItems).map(key =>
        //     <StoreItems
        //       key={key}
        //       details={this.state.items.sampleItems[key]}
        //     />)}
        return (
            <div className="homeGridItem" >
                {Object.keys(this.props.details.store1).map(key => )}


            </div>
        );
    }
}

export default StoreItems;
