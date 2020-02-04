import React from 'react';
import ItemView from './ItemView';


import '../App.css';
// import ItemView from './ItemView';


class StoreView extends React.Component {


    filterStoreItems = props => {
        const storeslug = this.props.storeslug.storeslug;

        const allItems = Object.values(this.props.details);
        // Go through an object, filter by Store
        // Get object WHERE object.key=== Object.value =slug
        const storeItems = allItems.filter(item => {
            if (item.storeSlug === storeslug) {
                return true;
            }
        });

        return storeItems;
    };


    componentDidMount() {
        // const { itemSlug } = this.props.match.params
        this.setState()
    }


    render() {

        return (

            <div>
                {Object.keys(this.filterStoreItems()).map(
                    key =>
                        <ItemView
                            key={key}
                            index={key}
                            details={this.filterStoreItems()[key]}
                        />
                )
                }
            </div>

        )
    }
}


export default StoreView;
