import React from 'react';
import { Link } from 'react-router-dom';
import EditItemForm from './EditItemForm';
//every class needs at least one method, called "RENDER"
class ItemView extends React.Component {



    render() {
        return (
            <div>

                <Link to={`${this.props.details.storeSlug}/${this.props.details.itemSlug}`}>
                    <img src={this.props.details.image} />
                </Link>
                <h2>{this.props.details.itemName}</h2>
                <p>{this.props.details.location}</p>
                <p>{this.props.details.madeBy}</p>
                <p>{this.props.details.category}</p>
                <p>{this.props.details.price}</p>
                <p>{this.props.details.storeName}</p>
                <Link to={`${this.props.details.storeSlug}`}>
                    <p>{this.props.details.storeSlug}</p>
                </Link>

                <EditItemForm
                    details={this.props.details}
                    key={this.props.index}
                    index={this.props.index}
                    updateItem={this.props.updateItem}
                    storeSlug={this.props.storeslug}
                />


                Hello!</div>

        )
    }
}


export default ItemView;