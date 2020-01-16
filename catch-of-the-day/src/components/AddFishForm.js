import React from "react";

//pass the value by reference.
class AddFishForm extends React.Component {

    // Reference each item in the form.
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    // When entering data in form, handle the event
    createFish = (event) => {
        event.preventDefault();

        // Create a fish object based on items in form
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        };
        console.log(fish);
    };
    render() {
        return (

            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />


                <select name="status" ref={this.statusRef}>status
                    <option value="available">Fresh!</option>
                    <option value="available">Sold out!</option>

                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc">desc</textarea>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit">Add Fish!</button>
            </form>

        );
    }
}

export default AddFishForm;