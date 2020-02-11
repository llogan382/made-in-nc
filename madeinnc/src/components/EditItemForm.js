import React from 'react';



class EditItemForm extends React.Component {


    // Run the function on click.
    handleChange = (event) => {
        console.log(event.currentTarget.name, event.currentTarget.value)
    }
    render() {
        return (
            <div className="itemEdit">
                <input type="text" onChange={this.handleChange} name="itemName" value={this.props.details.itemName} />
                <input type="text" onChange={this.handleChange} name="category" value={this.props.details.category} />
                <input type="text" onChange={this.handleChange} name="price" value={this.props.details.price} />
                <select type="text" onChange={this.handleChange} name="status" value={this.props.details.inventory}>
                    <option value="available">available!</option>
                    <option value="unavailable">unavailable!</option>
                </select>
                <textarea onChange={this.handleChange} name="desc" />




                {/* <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} /><button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button> */}


            </div>
        )
    }
}

export default EditItemForm;