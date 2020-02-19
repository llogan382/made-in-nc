import React from 'react';



class EditItemForm extends React.Component {




    // Run the function on click.
    handleChange = event => {

        // Take a copy of the fish
        const updatedItem = {
            ...this.props.details,

            [event.currentTarget.name]: event.currentTarget.value
        };

        this.props.updateItem(this.props.index, updatedItem)

    };

    render() {
        let editForm;
        if (!this.props.storeSlug) {
            editForm = <div></div>
        } else {
            editForm =
                <div>
                    <input type="text" onChange={this.handleChange} name="itemName" value={this.props.details.itemName} />
                    <input type="text" onChange={this.handleChange} name="category" value={this.props.details.category} />
                    <input type="text" onChange={this.handleChange} name="price" value={this.props.details.price} />
                    <select type="text" onChange={this.handleChange} name="status" value={this.props.details.inventory}>
                        <option value="available">available!</option>
                        <option value="unavailable">unavailable!</option>
                    </select>
                    <textarea onChange={this.handleChange} name="desc" />
                </div>

        }
        return (
            <div className="itemEdit">
                {editForm}

            </div>
        )
    }
}

export default EditItemForm;