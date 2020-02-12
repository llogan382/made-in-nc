import React from 'react';
import { Link } from 'react-router-dom';

//every class needs at least one method, called "RENDER"
class ItemView extends React.Component {


    componentDidMount() {
        // const { itemSlug } = this.props.details.match.params

        this.setState()
    }



    filterItem = props => {

        const itemslug = this.props.item.itemSlug;
        const allItems = Object.values(this.props.details);
        // Go through an object, filter by Store
        // Get object WHERE object.key=== Object.value =slug
        const currentItem = allItems.filter(item => {
            if (item.itemSlug === itemslug) {
                return true;
            }
        })


        return currentItem;
    };

    render() {
        const itemDetails = this.filterItem()[0]
        return (
            <div>
                <img src={itemDetails.image} alt="" />
                <p>{itemDetails.itemName}</p>
                <p>{itemDetails.location}</p>
                <p>{itemDetails.madeby}</p>
                <p>{itemDetails.category}</p>
                <p>{itemDetails.price}</p>
                Single View!</div>

        )
    }
}


export default ItemView;