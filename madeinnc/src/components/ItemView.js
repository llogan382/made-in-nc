import React from 'react';
import { Link } from 'react-router-dom';

//every class needs at least one method, called "RENDER"
class ItemView extends React.Component {

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
    componentDidMount() {
        // const { itemSlug } = this.props.details.match.params

        this.setState()
    }

    render() {
        const itemInfo = this.filterItem()[0]
        return (
            <div>


                <img src={itemInfo.image} alt="" />
                <p>{itemInfo.itemName}</p>
                <p>{itemInfo.location}</p>
                <p>{itemInfo.madeBy}</p>
                <p>{itemInfo.category}</p>


                Hello!</div>

        )
    }
}


export default ItemView;