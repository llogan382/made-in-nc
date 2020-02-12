import React from 'react';
import ItemView from './ItemView';


import '../App.css';
// import ItemView from './ItemView';


class StoreView extends React.Component {


    filterStoreItems = props => {
        // 1. Filter store items while preserving KEYS

        const allItems = { ...this.props.details };
        const filteredItems = [];
        const storeItems = Object.entries(allItems).forEach((item) => {
            if (item[1].storeSlug === this.props.storeslug.storeslug) {
                filteredItems.push(item)
            }
        })
        return Object.fromEntries(filteredItems);

    };



    render() {

        return (

            <div>
                hello Storeview
                {Object.keys(this.filterStoreItems()).map(
                    key =>
                        <ItemView
                            key={key}
                            index={key}
                            details={this.filterStoreItems()[key]}
                            updateItem={this.props.updateItem}
                        />

                )
                }
            </div>

        )
    }
}


export default StoreView;
