import React from "react";

class AddFishForm extends React.Component {

    createFish = (event) => {
        event.preventDefault();

        console.log('making a fish');
    }
    render() {
        return (

            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="Name">name</input>
                <input name="price" type="text" placeholder="Price">price</input>


                <select name="status">status
                    <option value="available">Fresh!</option>
                    <option value="available">Sold out!</option>

                </select>

                <textarea name="desc" placeholder="Desc">desc</textarea>
                <input name="image" type="text" placeholder="Image">image</input>
                <button type="submit">Add Fish!</button>
            </form>

        );
    }
}

export default AddFishForm;