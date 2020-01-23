import React from 'react';
// import ItemView from './ItemView';
import { Link } from 'react-router-dom';

import '../App.css';
// import ItemView from './ItemView';


class AllItems extends React.Component {


    goToItem = event => {
        event.preventDefault();

        // console.log(itemName);

    }
    render() {

        const { itemName, image, location, madeBy, category, price, storeName, storeSlug, itemSlug } = this.props.details;


        return (
            <div className="homeGridItem" >
                <Link to={{
                    pathname: `/${storeSlug}/${itemSlug}`,
                    state: {
                        itemInfo: this.props.details
                    },
                    storeSlug: { storeSlug: this.props.details.storeSlug }
                }}
                >
                    <img src={image} alt={itemName} />

                </Link>

                <p>{itemName}</p>
                <p>{location}</p>
                <p>{madeBy}</p>
                <p>{category}</p>
                <p>{price}</p>
                <Link
                    to={{
                        pathname: `/${storeSlug}`,
                        state: {
                            storeView: this.props.storeView
                        },
                        store: `${storeSlug}`
                    }}
                >
                    <p>{storeSlug}</p>

                </Link>
                <p>{storeName}</p>



            </div>
        );
    }
}

export default AllItems;
