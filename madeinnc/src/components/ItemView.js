import React from 'react';

//every class needs at least one method, called "RENDER"
class ItemView extends React.Component {
    componentDidMount() {
        // const { itemSlug } = this.props.match.params

        this.setState()
    }
    render() {
        const { itemName, image, location, madeBy, category, price, storeName, storeSlug, itemSlug } = this.props.location.state.itemInfo
        return (
            <div>

                <img src={image} />
                <h2>{itemName}</h2>
                <p>{itemName}</p>
                <p>{location}</p>
                <p>{madeBy}</p>
                <p>{category}</p>
                <p>{price}</p>
                <p>{storeName}</p>
                <p>{storeSlug}</p>



                Hello!</div>

        )
    }
}


export default ItemView;